import { twMerge } from 'tailwind-merge';
import Separator from '../components/Separator';
import { subtitleClassName, underTextClassName } from '../utils/style';
import Column from '../components/Column';

export default function Teaching() {
  return (
    <>
      <Column className="space-y-4">
        <div className={subtitleClassName}>Université Gustave Eiffel</div>
        <Column className="lg:flex-row lg:space-x-8">
          <Column>
            <div className="font-semibold">2023-2024</div>
            <div>Méthodologie des mathématiques</div>
            <div className={twMerge(underTextClassName, 'mb-2')}>
              TD - L1 MIASHS
            </div>
            <Separator className="w-5 lg:w-5" />
            <div className="mt-1">Suites et fonctions</div>
            <div className={underTextClassName}>TD - L1 Maths-Info</div>
          </Column>
          <Separator className="my-4 lg:my-0 lg:w-0 lg:h-16" />
          <Column>
            <div className="font-semibold">2022-2023</div>
            <div>Méthodologie des mathématiques</div>
            <div className={twMerge(underTextClassName, 'mb-2')}>
              TD - L1 Maths-Info
            </div>
            <Separator className="w-5 lg:w-5" />
            <div className="mt-1">Suites et fonctions</div>
            <div className={underTextClassName}>TD - L1 Maths-Info</div>
          </Column>
        </Column>
      </Column>
      <Column className="space-y-2">
        <div className={subtitleClassName}>CentraleSupélec</div>
        <div>
          <div className="font-semibold">2019 -2020</div>
          <div>
            Convergence Intégration Probabilités, Équation aux Dérivées
            Partielles
          </div>
          <div className={underTextClassName}>
            TD de Modalité renforcée - 1ère année
          </div>
        </div>
      </Column>
    </>
  );
}
