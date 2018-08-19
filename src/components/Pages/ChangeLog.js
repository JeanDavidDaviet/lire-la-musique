import React from 'react';
import './ChangeLog.css';

const ChangeLog = () => (
  <article className="page">
    <h2>Changelog (last updated 17th, August 2018)</h2>
    <ul className="changelogs">
      <li>1.4 – 08/19/2018
        <ul>
          <li>Add Time signature</li>
        </ul>
        <ul>
          <li>1.4.1 – 08/19/2018
            <ul>
              <li>Fix overlapping first notes over chord issue</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>1.3 – 08/19/2018
        <ul>
          <li>Added possibilty to change between treble and bass key</li>
          <li>Added more tempo choices</li>
        </ul>
      </li>
      <li>1.2 – 08/18/2018
        <ul>
          <li>Remove whitespace of signature</li>
          <li>Fix issues of routing</li>
        </ul>
      </li>
      <li>1.1 – 08/17/2018
        <ul>
          <li>Added React Router for navigation between pages</li>
        </ul>
      </li>
      <li>1.0 – 08/16/2018
        <ul>
          <li>Launch of lire-la-musique.fr</li>
          <li>Added Material Design</li>
        </ul>
      </li>
    </ul>
  </article>
)

export default ChangeLog;