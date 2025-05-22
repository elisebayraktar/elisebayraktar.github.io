import { Fragment } from 'react/jsx-runtime'

import { Separator } from '@/components/ui/separator'

interface Teaching {
  details: TeachingDetails[]
  university: string
}

interface TeachingDetails {
  details: { teachingGroup: string; year: string }[]
  subject: string
}

const teaching: Teaching[] = [
  {
    details: [
      {
        details: [
          {
            teachingGroup: 'L2 Économie et gestion',
            year: '2024-2025',
          },
        ],
        subject: 'Probabilités',
      },
      {
        details: [
          {
            teachingGroup: 'L1 Économie et gestion',
            year: '2024-2025',
          },
        ],
        subject: 'Statistiques descriptives',
      },
      {
        details: [
          {
            teachingGroup: 'L1 Maths-Info',
            year: '2023-2024',
          },
          {
            teachingGroup: 'L1 Maths-Info',
            year: '2022-2023',
          },
        ],
        subject: 'Suites et fonctions',
      },
      {
        details: [
          {
            teachingGroup: 'L1 Maths-Info',
            year: '2023-2024',
          },
          {
            teachingGroup: 'L1 MIASHS',
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
        details: [
          {
            teachingGroup: 'TD de Modalité renforcée - 1ère année',
            year: '2019-2020',
          },
        ],
        subject: 'Convergence Intégration Probabilités, Équation aux Dérivées Partielles',
      },
    ],
    university: 'CentraleSupélec',
  },
]

export default function Teaching() {
  return teaching.map(({ details, university }, index) => (
    <div className="flex w-full flex-col items-center" key={university}>
      {index !== 0 && <Separator className="my-4 max-w-3xs" />}
      <h3>{university}</h3>
      <div className="mt-4 flex w-full flex-col items-center">
        {details.map(({ details, subject }, index) => (
          <Fragment key={subject}>
            {index !== 0 && <Separator className="my-4 max-w-10" />}
            <div className="font-semibold">{subject}</div>
            <div className="flex flex-col">
              {details.map(({ teachingGroup, year }) => (
                <div className="flex justify-center" key={`${teachingGroup}-${year}`}>
                  <div>
                    {year} - <span className="subtext">{teachingGroup}</span>
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
