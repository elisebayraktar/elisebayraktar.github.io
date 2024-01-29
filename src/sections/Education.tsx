import Cambridge from '../components/svg/Cambridge';
import CentraleSupelec from '../components/svg/CentraleSupelec';

export default function Education() {
  return (
    <div className="column space-y-8 w-fit text-left">
      <div className="flex items-center space-x-7">
        <Cambridge className="fill-base-content w-20" />
        <div className="column w-9/10">
          <h3>University of Cambridge</h3>
          <div>Master of Advanced Study in Mathematics - Part III</div>
          <div>Part III Essay: Activated Random Walks</div>
          <div className="subtext">2020 - 2021</div>
        </div>
      </div>
      <div className="divider" />
      <div className="flex items-center space-x-7">
        <CentraleSupelec className="fill-base-content w-20" />
        <div className="flex flex-col w-9/10">
          <h3>CentraleSupélec</h3>
          <div>Master of Science in Engineering</div>
          <div>Grande École d&apos;ingénieur</div>
          <div className="subtext">2018 - 2021</div>
        </div>
      </div>
    </div>
  );
}
