export default function Education() {
  return (
    <div className="bg-white p-10 border-slate-200 border rounded-xl flex flex-col space-y-8">
      <div className="text-3xl text-primary text-bold font-semibold capitalize">
        Education
      </div>
      <div className="flex items-center space-x-7">
        <img
          src="/images/cambridge.png"
          alt="cambridge logo"
          className="w-20"
        />
        <div className="flex flex-col w-9/10">
          <div className="text-xl text-bold font-semibold capitalize">
            University of Cambridge
          </div>
          <div className="text-slate-800">
            Master of Advanced Study in Mathematics - Part III
          </div>
          <div className="text-slate-800">
            Part III Essay: Activated Random Walks
          </div>
          <div className="text-slate-600 text-sm">2020 - 2021</div>
        </div>
      </div>
      <div className="border-b border-slate-200 w-4/5 self-center" />
      <div className="flex items-center space-x-7">
        <img src="/images/cs.png" alt="cs logo" className="h-20" />
        <div className="flex flex-col w-9/10">
          <div className="text-xl text-bold font-semibold capitalize">
            CentraleSupélec
          </div>
          <div className="text-slate-800">Master of Science in Engineering</div>
          <div className="text-slate-800">Grande École d&apos;ingénieur</div>
          <div className="text-slate-600 text-sm">2018 - 2021</div>
        </div>
      </div>
    </div>
  );
}
