export default function AboutMe() {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between">
      <div className="flex flex-col space-y-4 md:space-y-8 lg:w-3/4 lg:pr-8">
        <h1>Elise Bayraktar</h1>
        <p>
          I am currently a postdoctoral researcher at Sorbonne Université, working with Charlotte
          Dion-Blanc.
        </p>
        <p>
          I previously did my PhD at Université Gustave Eiffel under the supervision of Emmanuelle
          Clément on the &#34;High-frequency estimation of the stable CIR model&#34;, which I
          defended in July 2025.
        </p>
      </div>
      <img
        alt="Elise Bayraktar"
        className="mt-5 aspect-square w-3/4 rounded-full border-2 border-primary object-cover lg:mt-0 lg:w-1/4"
        fetchPriority="high"
        src="images/profile-picture.webp"
      />
    </div>
  )
}
