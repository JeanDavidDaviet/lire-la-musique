import './ChangeLog.css';
import React from 'react';

const ChangeLog = () => (
  <article className="page">
    <h2>Changelog (last updated 17th, August 2018)</h2>
    <ul className="changelogs">
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