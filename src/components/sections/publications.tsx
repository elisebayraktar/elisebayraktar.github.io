import { Link } from '../ui/link'

interface Publication {
  halId: string
  yearAndJournal: string
  authors: string[]
  label: string
}

const defaultAuthors = ['E. Bayraktar']

const publications: Publication[] = [
  {
    halId: 'hal-05533274',
    yearAndJournal: 'Submitted for publication, 2026',
    authors: [...defaultAuthors, 'C. Dion-Blanc'],
    label: 'Sparse recovery of Diffusion Dynamics: Handling High-Dimensionality in Repeated Short Trajectories',
  },
  {
    halId: 'hal-05239430',
    yearAndJournal: 'Submitted for publication, 2026',
    authors: [...defaultAuthors, 'E. Clément'],
    label: 'Efficient estimation of jump parameters for stochastic differential equations driven by Lévy processes',
  },
  {
    halId: 'hal-04662856',
    yearAndJournal: 'Bernoulli, 2026',
    authors: [...defaultAuthors, 'E. Clément'],
    label: 'Volatility and jump activity estimation in a stable Cox-Ingersoll-Ross model',
  },
  {
    halId: 'hal-04458194v2',
    yearAndJournal: 'ESAIM: ProcS, 2025',
    authors: defaultAuthors,
    label: 'Monte-carlo simulation results in estimating a pure-jump Cox-Ingersoll-Ross process',
  },
  {
    halId: 'hal-04037024v4',
    yearAndJournal: 'Bernoulli, 2025',
    authors: [...defaultAuthors, 'E. Clément'],
    label: 'Estimation of a pure-jump stable Cox-Ingersoll-Ross process',
  },
]

export default function Publications() {
  return (
    <ul className="ml-4 list-disc">
      {publications.map(({ halId, authors, label, yearAndJournal }) => (
        <li key={halId}>
          <Link href={`https://hal.science/${halId}`}>{label}</Link>. {yearAndJournal}. {authors.join(' and ')}.
        </li>
      ))}
    </ul>
  )
}
