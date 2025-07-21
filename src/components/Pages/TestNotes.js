import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Button from '@mui/material/Button';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Pause from '@mui/icons-material/Pause';
import Skip from '@mui/icons-material/SkipNext';
import config from '../../config.js';
import { realSounds } from '../Note/sounds/sounds.js';
import Note from '../Note/Note.js';
import getAudioContext from '../../webAudio.js';
import Controls from '../Controls/Controls';
import Footer from '../Layout/Footer.js';
import { useMedia } from '../../useMedia.js';

// Get all notes in ascending order based on Y position
const getAllNotesAscending = () => {
  const noteEntries = Object.entries(realSounds);
  // Sort by Y position (key) in descending order since lower Y = higher pitch
  return noteEntries.sort((a, b) => parseInt(b[0]) - parseInt(a[0]));
};

// Note names corresponding to Y positions
const getNoteNames = () => {
  const noteNames = {
    "-70": "C1", "-65": "D1", "-60": "E1", "-55": "F1", "-50": "G1",
    "-45": "A2", "-40": "B2", "-35": "C2", "-30": "D2", "-25": "E2", "-20": "F2", "-15": "G2",
    "-10": "A3", "-5": "B3", "0": "C3", "5": "D3", "10": "E3", "15": "F3", "20": "G3",
    "25": "A4", "30": "B4", "35": "C4", "40": "D4", "45": "E4", "50": "F4", "55": "G4",
    "60": "A5", "65": "B5", "70": "C5"
  };
  return noteNames;
};

const TestNotes = ({ volume, tempo, instrument }) => {
  const { t } = useTranslation();
  const isSmallHeight = useMedia([`(max-height: ${config.isSmallHeight}px)`], [true], false);
  
  const [context, setContext] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(-1);
  const [audioContext, setAudioContext] = useState(null);
  
  const allNotes = getAllNotesAscending();
  const noteNames = getNoteNames();

  const setContextOnce = () => {
    if (!context) {
      const audioCtx = getAudioContext();
      audioCtx.resume().then(() => {
        setContext(true);
        setAudioContext(audioCtx);
      });
    }
  };

  const playNote = async (audioFile) => {
    if (!audioContext) return;
    
    try {
      const response = await fetch(audioFile);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      
      const source = audioContext.createBufferSource();
      const gainNode = audioContext.createGain();
      
      source.buffer = audioBuffer;
      gainNode.gain.value = volume / 100;
      
      source.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      source.start();
    } catch (error) {
      console.error('Error playing note:', error);
    }
  };

  const playAllNotes = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setCurrentNoteIndex(-1);
      return;
    }

    setContextOnce();
    setIsPlaying(true);
    setCurrentNoteIndex(0);
  };

  const playNextNote = () => {
    if (currentNoteIndex < allNotes.length - 1) {
      setCurrentNoteIndex(currentNoteIndex + 1);
    } else {
      setIsPlaying(false);
      setCurrentNoteIndex(-1);
    }
  };

  useEffect(() => {
    if (isPlaying && currentNoteIndex >= 0 && currentNoteIndex < allNotes.length) {
      const [yPosition, audioFile] = allNotes[currentNoteIndex];
      playNote(audioFile);
      
      // Calculate interval based on tempo (tempo is BPM, so we want delay between notes)
      const interval = (60 / tempo) * 1000; // Convert to milliseconds
      
      const timer = setTimeout(() => {
        playNextNote();
      }, interval);
      
      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentNoteIndex, tempo, audioContext]);

  return (
    <React.Fragment>
      <Controls>
        <div style={{ padding: '20px' }}>
          <h2 style={{ margin: '0 0 20px 0', color: '#333' }}>
            {t('Test All Notes')} - {allNotes.length} {t('notes available')}
          </h2>
          
          <div style={{ marginBottom: '20px' }}>
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              onClick={playAllNotes}
              style={{ marginRight: '10px' }}
            >
              <span style={{ position: 'relative', top: 1, fontWeight: 'normal' }}>
                {isPlaying ? t('Stop') : t('Play All Notes')}
              </span>
              {isPlaying ?
                <Pause style={{ marginLeft: 5 }} /> :
                <PlayArrow style={{ marginLeft: 5 }} />}
            </Button>
            
            {isPlaying && (
              <Button 
                variant="outlined" 
                color="secondary" 
                size="large" 
                onClick={playNextNote}
              >
                <span style={{ position: 'relative', top: 1, fontWeight: 'normal' }}>
                  {t('Next Note')}
                </span>
                <Skip style={{ marginLeft: 5 }} />
              </Button>
            )}
          </div>

          {isPlaying && currentNoteIndex >= 0 && (
            <div style={{ 
              background: '#f0f0f0', 
              padding: '10px', 
              borderRadius: '5px',
              marginBottom: '20px'
            }}>
              <strong>
                {t('Now playing')}: {noteNames[allNotes[currentNoteIndex][0]]} 
                ({currentNoteIndex + 1}/{allNotes.length})
              </strong>
            </div>
          )}
        </div>
      </Controls>

      <div style={{ 
        padding: '20px', 
        minHeight: '400px',
        background: 'white',
        margin: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>
          {t('All Available Notes (Lowest to Highest)')}
        </h3>
        
        {/* Staff background */}
        <svg 
          width="100%" 
          height="300" 
          style={{ 
            background: '#fff',
            border: '1px solid #ddd',
            borderRadius: '5px'
          }}
        >
          {/* Draw staff lines */}
          {[0, 10, 20, 30, 40].map((line, index) => (
            <line 
              key={index}
              x1="0" 
              y1={150 + line} 
              x2="100%" 
              y2={150 + line} 
              stroke="#ccc" 
              strokeWidth="1"
            />
          ))}
          
          {/* Render all notes */}
          {allNotes.map(([yPosition, audioFile], index) => {
            const x = 50 + (index * 40); // Space notes horizontally
            const y = 150 - parseInt(yPosition); // Adjust Y position for display
            const isCurrentNote = isPlaying && currentNoteIndex === index;
            
            return (
              <g key={yPosition}>
                {/* Note */}
                <g 
                  className={`note ${isCurrentNote ? 'note--current' : ''}`}
                  style={{ 
                    transform: `translate(${x}px, ${y}px)`,
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    setContextOnce();
                    playNote(audioFile);
                  }}
                >
                  <g 
                    className="note__stem" 
                    style={{
                      transform: `translate(${parseInt(yPosition) < 20 ? 0 : 14}px, ${parseInt(yPosition) < 20 ? 0 : -38}px)`
                    }}
                  >
                    <path fill="none" stroke="black" d="M 1 0 L 1 35"></path>
                  </g>
                  <g className="note__head" style={{ transform: `rotate(-15deg)` }}>
                    <ellipse 
                      cx="8" 
                      cy="0" 
                      rx="8" 
                      ry="5"
                      fill={isCurrentNote ? '#ff4444' : 'black'}
                    ></ellipse>
                  </g>
                </g>
                
                {/* Note name label */}
                <text 
                  x={x + 8} 
                  y={y + 50} 
                  textAnchor="middle" 
                  fontSize="12" 
                  fill={isCurrentNote ? '#ff4444' : '#666'}
                  fontWeight={isCurrentNote ? 'bold' : 'normal'}
                >
                  {noteNames[yPosition]}
                </text>
              </g>
            );
          })}
        </svg>
        
        <div style={{ 
          marginTop: '20px', 
          fontSize: '14px', 
          color: '#666',
          textAlign: 'center'
        }}>
          {t('Click on any note to play it individually')} • 
          {t('Tempo')}: {tempo} BPM • 
          {t('Volume')}: {volume}%
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  volume: state.configReducer.volume,
  tempo: state.tempoReducer.tempo,
  instrument: state.configReducer.instrument,
});

export default connect(mapStateToProps)(TestNotes);