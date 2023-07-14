import React from "react";

let isFirst = false;

const mdq1024 = window.matchMedia("(min-width: 1024px)");

export const useMediaQuery = () => {
  const [isMQ1024, setIsMQ1024] = React.useState(true);

  React.useEffect(() => {
    if (!isFirst) {
      checkMQ1024();
      isFirst = true;
    }

    mdq1024.addEventListener("change", checkMQ1024);
  });

  const checkMQ1024 = () => {
    if (mdq1024.matches) {
      setIsMQ1024(true);
    } else {
      setIsMQ1024(false);
    }
  };

  return { isMQ1024 };
};
