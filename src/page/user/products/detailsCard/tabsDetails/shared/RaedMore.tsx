import { ReactNode, useState } from 'react';

const ReadMore = ({ children }:{children:ReactNode}) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="text">
      <div className="">{isReadMore ? text?.slice(0, 150) : text}</div>
      <span
        onClick={toggleReadMore}
        className="text-[rgb(192,192,192)] cursor-pointer"
      >
        {isReadMore ? '...read more' : ' show less'}
      </span>
    </div>
  );
};

export default ReadMore;
