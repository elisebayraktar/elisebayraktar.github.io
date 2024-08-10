import Link from "../components/Link";

type Talk = {
  label: string;
  link: string;
  dateAndPlace: string;
};

const talks: Talk[] = [
  {
    label: "Séminaire de probabilités et statistiques du LAMA",
    link: "https://lama-umr8050.fr/evenements/seminaire_de_probabilites_et_statistiques/estimation_of_a_alpha_stable_cox_ingersoll",
    dateAndPlace: "Université Gustave Eiffel (July 4 2024)",
  },
  {
    label: "Journées des Jeunes Chercheur.e.s du LAMA",
    link: "https://indico.math.cnrs.fr/event/11743/contributions/11232/",
    dateAndPlace: "IHP (May 22 2024)",
  },
  {
    label: "Séminaire du laboration SAF ",
    link: "https://isfa.univ-lyon1.fr/recherche/actualites-du-laboratoire/seminaire-labo-elise-bayraktar-equipe-probabilites-et-statistiques-lama-universite-gustave-eiffel",
    dateAndPlace: "ISFA (April 5 2024)",
  },
  {
    label: "Colloque des Jeunes Probabilistes et Statisticiens",
    link: "https://jps-2023.sciencesconf.org/",
    dateAndPlace: "Oléron (October 2 2023)",
  },
  {
    label: "CJC-MA 2023",
    link: "https://cjcma2023.sciencesconf.org/",
    dateAndPlace: "CentraleSupélec (September 25 2023)",
  },
  {
    label: "ICIAM 2023",
    link: "https://iciam2023.org/registered_data?id=00672",
    dateAndPlace: "Waseda University (August 25 2023)",
  },
  {
    label: "Dynstoch 2023",
    link: "https://sites.google.com/view/dynstoch23/home",
    dateAndPlace: "Imperial College London (March 27 2023)",
  },
  {
    label: "Groupe de Travail Méthodes Stochastiques et Finance du CERMICS",
    link: "http://cermics.enpc.fr/~alfonsi/GTMSF2223.html",
    dateAndPlace: "Ecole des Ponts (March 6 2023)",
  },
];

export default function Talks() {
  return talks.map((talk, index) => (
    <div key={talk.label} className="column">
      <div>
        <Link label={talk.label} href={talk.link} />
        &#32;-&#32;{talk.dateAndPlace}
      </div>
      {index < talks.length - 1 && <div className="custom-divider" />}
    </div>
  ));
}
