type TimeOptionsType = {
  hour: "numeric";
  minute: "numeric";
};

export const timeOptions: TimeOptionsType = {
  hour: "numeric",
  minute: "numeric",
};

export const formatPlainTime = (date: string) => {
  const dateThen = Date.parse(date);

  const dateNew = new Intl.DateTimeFormat("en-US", timeOptions)
    .format(dateThen)
    .replace(" at", ",");

  const ampm = dateNew.match(/[a|p]m/i);

  if (ampm) {
    return dateNew.replace(ampm[0], ampm[0].toLowerCase());
  } else {
    return dateNew;
  }
};
