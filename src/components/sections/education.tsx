import { Card, CardContent } from '@/components/ui/card'

import Cambridge from '../icons/cambridge'
import CentraleSupelec from '../icons/centrale-suplec'

export default function Educations() {
  return (
    <Card className="w-full max-w-2xl">
      <CardContent className="flex w-full flex-col gap-4">
        <div className="flex items-center space-x-7">
          <Cambridge className="w-20 fill-base-content" />
          <div className="flex w-9/10 flex-col">
            <h3>University of Cambridge</h3>
            <div>Master of Advanced Study in Mathematics - Part III</div>
            <div>Part III Essay: Activated Random Walks</div>
            <div className="subtext">2020 - 2021</div>
          </div>
        </div>
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
  )
}
