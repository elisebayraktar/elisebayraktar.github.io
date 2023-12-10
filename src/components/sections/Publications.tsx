export default function Publications() {
  return (
    <div className="bg-white p-10 border-slate-200 border rounded-xl flex flex-col scroll-m-10 space-y-8">
      <div className="text-3xl text-primary text-bold font-semibold capitalize">
        Publications
      </div>
      <ul className="list-disc list-inside">
        <li>
          Estimation of a pure-jump stable Cox-Ingersoll-Ross process (
          <a
            className="text-primary"
            href="https://hal.science/hal-04037024v3"
            target="_blank"
            rel="noreferrer"
          >
            HAL
          </a>
          ,{' '}
          <a
            className="text-primary"
            href="https://arxiv.org/abs/2304.02386"
            target="_blank"
            rel="noreferrer"
          >
            Arxiv
          </a>
          ) (with{' '}
          <a
            className="text-primary"
            href="https://perso.math.u-pem.fr/clement.emmanuelle/"
            target="_blank"
            rel="noreferrer"
          >
            Emmanuelle Clément
          </a>
          ) (in revision with Bernoulli)
        </li>
      </ul>
    </div>
  );
}
