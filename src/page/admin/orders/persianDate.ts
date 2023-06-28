const persianDate = (date: string) => {
  const originalDate = new Date(date);
  const persianOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    calendar: 'persian',
  };
  const persianDate = originalDate.toLocaleDateString('fa-IR', persianOptions);
  return persianDate;
};

export default persianDate;
