import React, { useEffect, useState } from "react";

const Timer = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("09/6/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between">
      {partyTime ? (
        <>
          <h1 className="text-3xl">DEADLINE CROSSED!</h1>
          <p>HAPPY NEW YEAR</p>
        </>
      ) : (
        <>
          <div id="countdown" className="my-4 sm:mx-6 w-full">
            <ul className="list-none flex justify-between  w-full  ">
              <li className="sm:w-[84px] w-[60px]   bg-white text-center py-1 sm:py-4 shadow-dropdown border-gray">
                <span className="text-xs text-primary"> Days</span>
                <p
                  id="days"
                  className="py-1 text-md2 sm:text-lg md:text-xl font-bold text-lightblack  "
                >
                  {days}
                </p>
              </li>{" "}
              <li className="sm:w-[84px] w-[60px]   bg-white text-center py-1 sm:py-4 shadow-dropdown border-gray">
                <span className="text-xs text-primary"> Hours</span>
                <p
                  id="days"
                  className="py-1 text-md2 sm:text-lg md:text-xl font-bold text-lightblack  "
                >
                  {hours}
                </p>
              </li>{" "}
              <li className="sm:w-[84px] w-[60px]   bg-white text-center py-1 sm:py-4 shadow-dropdown border-gray">
                <span className="text-xs text-primary"> Mins</span>
                <p
                  id="days"
                  className="py-1 text-md2 sm:text-lg md:text-xl font-bold text-lightblack  "
                >
                  {minutes}
                </p>
              </li>{" "}
              <li className="sm:w-[84px] w-[60px]   bg-white text-center py-1 sm:py-4 shadow-dropdown border-gray">
                <span className="text-xs text-primary"> Sec</span>
                <p
                  id="days"
                  className="py-1 text-md2 sm:text-lg md:text-xl font-bold text-lightblack  "
                >
                  {seconds}
                </p>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Timer;
