export default function AboutMe() {
  return (
    <div className="flex w-full scroll-m-10">
      <img alt="profile" src="/images/profile-picture.jpeg" className="w-1/3" />
      <div className="ml-10">
        <div className="text-primary text-6xl font-bold uppercase">
          Elise Bayraktar
        </div>
        <div className="bg-white p-10 border-slate-200 border space-y-8">
          I am a 2nd year PhD student at LAMA (Université Gustave Eiffel) under
          the supervision of Emmanuelle Clément, on the subject &quot;Estimation
          and approximation of SDEs directed by non-symmetric Lévy
          processes&quot;. My PhD is financed by ANR-21-CE40-0021{' '}
          <a
            className="text-primary"
            href="https://effi-stats.fr/."
            target="_blank"
            rel="noreferrer"
          >
            EFFI
          </a>
        </div>
      </div>
    </div>
  );
}
