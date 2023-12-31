type DateOptionsType = {
  year: "numeric";
  month: "long";
  day: "numeric";
};

export const dateOptions: DateOptionsType = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const formatDate = (date: string) => {
  const dateNow = Date.now();
  const dateThen = Date.parse(date);

  const dateDiff = Math.abs(dateNow - dateThen);

  if (dateDiff < 1000 * 60 * 60 * 24 * 4) {
    const daysCount = ~~(dateDiff / 1000 / 60 / 60 / 24);
    return ~~daysCount + (daysCount === 1 ? " day ago" : " days ago");
  }

  return new Intl.DateTimeFormat("en-US", dateOptions).format(dateThen);
};
