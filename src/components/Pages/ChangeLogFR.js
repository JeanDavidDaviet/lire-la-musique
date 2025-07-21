import React from 'react';
import './ChangeLog.css';

const ChangeLogFR = () => (
  <article className="page">
    <h2>Changelog</h2>
    <ul className="changelogs">
      <li><strong>2.2.4</strong> – 20/07/2025
        <ul>
          <li>Correction du problème de routeur duppliqué (BrowserRouter)</li>
          <li>Amélioration de la compatibilité du mode plein écran avec les navigateurs</li>
          <li>Ajout du support des préfixes vendor pour requestFullscreen</li>
        </ul>
      </li>
      <li><strong>2.2.3</strong> – 12/12/2023
        <ul>
          <li>Mises à jour de dépendances</li>
          <li>Mise à jour du DevTools pour react-redux</li>
        </ul>
      </li>
      <li><strong>2.2.2</strong> – 09/12/2022
        <ul>
          <li>Mises à jour de dépendances majeures et corrections des problèmes liés</li>
        </ul>
      </li>
      <li><strong>2.2.1</strong> – 24/03/2021
        <ul>
          <li>Correction d'un bug empechant l'app de fonctionner sur Safari</li>
        </ul>
      </li>
      <li><strong>2.2.0</strong> – 14/04/2020
        <ul>
          <li>Utilisation d'un bruit Perlin pour générer de plus belles courbes de notes</li>
        </ul>
      </li>
      <li><strong>2.1.0</strong> – 14/04/2020
        <ul>
          <li>Ajout de choix de notation latine et mise à jour du Readme</li>
          <li>Maintenant le nombre de notes par barre refléte la signature rythmique</li>
        </ul>
      </li>
      <li><strong>2.0.4</strong> – 13/04/2020
        <ul>
          <li>La ligne rouge ne bougeait pas quand les alterations changeaient</li>
        </ul>
      </li>
      <li><strong>2.0.3</strong> – 24/01/2020
        <ul>
          <li>Correction d'un bug avec la locale du langage et mises à jour des dépendances</li>
        </ul>
      </li>
      <li><strong>2.0.2</strong> – 17/10/2019
        <ul>
          <li>Mises à jour de react-script vers la v3</li>
        </ul>
      </li>
      <li><strong>2.0.1</strong> – 11/04/2019
        <ul>
          <li>Ajout de Sentry pour une meilleure gestion des erreurs</li>
        </ul>
      </li>
      <li><strong>2.0</strong> – 26/03/2019
        <ul>
          <li>Ajout des groupes de notes d'accords (URL privée pour l'instant)</li>
          <li>Ajout du localStorage pour sauvegarder la configuration des paramètres</li>
        </ul>
      </li>
      <li><strong>1.9</strong> – 25/03/2019
        <ul>
          <li>Ajout du mode fullscreen</li>
          <li>Ajout de redux</li>
        </ul>
      </li>
      <li><strong>1.8</strong> – 16/03/2019
        <ul>
          <li>Ajout de la popup des crédits</li>
          <li>Ajout de la popup de contribution de la langue et son icône</li>
          <li>Ajout de la notification de changement de langue</li>
          <li>Mis à jour des icones de drapeaux et des sons des notes</li>
          <li>Correction des barres des notes qui n'étaient pas à la bonne hauteur et d'autres petits problèmes</li>
        </ul>
      </li>
      <li><strong>1.7.2</strong> – 15/03/2019
        <ul>
          <li>Correction des sons par ordinateurs qui ne marchaient plus et de l'ordre d'affichage des journaux de changements</li>
        </ul>
      </li>
      <li><strong>1.7.1</strong> – 14/03/2019
        <ul>
          <li>Corrections d'oublis de traductions de et mise à jours des dépendances</li>
        </ul>
      </li>
      <li><strong>1.7</strong> – 14/03/2019
        <ul>
          <li>Ajout des traductions des textes et des journaux de changements</li>
        </ul>
      </li>
      <li><strong>1.6</strong> – 14/03/2019
        <ul>
          <li>Ajout du choix d'intrument entre piano et sons générés par l'ordinateur</li>
        </ul>
      </li>
      <li><strong>1.5.1</strong> – 19/02/2019
        <ul>
          <li>Mise à jour de la version de React</li>
          <li>Changement de l'ordre d'affichage des versions du journal de changements-</li>
        </ul>
      </li>
      <li><strong>1.5</strong> – 21/08/2018
        <ul>
          <li>Les notes sont jouées</li>
          <li>Ajout de la ligne rouge</li>
        </ul>
      </li>
      <li><strong>1.4.2</strong> – 19/08/2018
        <ul>
          <li>Correction d'un problème sur mobile avec la partition qui dépassait</li>
        </ul>
      </li>
      <li><strong>1.4.1</strong> – 19/08/2018
        <ul>
          <li>Correction des premières notes qui se superposait avec l'accord</li>
        </ul>
      </li>
      <li><strong>1.4</strong> – 19/08/2018
        <ul>
          <li>Ajout de la signature de temps</li>
        </ul>
      </li>
      <li><strong>1.3</strong> – 19/08/2018
        <ul>
          <li>Ajout de la possiblité de changer entre la clé de sol et la clé de fa</li>
          <li>Added more tempo choices</li>
        </ul>
      </li>
      <li><strong>1.2</strong> – 18/08/2018
        <ul>
          <li>Suppression des espaces blancs dans la signature</li>
          <li>Correction des problèmes de routes</li>
        </ul>
      </li>
      <li><strong>1.1</strong> – 17/08/2018
        <ul>
          <li>Ajout de React Router pour la navigation entre les pages</li>
        </ul>
      </li>
      <li><strong>1.0</strong> – 16/08/2018
        <ul>
          <li>Lancement de lire-la-musique.fr</li>
          <li>Ajout du Material Design</li>
        </ul>
      </li>
    </ul>
  </article>
)

export default ChangeLogFR;
