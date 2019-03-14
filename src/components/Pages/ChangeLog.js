import React from 'react';
import './ChangeLog.css';

const ChangeLog = () => (
  <article className="page">
    <h2>Changelog (last updated 19th, February 2018)</h2>
    <ul className="changelogs">
      <li><strong>1.6 – 03/14/2019</strong>
        <ul>
          <li>Added choice between piano and computer generated sounds</li>
        </ul>
      </li>
      <li><strong>1.5.1 – 02/19/2019</strong>
        <ul>
          <li>Updated React version</li>
          <li>Changed changelog version order</li>
        </ul>
        <ul>
          <li><strong>1.5 – 08/21/2018</strong>
            <ul>
              <li>Notes are being played</li>
              <li>Added the red deadline</li>
            </ul>
          </li>
        </ul>
      </li>
      <li><strong>1.4.2 – 08/19/2018</strong>
        <ul>
          <li>Fix mobile issue with overflowing score</li>
        </ul>
        <ul>
          <li><strong>1.4.1 – 08/19/2018</strong>
            <ul>
              <li>Fix overlapping first notes over chord issue</li>
            </ul>
          </li>
          <li><strong>1.4 – 08/19/2018</strong>
            <ul>
              <li>Add Time signature</li>
            </ul>
          </li>
        </ul>
      </li>
      <li><strong>1.3 – 08/19/2018</strong>
        <ul>
          <li>Added possibilty to change between treble and bass key</li>
          <li>Added more tempo choices</li>
        </ul>
      </li>
      <li><strong>1.2 – 08/18/2018</strong>
        <ul>
          <li>Remove whitespace of signature</li>
          <li>Fix issues of routing</li>
        </ul>
      </li>
      <li><strong>1.1 – 08/17/2018</strong>
        <ul>
          <li>Added React Router for navigation between pages</li>
        </ul>
      </li>
      <li><strong>1.0 – 08/16/2018</strong>
        <ul>
          <li>Launch of lire-la-musique.fr</li>
          <li>Added Material Design</li>
        </ul>
      </li>
    </ul>
  </article>
)

export default ChangeLog;