# Piano

## How to Install

To play with the project locally :

Clone the repository

```git clone git@github.com:JeanDavidDaviet/piano.git```

Go to the directory

```cd piano```

Install the dependencies

```yarn```

Run the development server

```yarn run start```

## WIP

### Done
- [x] Fix tempo issues
- [x] Use config file for global variables ? ( a way to share it)
- [x] Routing
- [x] ChangeLog
- [x] Clef change
- [x] Add Time signature
- [x] 4/4 3/4 2/4 6/8 change time signature
- [x] notes overlapping chords
- [x] Play note
- [x] Localization
- [x] [Add button to detect user interaction](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio)
- [x] Add all sounds from top to bottom
- [x] Add settings dialog
- [x] Add shortcuts
- [x] Add redux
- [x] Change Running Checkbox to Volume Checkbox
- [x] Add localstorage to keep configuration between reload
- [x] when using shortcut to change scale with keyboard arrows, need to update the controlScale input too.
- [x] When the number of alterations changes the start of the red line need to be moved futher right.
- [x] When using 3/4, need to show only 3 notes
- [x] Choose between international notation (A, B, C, ...) and latin notation (La, Si, Do, ...)
- [x] Alterations need to be above the svg lines
- [x] Use of Perlin noise to nicer note curves

## Todo
- [ ] Better handle on audio play() error (NotAllowedError) instead of console.logging everything
- [ ] Add tests
- [ ] When changing the quarter per beat time signature, the note should chage to be quarter, eighth...
- [ ] Sort the scales not on name only but on tone => Cb then C then C#
- [ ] As, Ds, and Gs need to have their signature. Signature can't be relevant to order in array because then order of flats is wrong.
- [ ] Bug with the notation of staves not updating but the scaleInput does.
- [ ] Bug when playing has started and I change the scale while playing, the sheet translateX to the old scale translateX, and not the new

## Features
- [ ] Add metronome sound
- [ ] Add differents notes (eighths, half, whole, ...)
- [ ] Make the tempo a range selector
- [ ] Make the sheet bigger or smaller
- [ ] Add both clef in the same time like a real sheet

## On update
- Bump version number (config, package.json)
- Changelog in differents translations (careful of date format)
- Cleanup
- Tests
- Dploy
