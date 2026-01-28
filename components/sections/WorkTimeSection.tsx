import Image from "next/image";

export const WorkTimeSection = () => {
  return (
    <section
      id="work-time"
      className="flex flex-col items-center justify-center p-4 lg:p-12 pb-32 min-h-[80vh] mt-6"
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/cooking-beef.jpg"
            alt="Cooking Beef"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>

        {/* Hours Section */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="border border-white/20 bg-transparent p-8 md:p-12 relative overflow-hidden flex flex-col items-center">
            <h2 className="text-center lg:text-left text-3xl md:text-4xl font-black mb-12 tracking-tighter text-white uppercase text-balance leading-tight">
              Opening Hours
            </h2>

            <div className="space-y-4 relative z-10">
              {[
                { day: "Monday", time: "08:30 – 22:00" },
                { day: "Tuesday", time: "08:30 – 22:00" },
                { day: "Wednesday", time: "08:30 – 22:00" },
                { day: "Thursday", time: "08:30 – 22:00" },
                { day: "Friday", time: "08:30 – 22:00" },
                { day: "Saturday", time: "08:30 – 22:00" },
                { day: "Sunday", time: "08:30 – 21:00" },
              ].map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between items-center py-4 border-b border-white/10 last:border-0 px-2"
                >
                  <span className="text-lg md:text-xl font-bold text-white tracking-[0.2em] uppercase">
                    {item.day}
                  </span>
                  <div className="flex items-center gap-6">
                    <div className="h-[2px] w-8 bg-white/20" />
                    <span className="text-xl md:text-2xl font-black text-white tabular-nums">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center lg:text-left relative z-10">
              <p className="text-white/40 font-bold uppercase text-[10px] tracking-[0.3em]">
                * Hours May Vary on Public Holidays *
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px w-[80%] bg-white/20 mt-22"></div>
    </section>
  );
};
