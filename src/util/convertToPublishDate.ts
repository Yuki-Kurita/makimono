import dayjs from "dayjs";

export const convertToPublishDate = (datetime: Date) => {
  const d = dayjs(datetime);
  return d.format("YYYY/MM/DD");
};
