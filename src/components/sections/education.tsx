import { Card, CardContent } from '@/components/ui/card';

import Cambridge from '../icons/cambridge';
import CentraleSupelec from '../icons/centrale-suplec';

export default function Educations() {
  return (
    <div className="flex w-full flex-col justify-center gap-4 md:flex-row">
      <Card className="flex-1">
        <CardContent className="flex w-full flex-row">
          <div className="flex items-center space-x-7">
            <Cambridge className="w-20 fill-base-content" />
            <div className="flex w-9/10 flex-col">
              <h3>University of Cambridge</h3>
              <div>Master of Advanced Study in Mathematics - Part III</div>
              <div>Part III Essay: Activated Random Walks</div>
              <div className="subtext">2020 - 2021</div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="flex-1">
        <CardContent className="flex w-full flex-row">
          <div className="flex items-center space-x-7">
            <CentraleSupelec className="w-20" />
            <div className="flex w-9/10 flex-col">
              <h3>CentraleSupélec</h3>
              <div>Master of Science in Engineering</div>
              <div>Grande École d&apos;ingénieur</div>
              <div className="subtext">2018 - 2021</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
