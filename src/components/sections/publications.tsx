import { Link } from '../ui/link'

interface Publication {
  halId: string
  coAuthor?: { link: string; name: string }
  label: string
  status?: string
}

const publications: Publication[] = [
  {
    halId: 'hal-05239430',
    coAuthor: {
      name: 'Emmanuelle Clément',
      link: 'https://perso.math.u-pem.fr/clement.emmanuelle/',
    },
    label: 'Efficient estimation of jump parameters for stochastic differential equations driven by Lévy processes',
    status: 'preprint',
  },
  {
    halId: 'hal-04662856',
    coAuthor: {
      name: 'Emmanuelle Clément',
      link: 'https://perso.math.u-pem.fr/clement.emmanuelle/',
    },
    label: 'Volatility and jump activity estimation in a stable Cox-Ingersoll-Ross model',
    status: 'accepted in Bernoulli',
  },
  {
    halId: 'hal-04458194v2',
    label: 'Monte-Carlo simulation results in estimating a pure-jump Cox-Ingersoll-Ross process',
    status: 'accepted in ESAIM:P&S CJC-MA 2023',
  },
  {
    halId: 'hal-04037024v4',
    coAuthor: {
      name: 'Emmanuelle Clément',
      link: 'https://perso.math.u-pem.fr/clement.emmanuelle/',
    },
    label: 'Estimation of a pure-jump stable Cox-Ingersoll-Ross process',
    status: 'Bernoulli',
  },
]

export default function Publications() {
  return (
    <ul className="ml-4 list-disc">
      {publications.map(({ halId, coAuthor, label, status: additionalInfos }) => (
        <li key={halId}>
          <Link href={`https://hal.science/${halId}`}>{label}</Link>
          {coAuthor && (
            <>
              &#32;(with&#32;
              <Link href={coAuthor.link}>{coAuthor.name}</Link>)
            </>
          )}
          &#32;({additionalInfos})
        </li>
      ))}
    </ul>
  )
}
