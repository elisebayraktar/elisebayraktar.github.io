import Column from '../components/Column';
import Separator from '../components/Separator';
import { subtitleClassName, underTextClassName } from '../utils/style';

export default function Education() {
  return (
    <Column className="space-y-8 w-fit text-left">
      <div className="flex items-center space-x-7">
        <img
          src="/images/cambridge.png"
          alt="cambridge logo"
          className="w-20"
        />
        <Column className="w-9/10">
          <div className={subtitleClassName}>University of Cambridge</div>
          <div>Master of Advanced Study in Mathematics - Part III</div>
          <div>Part III Essay: Activated Random Walks</div>
          <div className={underTextClassName}>2020 - 2021</div>
        </Column>
      </div>
      <Separator />
      <div className="flex items-center space-x-7">
        <img src="/images/cs.png" alt="cs logo" className="h-20" />
        <div className="flex flex-col w-9/10">
          <div className={subtitleClassName}>CentraleSupélec</div>
          <div>Master of Science in Engineering</div>
          <div>Grande École d&apos;ingénieur</div>
          <div className={underTextClassName}>2018 - 2021</div>
        </div>
      </div>
    </Column>
  );
}
