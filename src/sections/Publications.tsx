import { Fragment } from "react/jsx-runtime";
import Link from "../components/Link";

type Publication = {
  label: string;
  halId: string;
  coAuthor?: { name: string; link: string };
  status?: string;
};

const publications: Publication[] = [
  {
    label:
      "Volatility and jump activity estimation in a stable Cox-Ingersoll-Ross model",
    halId: "hal-04662856",
    coAuthor: {
      name: "Emmanuelle Clément",
      link: "https://perso.math.u-pem.fr/clement.emmanuelle/",
    },
    status: "preprint",
  },
  {
    label:
      "Monte-Carlo simulation results in estimating a pure-jump Cox-Ingersoll-Ross process",
    halId: "hal-04458194v2",
    status: "accepted in ESAIM:P&S CJC-MA 2023",
  },
  {
    label: "Estimation of a pure-jump stable Cox-Ingersoll-Ross process",
    halId: "hal-04037024v4",
    coAuthor: {
      name: "Emmanuelle Clément",
      link: "https://perso.math.u-pem.fr/clement.emmanuelle/",
    },
    status: "Bernoulli in press",
  },
];

export default function Publications() {
  return (
    <div className="column">
      {publications.map(
        ({ label, halId, coAuthor, status: additionalInfos }, index) => (
          <Fragment key={halId}>
            {index !== 0 && <div className="custom-divider" />}
            <div>
              <Link label={label} href={`https://hal.science/${halId}`} />
              {coAuthor && (
                <>
                  &#32;(with&#32;
                  <Link label={coAuthor.name} href={coAuthor.link} />)
                </>
              )}
              &#32;({additionalInfos})
            </div>
          </Fragment>
        ),
      )}
    </div>
  );
}
