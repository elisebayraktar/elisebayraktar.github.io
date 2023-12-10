export default function Talks() {
  return (
    <div className="bg-white p-10 border-slate-200 border rounded-xl flex flex-col scroll-m-10 space-y-8">
      <div className="text-3xl text-primary text-bold font-semibold capitalize">
        Talks
      </div>
      <ul className="list-disc list-inside">
        <li>
          <a
            className="text-primary"
            href="http://cermics.enpc.fr/~alfonsi/GTMSF2223.html"
            target="_blank"
            rel="noreferrer"
          >
            Groupe de Travail Méthodes Stochastiques et Finance
          </a>{' '}
          - CERMICS - Ecole des Ponts (March 6 2023)
        </li>
        <li>
          <a
            className="text-primary"
            href="https://sites.google.com/view/dynstoch23/home"
            target="_blank"
            rel="noreferrer"
          >
            Dynstoch 2023
          </a>{' '}
          - Imperial College London (March 27 2023)
        </li>
        <li>
          <a
            className="text-primary"
            href="https://iciam2023.org/registered_data?id=00672"
            target="_blank"
            rel="noreferrer"
          >
            ICIAM Minisymposium
          </a>{' '}
          - Waseda University (August 25 2023)
        </li>
        <li>
          <a
            className="text-primary"
            href="https://cjcma2023.sciencesconf.org/"
            target="_blank"
            rel="noreferrer"
          >
            CJC-MA
          </a>{' '}
          - CentraleSupélec (September 25 2023)
        </li>
        <li>
          <a
            className="text-primary"
            href="https://jps-2023.sciencesconf.org/"
            target="_blank"
            rel="noreferrer"
          >
            Colloque des Jeunes Probabilistes et Statisticiens
          </a>{' '}
          - Oléron (October 2 2023)
        </li>
      </ul>
    </div>
  );
}
