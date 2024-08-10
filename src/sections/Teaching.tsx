import { Fragment } from "react/jsx-runtime";

type TeachingDetails = {
  subject: string;
  details: { year: string; teachingGroup: string }[];
};

type Teaching = {
  university: string;
  details: TeachingDetails[];
};

const teaching: Teaching[] = [
  {
    university: "Université Gustave Eiffel",
    details: [
      {
        subject: "Probabilités",
        details: [
          {
            year: "2024-2025",
            teachingGroup: " L2 Économie et gestion",
          },
        ],
      },
      {
        subject: "Statistiques descriptives",
        details: [
          {
            year: "2024-2025",
            teachingGroup: " L1 Économie et gestion",
          },
        ],
      },
      {
        subject: "Suites et fonctions",
        details: [
          {
            year: "2023-2024",
            teachingGroup: " L1 Maths-Info",
          },
          {
            year: "2022-2023",
            teachingGroup: " L1 Maths-Info",
          },
        ],
      },
      {
        subject: "Méthodologie des mathématiques",
        details: [
          {
            year: "2023-2024",
            teachingGroup: " L1 Maths-Info",
          },
          {
            year: "2022-2023",
            teachingGroup: " L1 MIASHS",
          },
        ],
      },
    ],
  },
  {
    university: "CentraleSupélec",
    details: [
      {
        subject:
          "Convergence Intégration Probabilités, Équation aux Dérivées Partielles",
        details: [
          {
            year: "2019-2020",
            teachingGroup: "TD de Modalité renforcée - 1ère année",
          },
        ],
      },
    ],
  },
];

export default function Teaching() {
  return teaching.map(({ university, details }, index) => (
    <div key={university} className="column">
      {index !== 0 && <div className="custom-divider" />}
      <h3>{university}</h3>
      <div className="column mt-4">
        {details.map(({ subject, details }, index) => (
          <Fragment key={subject}>
            {index !== 0 && <div className="custom-divider w-5 my-1" />}
            <div className="font-semibold">{subject}</div>
            <div className="column">
              {details.map(({ year, teachingGroup }) => (
                <div
                  key={`${teachingGroup}-${year}`}
                  className="flex justify-center"
                >
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
  ));
}
