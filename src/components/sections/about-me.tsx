import { Button } from '@/components/ui/button'

export default function AboutMe() {
  return (
    <div className="container flex md:px-20">
      <div className="flex flex-col space-y-4 md:space-y-8 lg:w-3/4 lg:pr-8">
        <h1>Elise Bayraktar</h1>
        <div>
          I am a 3rd year PhD student at LAMA (Université Gustave Eiffel) under the supervision of
          Emmanuelle Clément, on the subject &quot;Estimation and approximation of SDEs directed by
          non-symmetric Lévy processes&quot;. My PhD is financed by ANR-21-CE40-0021&#32;
          <Button asChild size="none" variant="link">
            <a href="https://effi-stats.fr/">EFFI</a>
          </Button>
          .
        </div>
        <div>PhD students&apos; representative at the doctoral school MSTIC</div>
      </div>
      <img
        alt="profile picture"
        className="border-primary mt-5 w-3/4 rounded-full border-2 object-cover lg:mt-0 lg:w-1/4"
        src="images/profile-picture.jpeg"
      />
    </div>
  )
}
