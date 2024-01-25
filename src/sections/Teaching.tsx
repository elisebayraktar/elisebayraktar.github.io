export default function Teaching() {
  return (
    <>
      <div className="column space-y-4">
        <h3>Université Gustave Eiffel</h3>
        <div className="column lg:flex-row lg:space-x-8">
          <div className="column">
            <div className="font-semibold">2023-2024</div>
            <div>Méthodologie des mathématiques</div>
            <div className="subtext">TD - L1 MIASHS</div>
            <div className="divider w-5 lg:w-5" />
            <div>Suites et fonctions</div>
            <div className="subtext">TD - L1 Maths-Info</div>
          </div>
          <div className="divider divider-horizontal lg:w-0 lg:h-16" />
          <div className="column">
            <div className="font-semibold">2022-2023</div>
            <div>Méthodologie des mathématiques</div>
            <div className="subtext mb-2">TD - L1 Maths-Info</div>
            <div className="divider w-5 lg:w-5" />
            <div className="mt-1">Suites et fonctions</div>
            <div className="subtext">TD - L1 Maths-Info</div>
          </div>
        </div>
      </div>
      <div className="column">
        <h3 className="mb-2">CentraleSupélec</h3>
        <div className="font-semibold">2019 -2020</div>
        <div>
          Convergence Intégration Probabilités, Équation aux Dérivées Partielles
        </div>
        <div className="subtext">TD de Modalité renforcée - 1ère année</div>
      </div>
    </>
  );
}
