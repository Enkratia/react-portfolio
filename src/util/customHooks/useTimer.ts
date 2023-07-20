import React from "react";
import { useImmer } from "use-immer";

export const useTimer = () => {
  const timerRef = React.useRef<ReturnType<typeof setInterval>>();
  const [isInit, updateInit] = useImmer(false);
  const [date, updateDate] = useImmer("");
  const [time, updateTime] = useImmer({ sec: "", mins: "", hours: "", days: "" });

  React.useEffect(() => {
    if (date.length === 0) return;
    const futureDate = new Date(date);
    const currentDate = new Date();

    const ms = +futureDate - +currentDate;

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
    if (+time.sec > 0) {
      updateTime((draft) => {
        draft.sec = amendTime(+draft.sec - 1);
      });
      return;
    }

    if (+time.sec === 0) {
      if (+time.mins > 0) {
        updateTime((draft) => {
          draft.mins = amendTime(+draft.mins - 1);
          draft.sec = "59";
        });
      } else {
        if (+time.hours > 0) {
          updateTime((draft) => {
            draft.hours = amendTime(+draft.hours - 1);
            draft.sec = "59";
            draft.mins = "59";
          });
        } else {
          if (+time.days > 0) {
            updateTime((draft) => {
              draft.days = amendTime(+draft.days - 1);
              draft.sec = "59";
              draft.mins = "59";
              draft.hours = "23";
            });
          } else {
            clearInterval(timerRef.current);
          }
        }
      }
    }
  }

  return { time, updateDate };
};
