import React from "react";

const Bio = () => {
  return (
    <div className="container">
      <div className="bio-paragraph">
        <h1>Jules Deschamps </h1>
        <p>
          Développeur Front-End de 25ans, je suis également formé au Back-End
          sous NodeJS et à la gestion de Base de Données relationnelle et
          non-relationnelle. La partie front m’attire tout particulièrement à la
          fois par l’approche Intégration (que l’on pourrait appelé le front-end
          du front-end) que par l’approche fonctionnelle avec notamment
          l’utilisation de framework et des gestionnaires d’états comme Redux
          (qui se rapprocherai du back-end du front-end).
        </p>
        <p className="p1">
          Et c’est d’ailleurs cette complexité du front actuel qui en fait un
          domaine très varié et attrayant, l’époque où le front pouvait être
          considéré comme du simple coloriage par les développeur back est
          révolue, merci React&nbsp;! <br />
          Ce n’est que depuis peu que j’ai franchi la barrière HTML CSS et
          gestion de dom avec JS, la découverte de React et de Redux marque pour
          moi un grand changement et après m’être un peu chercher dans des
          études scientifiques je sais maintenant que mon avenir professionnel
          se fera dans le développement.
        </p>
        <p className="p2">
          La roadmap d’un dev est une route sans limite, maintenant que
          j’effleure de plus prêt cet univers je ne peux m’empécher de voir plus
          grand. Apprendre de nouveau framework avec notamment Vue mais
          également m’intégrer au paysage du web 3.0 en me penchant sur
          l’apprentissage de Solidity&nbsp;!
        </p>
      </div>
    </div>
  );
};

export default Bio;
