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
  return (
    <div className="flex w-full md:flex-row flex-col gap-8">
      {teachings.map(({ details, university }) => (
        <div className="flex flex-1 flex-col" key={university}>
          <h3>{university}</h3>
          <div className="mt-4 flex w-full flex-col gap-2">
            {details.map(({ group, subject }) => (
              <div key={subject}>
                <div className="font-semibold">{subject}</div>
                <ul className="flex flex-col list-disc list-inside">
                  {group.map(({ level, year }) => (
                    <li key={`${level}-${year}`}>
                      <b>{year}</b> - <span className="subtext">{level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
