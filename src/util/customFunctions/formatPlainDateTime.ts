import { dateOptions } from "./formatDate";

type DateTimeOptionsType = {
  year: "numeric";
  month: "long";
  day: "numeric";
  hour: "numeric";
  minute: "numeric";
};

export const dateTimeOptions: DateTimeOptionsType = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

type formatPlainDateFunc = (date: string, isTime?: boolean) => string;

export const formatPlainDateTime: formatPlainDateFunc = (date, isTime) => {
  const dateThen = Date.parse(date);

  const newDate = new Intl.DateTimeFormat("en-US", isTime ? dateTimeOptions : dateOptions)
    .format(dateThen)
    .replace(" at", ",");

  const ampm = newDate.match(/[a|p]m/i);

  if (ampm) {
    return newDate.replace(ampm[0], ampm[0].toLowerCase());
  } else {
    return newDate;
  }
};
