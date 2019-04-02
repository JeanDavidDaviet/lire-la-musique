import React from 'react';
import './ChangeLog.css';

const ChangeLogEN = () => (
  <article className="page">
    <h2>Changelog (last updated 14th, March 2019)</h2>
    <ul className="changelogs">
      <li><strong>2.1.1</strong> – 04/02/2019
        <ul>
          <li>Bug fixes and improvements</li>
        </ul>
      </li>
      <li><strong>2.1</strong> – 04/01/2019
        <ul>
          <li>Added switch between international and latin notation</li>
        </ul>
      </li>
      <li><strong>1.8</strong> – 03/16/2019
        <ul>
          <li>Added credits modal</li>
          <li>Added language contribution modal and icon</li>
          <li>Added language change notification</li>
          <li>Updated the flags icon and the sounds of notes</li>
          <li>Fix note's bar not on the correct height and other small issues</li>
        </ul>
      </li>
      <li><strong>1.7.2</strong> – 03/15/2019
        <ul>
          <li>Fix computer sounds not generated and changelog display order</li>
        </ul>
      </li>
      <li><strong>1.7.1</strong> – 03/14/2019
        <ul>
          <li>Fix some translations mistakes and updated dependencies</li>
        </ul>
      </li>
      <li><strong>1.7</strong> – 03/14/2019
        <ul>
          <li>Added translations of texts and changelogs</li>
        </ul>
      </li>
      <li><strong>1.6</strong> – 03/14/2019
        <ul>
          <li>Added choice of instrument between piano and computer generated sounds</li>
        </ul>
      </li>
      <li><strong>1.5.1</strong> – 02/19/2019
        <ul>
          <li>Updated React version</li>
          <li>Changed changelog version's display order</li>
        </ul>
      </li>
      <li><strong>1.5</strong> – 08/21/2018
        <ul>
          <li>Notes are being played</li>
          <li>Added the red deadline</li>
        </ul>
      </li>
      <li><strong>1.4.2</strong> – 08/19/2018
        <ul>
          <li>Fix mobile issue with overflowing score</li>
        </ul>
      </li>
      <li><strong>1.4.1</strong> – 08/19/2018
        <ul>
          <li>Fix overlapping first notes over chord issue</li>
        </ul>
      </li>
      <li><strong>1.4</strong> – 08/19/2018
        <ul>
          <li>Add Time signature</li>
        </ul>
      </li>
      <li><strong>1.3</strong> – 08/19/2018
        <ul>
          <li>Added possibilty to change between treble and bass key</li>
          <li>Added more tempo choices</li>
        </ul>
      </li>
      <li><strong>1.2</strong> – 08/18/2018
        <ul>
          <li>Remove whitespace of signature</li>
          <li>Fix issues of routing</li>
        </ul>
      </li>
      <li><strong>1.1</strong> – 08/17/2018
        <ul>
          <li>Added React Router for navigation between pages</li>
        </ul>
      </li>
      <li><strong>1.0</strong> – 08/16/2018
        <ul>
          <li>Launch of lire-la-musique.fr</li>
          <li>Added Material Design</li>
        </ul>
      </li>
    </ul>
  </article>
)

export default ChangeLogEN;