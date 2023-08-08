import React from "react";

const mdq1120 = window.matchMedia("(min-width: 1120px)");
const mdq1024 = window.matchMedia("(min-width: 1024px)");
const mdq876 = window.matchMedia("(min-width: 876px)");

export const useMediaQuery = () => {
  const [isMQ1120, setIsMQ1120] = React.useState(mdq1120.matches);
  const [isMQ1024, setIsMQ1024] = React.useState(mdq1024.matches);
  const [isMQ876, setIsMQ876] = React.useState(mdq876.matches);

  React.useEffect(() => {
    mdq1120.addEventListener("change", checkMQ1120);
    mdq1024.addEventListener("change", checkMQ1024);
    mdq876.addEventListener("change", checkMQ876);
  });

  const checkMQ1120 = () => {
    if (mdq1120.matches) {
      setIsMQ1120(true);
    } else {
      setIsMQ1120(false);
    }
  };

  const checkMQ1024 = () => {
    if (mdq1024.matches) {
      setIsMQ1024(true);
    } else {
      setIsMQ1024(false);
    }
  };

  const checkMQ876 = () => {
    if (mdq876.matches) {
      setIsMQ876(true);
    } else {
      setIsMQ876(false);
    }
  };

  return { isMQ876, isMQ1024, isMQ1120 };
};
