import Link from '../components/Link';

export default function AboutMe() {
  return (
    <>
      <div className="column space-y-4 md:space-y-8 lg:pr-8 lg:w-3/4">
        <h1>Elise Bayraktar</h1>
        <div>
          I am a 2nd year PhD student at LAMA (Université Gustave Eiffel) under
          the supervision of Emmanuelle Clément, on the subject &quot;Estimation
          and approximation of SDEs directed by non-symmetric Lévy
          processes&quot;. My PhD is financed by ANR-21-CE40-0021
          <Link label=" EFFI" href="https://effi-stats.fr/" />.
        </div>
      </div>
      <img
        alt="profile"
        src="/images/profile-picture.jpeg"
        className="lg:w-1/4 object-cover rounded-full border-2 border-primary max-w-sm"
      />
    </>
  );
}
