import { Fragment } from 'react/jsx-runtime'

import { Separator } from '@/components/ui/separator'

interface Teaching {
  details: TeachingDetails[]
  university: string
}

interface TeachingDetails {
  group: { level: string; year: string }[]
  subject: string
}

const teachings: Teaching[] = [
  {
    details: [
      {
        group: [
          {
            level: 'L3',
            year: '2025-2026',
          },
        ],
        subject: 'Probabilités 2',
      },
    ],
    university: 'Sorbonne Université',
  },
  {
    details: [
      {
        group: [
          {
            level: 'L2 Économie et gestion',
            year: '2024-2025',
          },
        ],
        subject: 'Probabilités',
      },
      {
        group: [
          {
            level: 'L1 Économie et gestion',
            year: '2024-2025',
          },
        ],
        subject: 'Statistiques descriptives',
      },
      {
        group: [
          {
            level: 'L1 Maths-Info',
            year: '2023-2024',
          },
          {
            level: 'L1 Maths-Info',
            year: '2022-2023',
          },
        ],
        subject: 'Suites et fonctions',
      },
      {
        group: [
          {
            level: 'L1 Maths-Info',
            year: '2023-2024',
          },
          {
            level: 'L1 MIASHS',
            year: '2022-2023',
          },
        ],
        subject: 'Méthodologie des mathématiques',
      },
    ],
    university: 'Université Gustave Eiffel',
  },
  {
    details: [
      {
        group: [
          {
            level: 'TD de Modalité renforcée - 1ère année',
            year: '2019-2020',
          },
        ],
        subject: 'Convergence Intégration Probabilités, Équation aux Dérivées Partielles',
      },
    ],
    university: 'CentraleSupélec',
  },
]

export default function Teachings() {
  return teachings.map(({ details, university }, index) => (
    <div className="flex w-full flex-col items-center text-center" key={university}>
      {index !== 0 && <Separator className="my-4 max-w-3xs" />}
      <h3>{university}</h3>
      <div className="mt-4 flex w-full flex-col items-center">
        {details.map(({ group, subject }, detailIndex) => (
          <Fragment key={subject}>
            {detailIndex !== 0 && <Separator className="my-4 max-w-10" />}
            <div className="font-semibold">{subject}</div>
            <div className="flex flex-col">
              {group.map(({ level, year }) => (
                <div className="flex justify-center" key={`${level}-${year}`}>
                  <div>
                    {year} - <span className="subtext">{level}</span>
                  </div>
                </div>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  ))
}
