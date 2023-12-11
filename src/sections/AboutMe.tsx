import Column from '../components/Column';
import Link from '../components/Link';

export default function AboutMe() {
  return (
    <>
      <Column className="space-y-4 md:space-y-8 lg:pr-8 lg:w-3/4">
        <div className="text-primary font-title text-5xl md:text-6xl font-extrabold uppercase self-center">
          Elise Bayraktar
        </div>
        <div>
          I am a 2nd year PhD student at LAMA (Université Gustave Eiffel) under
          the supervision of Emmanuelle Clément, on the subject &quot;Estimation
          and approximation of SDEs directed by non-symmetric Lévy
          processes&quot;. My PhD is financed by ANR-21-CE40-0021
          <Link label=" EFFI" href="https://effi-stats.fr/" />.
        </div>
      </Column>
      <img
        alt="profile"
        src="/images/profile-picture.jpeg"
        className="lg:w-1/4 object-cover rounded-full border-2 border-primary"
      />
    </>
  );
}
