import { ReactNode, useState } from 'react';

const ReadMore = ({ children }: { children: ReactNode }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="w-full">
      <div className="w-full break-words">
        <div
          className={`w-full break-words ${isReadMore ?" h-12 truncate" : "h-full"}  `}
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
        {/* {isReadMore ? text?.slice(0, 150) : text} */}
      </div>
      <span
        onClick={toggleReadMore}
        className="text-[rgb(192,192,192)] bg-white bg-opacity-30 cursor-pointer"
      >
        {isReadMore ? '...read more' : ' show less'}
      </span>
    </div>
  );
};

export default ReadMore;
