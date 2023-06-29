const persianDate = (date: string) => {
  const dates = new Date(date);
  const formattedDate = dates.toLocaleDateString('fa');
  return formattedDate;
};

export default persianDate;
