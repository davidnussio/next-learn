type DateTimeFormatProps = {
  date: Date;
};

export const TimeFormat = ({ date }: DateTimeFormatProps) => {
  const formattedDate = new Intl.DateTimeFormat("it-CH", {
    hour: "numeric",
    minute: "numeric",
    timeZone: "Europe/Zurich",
  }).format(new Date(date));
  return <div>{formattedDate}</div>;
};
