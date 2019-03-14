import React from 'react';
import './ChangeLog.css';

const ChangeLogFR = () => (
  <article className="page">
    <h2>Changelog (dernière mise à jour le 14 mars 2019)</h2>
    <ul className="changelogs">
      <li><strong>1.6 – 14/03/2019</strong>
        <ul>
          <li>Ajout du choix d'intrument entre piano et sons générés par l'ordinateur</li>
        </ul>
      </li>
      <li><strong>1.5.1 – 19/02/2019</strong>
        <ul>
          <li>Mise à jour de la version de React</li>
          <li>Changement de l'ordre d'affichage des versons du journal des changements-</li>
        </ul>
        <ul>
          <li><strong>1.5 – 21/08/2018</strong>
            <ul>
              <li>Les notes sont jouées</li>
              <li>Ajout de la ligne rouge</li>
            </ul>
          </li>
        </ul>
      </li>
      <li><strong>1.4.2 – 19/08/2018</strong>
        <ul>
          <li>Correction d'un problème sur mobile avec la partition qui dépassait</li>
        </ul>
        <ul>
          <li><strong>1.4.1 – 19/08/2018</strong>
            <ul>
              <li>Correction des premières notes qui se superposait avec l'accord</li>
            </ul>
          </li>
          <li><strong>1.4 – 19/08/2018</strong>
            <ul>
              <li>Ajout de la signature de temps</li>
            </ul>
          </li>
        </ul>
      </li>
      <li><strong>1.3 – 19/08/2018</strong>
        <ul>
          <li>Ajout de la possiblité de changer entre la clé de sol et la clé de fa</li>
          <li>Added more tempo choices</li>
        </ul>
      </li>
      <li><strong>1.2 – 18/08/2018</strong>
        <ul>
          <li>Suppression des espaces blancs dans la signature</li>
          <li>Correction des problèmes de routes</li>
        </ul>
      </li>
      <li><strong>1.1 – 17/08/2018</strong>
        <ul>
          <li>Ajout de React Router pour la navigation entre les pages</li>
        </ul>
      </li>
      <li><strong>1.0 – 16/08/2018</strong>
        <ul>
          <li>Lancement de lire-la-musique.fr</li>
          <li>Ajout du Material Design</li>
        </ul>
      </li>
    </ul>
  </article>
)

export default ChangeLogFR;