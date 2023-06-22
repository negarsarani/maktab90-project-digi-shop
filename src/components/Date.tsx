const moment = require('moment-jalaali');
const Date = ({ date }: { date: string }) => {
  function convertToPersianDate(dateString: string) {
    const gregorianDate = moment(dateString, 'YYYY-MM-DDTHH:mm:ss.SSSZ');
    const persianDate = gregorianDate.format('jYYYY/jMM/jDD');
    return persianDate;
  }

  const persianDate = convertToPersianDate(date);
  return <div>{persianDate}</div>;
};

export default Date;
