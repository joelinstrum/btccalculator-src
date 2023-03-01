import { constants } from "./constants";

export const date = (d: Date = new Date()) => {
  const day = d.getDay();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  return `${month}/${day}/${year}`;
};

export const isToday = (from: any) => {
  return date() !== date(new Date(from));
};

export const getDateFrom = (from: string | undefined = ""): string => {
  // let d = new Date();
  // let newDate = d.setDate(d.getDate() - daysAgo(from));
  var d = new Date();
  d.setDate(d.getDate() - daysAgo(from));
  let newDate = d.toLocaleDateString();
  // this is a dummy comment
  return newDate;
};

export const dateFromTimestamp = (timestamp: number) => {
  var d = new Date(timestamp * 1000);
  return d.toLocaleDateString();
};

export const cryptoFromDateOptions = (
  startYear: number
): { [key: string]: string } => {
  let fromString = JSON.stringify(constants.DATE_FROM);
  let from = JSON.parse(fromString);
  let currentYear = new Date().getFullYear();
  const n = currentYear - startYear;
  for (let i = 2; i <= n; i++) {
    from = {
      ...from,
      ...{ [`H${i}`]: `${i} years ago (${currentYear - i})` },
    };
  }
  return from;
};

export const daysAgo = (from: string): number => {
  let _from = from.replace(/[^0-9.]/gm, "");
  return 365 * parseFloat(_from);
};

export const getTimestamp = (from?: string): number => {
  if (!from) {
    return Math.floor(Date.now() / 1000);
  }
  if (typeof from === "string") {
    const datum = Date.parse(from);
    return datum / 1000;
  }
  return Math.floor(Date.now() / 1000);
};
