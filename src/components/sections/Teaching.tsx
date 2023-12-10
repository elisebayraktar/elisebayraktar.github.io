export default function Teaching() {
  return (
    <div className="bg-white p-10 border-slate-200 border rounded-xl flex flex-col scroll-m-10 space-y-8">
      <div className="text-3xl text-primary text-bold font-semibold capitalize">
        Teaching
      </div>
      <div className="flex items-center space-x-7">
        <img
          src="/images/gustave-eiffel.png"
          alt="cambridge logo"
          className="w-20"
        />
        <div className="flex flex-col">
          <div className="text-xl text-bold font-semibold capitalize">
            Université Gustave Eiffel
          </div>
          <ul className="list-disc">
            <li>
              2023-2024 : Méthodologie des mathématiques (TD - L1 MIASHS),
              Suites et fonctions (TD - L1 Maths-Info)
            </li>
            <li>
              2022-2023 : Méthodologie des mathématiques (TD - L1 Maths-Info),
              Suites et fonctions (TD - L1 Maths-Info)
            </li>
          </ul>
        </div>
      </div>
      <div className="border-b border-slate-200 w-4/5 self-center" />
      <div className="flex items-center space-x-7">
        <img src="/images/cs.png" alt="cs logo" className="h-20" />
        <div className="flex flex-col h-full">
          <div className="text-xl text-bold font-semibold capitalize">
            CentraleSupélec
          </div>
          <ul className="list-disc">
            <li>
              2019 -2020 : Convergence Intégration Probabilités, Équation aux
              Dérivées Partielles (TD de Modalité renforcée - 1ère année)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
