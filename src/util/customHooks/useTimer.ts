import React from "react";
import { useImmer } from "use-immer";

type initialTimeType = Record<string, string>;
const initialTime: initialTimeType = { sec: "00", mins: "00", hours: "00", days: "00" };

export const useTimer = () => {
  const timerRef = React.useRef<ReturnType<typeof setInterval>>();
  const [isInit, updateInit] = useImmer(false);
  const [date, updateDate] = useImmer("");
  const [time, updateTime] = useImmer(initialTime);

  React.useEffect(() => {
    if (date.length === 0) return;
    const futureDate = new Date(date);
    const currentDate = new Date();

    const ms = +futureDate - +currentDate;
    if (ms <= 0) return;

    const seconds = ms / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;

    const finalDs = Math.floor(hours / 24);
    const finalHs = Math.floor(hours % 24);
    const finalMs = Math.floor(minutes % 60);
    const finalSs = Math.floor(seconds % 60);

    updateTime({
      sec: amendTime(finalSs),
      mins: amendTime(finalMs),
      hours: amendTime(finalHs),
      days: amendTime(finalDs),
    });

    updateInit(true);
  }, [date]);

  React.useEffect(() => {
    if (!isInit) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(changeTime, 1000);
    updateInit(false);
  }, [isInit]);

  // **
  function amendTime(t: number) {
    return t > 9 ? t.toString() : "0" + t;
  }

  // **
  function changeTime() {
    updateTime((draft) => {
      if (+draft.sec > 0) {
        draft.sec = amendTime(+draft.sec - 1);
        return;
      }

      if (+draft.sec === 0) {
        if (+draft.mins > 0) {
          draft.mins = amendTime(+draft.mins - 1);
          draft.sec = "59";
        } else {
          if (+draft.hours > 0) {
            draft.hours = amendTime(+draft.hours - 1);
            draft.sec = "59";
            draft.mins = "59";
          } else {
            if (+draft.days > 0) {
              draft.days = amendTime(+draft.days - 1);
              draft.sec = "59";
              draft.mins = "59";
              draft.hours = "23";
            } else {
              clearInterval(timerRef.current);
            }
          }
        }
      }
    });
  }

  return { time, updateDate };
};
