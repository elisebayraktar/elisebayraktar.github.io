import { Separator } from '@/components/ui/separator'

import Link from '../ui/link'

interface Talk {
  dateAndPlace: string
  label: string
  link: string
}

const talks: Talk[] = [
  {
    dateAndPlace: 'Le Mans Université (June 5 2025)',
    label: 'Dynstoch 2025',
    link: 'https://dynstoch2025.mathnum.inrae.fr/',
  },
  {
    dateAndPlace: "Ecole des Ponts (May 13 2025)",
    label: 'Groupe de Travail Méthodes Stochastiques et Finance du CERMICS',
    link: 'https://cermics.enpc.fr/~alfonsi/GTMSF.html',
  },
  {
    dateAndPlace: "King's College London (December 15 2024)",
    label: 'CFE-CMStatistics 2024',
    link: 'https://www.cmstatistics.org/CFECMStatistics2024/',
  },
  {
    dateAndPlace: 'Université Gustave Eiffel (July 4 2024)',
    label: 'Séminaire de probabilités et statistiques du LAMA',
    link: 'https://lama-umr8050.fr/evenements/seminaire_de_probabilites_et_statistiques/estimation_of_a_alpha_stable_cox_ingersoll',
  },
  {
    dateAndPlace: 'IHP (May 22 2024)',
    label: 'Journées des Jeunes Chercheur.e.s du LAMA',
    link: 'https://indico.math.cnrs.fr/event/11743/contributions/11232/',
  },
  {
    dateAndPlace: 'ISFA (April 5 2024)',
    label: 'Séminaire du laboratoire SAF ',
    link: 'https://isfa.univ-lyon1.fr/recherche/actualites-du-laboratoire/seminaire-labo-elise-bayraktar-equipe-probabilites-et-statistiques-lama-universite-gustave-eiffel',
  },
  {
    dateAndPlace: 'Oléron (October 2 2023)',
    label: 'Colloque des Jeunes Probabilistes et Statisticiens',
    link: 'https://jps-2023.sciencesconf.org/',
  },
  {
    dateAndPlace: 'CentraleSupélec (September 25 2023)',
    label: 'CJC-MA 2023',
    link: 'https://cjcma2023.sciencesconf.org/',
  },
  {
    dateAndPlace: 'Waseda University (August 25 2023)',
    label: 'ICIAM 2023',
    link: 'https://iciam2023.org/registered_data?id=00672',
  },
  {
    dateAndPlace: 'Imperial College London (March 27 2023)',
    label: 'Dynstoch 2023',
    link: 'https://sites.google.com/view/dynstoch23/home',
  },
  {
    dateAndPlace: 'Ecole des Ponts (March 6 2023)',
    label: 'Groupe de Travail Méthodes Stochastiques et Finance du CERMICS',
    link: 'http://cermics.enpc.fr/~alfonsi/GTMSF2223.html',
  },
]

export default function Talks() {
  return talks.map((talk, index) => (
    <div className="flex w-full flex-col items-center text-center" key={talk.label}>
      {index !== 0 && <Separator className="my-4 max-w-3xs" />}
      <div>
        <Link href={talk.link}>{talk.label}</Link>
        &#32;-&#32;{talk.dateAndPlace}
      </div>
    </div>
  ))
}
