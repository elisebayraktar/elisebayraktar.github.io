import { Fragment } from 'react/jsx-runtime'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface Publication {
  halId: string
  coAuthor?: { link: string; name: string }
  label: string
  status?: string
}

const publications: Publication[] = [
  {
    halId: 'hal-04662856',
    coAuthor: {
      name: 'Emmanuelle Clément',
      link: 'https://perso.math.u-pem.fr/clement.emmanuelle/',
    },
    label: 'Volatility and jump activity estimation in a stable Cox-Ingersoll-Ross model',
    status: 'preprint',
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
    status: 'Bernoulli in press',
  },
]

export default function Publications() {
  return (
    <Card className="flex flex-col">
      <CardContent className="flex flex-col items-center text-center">
        {publications.map(({ halId, coAuthor, label, status: additionalInfos }, index) => (
          <Fragment key={halId}>
            {index !== 0 && <Separator className="my-4 max-w-1/3" />}
            <div>
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
            </div>
          </Fragment>
        ))}
      </CardContent>
    </Card>
  )
}
