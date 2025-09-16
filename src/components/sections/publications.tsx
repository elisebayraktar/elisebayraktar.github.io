import { Button } from '@/components/ui/button'

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
    label:
      'Efficient estimation of jump parameters for stochastic differential equations driven by Lévy processes',
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
    <ul className="list-disc list-inside">
      {publications.map(({ halId, coAuthor, label, status: additionalInfos }) => (
        <li key={halId}>
          <Button asChild size="none" variant="link">
            <a href={`https://hal.science/${halId}`}>{label}</a>
          </Button>
          {coAuthor && (
            <>
              &#32;(with&#32;
              <Button asChild size="none" variant="link">
                <a href={coAuthor.link}>{coAuthor.name}</a>
              </Button>
              )
            </>
          )}
          &#32;({additionalInfos})
        </li>
      ))}
    </ul>
  )
}
