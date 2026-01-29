import Image from "next/image";

export const WorkTimeSection = () => {
  return (
    <section
      id="work-time"
      className="flex flex-col items-center justify-center p-4 lg:p-12 pb-32 min-h-[80vh] mt-24"
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Image Section */}
        <div className="w-full lg:w-[55%] relative">
          <Image
            src="/cooking-beef.webp"
            alt="Cooking Beef"
            width={1200}
            height={1200}
            className="w-full h-auto shadow-2xl border border-white/5"
            sizes="(max-width: 768px) 100vw, 380px"
          />
        </div>

        {/* Hours Section */}
        <div className="w-full lg:w-[45%] flex flex-col">
          <div className="border border-white/20 bg-black/40 backdrop-blur-sm p-8 md:p-12 relative overflow-hidden flex flex-col items-center">
            <h2 className="text-center lg:text-left text-3xl md:text-4xl font-black mb-12 tracking-tighter text-white uppercase text-balance leading-tight">
              Opening Hours
            </h2>

            <div className=" relative z-10">
              {[
                { day: "Monday", time: ["08:30", "22:00"] },
                { day: "Tuesday", time: ["08:30", "22:00"] },
                { day: "Wednesday", time: ["08:30", "22:00"] },
                { day: "Thursday", time: ["08:30", "22:00"] },
                { day: "Friday", time: ["08:30", "22:00"] },
                { day: "Saturday", time: ["08:30", "22:00"] },
                { day: "Sunday", time: ["08:30", "21:00"] },
              ].map((item) => (
                <div
                  key={item.day}
                  className="flex items-center py-4 border-b border-white/10 last:border-0 px-2 gap-4"
                >
                  <span className="text-md md:text-xl font-bold text-white tracking-[0.2em] uppercase whitespace-nowrap">
                    {item.day}
                  </span>

                  <div className="grow h-[2px] bg-white/20" />
                  <span className="flex text-end text-md md:text-xl font-black text-white tabular-nums whitespace-nowrap">
                    {item.time[0]}
                    <span className="md:inline mx-2">–</span>
                    {item.time[1]}
                  </span>
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
      <div className="h-px w-[80%] bg-white/20 mt-28"></div>
    </section>
  );
};
