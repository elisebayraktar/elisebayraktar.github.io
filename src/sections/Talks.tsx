import Column from '../components/Column';
import Link from '../components/Link';
import Separator from '../components/Separator';

const talks = [
  {
    label: 'Groupe de Travail Méthodes Stochastiques et Finance',
    href: 'http://cermics.enpc.fr/~alfonsi/GTMSF2223.html',
    dateAndPlace: 'CERMICS - Ecole des Ponts (March 6 2023)',
  },
  {
    label: 'Dynstoch 2023',
    href: 'https://sites.google.com/view/dynstoch23/home',
    dateAndPlace: 'Imperial College London (March 27 2023)',
  },
  {
    label: 'ICIAM 2023',
    href: 'https://iciam2023.org/registered_data?id=00672',
    dateAndPlace: 'Waseda University (August 25 2023)',
  },
  {
    label: 'CJC-MA 2023',
    href: 'https://cjcma2023.sciencesconf.org/',
    dateAndPlace: 'CentraleSupélec (September 25 2023)',
  },
  {
    label: 'Colloque des Jeunes Probabilistes et Statisticiens',
    href: 'https://jps-2023.sciencesconf.org/',
    dateAndPlace: 'Oléron (October 2 2023)',
  },
];

export default function Talks() {
  return talks.map((talk, index) => (
    <>
      <Column key={talk.label}>
        <Link label={talk.label} href={talk.href} />
        {talk.dateAndPlace}
      </Column>
      {index < talks.length - 1 && <Separator />}
    </>
  ));
}
