type DateTimeFormatProps = {
  date: Date;
};

export const DateFormat = ({ date }: DateTimeFormatProps) => {
  const formattedDate = new Intl.DateTimeFormat("it-CH", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    timeZone: "Europe/Zurich",
  }).format(new Date(date));
  return <div>{formattedDate}</div>;
};
