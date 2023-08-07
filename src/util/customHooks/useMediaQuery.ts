import React from "react";

// let isFirst = false;

const mdq1024 = window.matchMedia("(min-width: 1024px)");
const mdq876 = window.matchMedia("(min-width: 876px)");

export const useMediaQuery = () => {
  const [isMQ1024, setIsMQ1024] = React.useState(mdq1024.matches);
  const [isMQ876, setIsMQ876] = React.useState(mdq876.matches);

  React.useEffect(() => {
    // if (!isFirst) {
    //   checkMQ1024();
    //   isFirst = true;
    // }

    mdq1024.addEventListener("change", checkMQ1024);
    mdq876.addEventListener("change", checkMQ876);
  });

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

  return { isMQ876, isMQ1024 };
};
