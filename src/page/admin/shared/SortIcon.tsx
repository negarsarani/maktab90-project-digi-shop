import Image from 'next/image';
interface Props {
  sort: 'ascending' | 'descending';
}
export const SortIcon = ({ sort }: Props) => {
  if (sort === 'descending') {
    return (
      <Image
        src="/icons/sortDescend.svg"
        alt="descending"
        width={10}
        height={10}
        className="cursor-pointer"
      />
    );
  }
  return (
    <Image
      src="/icons/sortAscend.svg"
      alt="ascending"
      width={10}
      height={10}
      className="cursor-pointer"
    />
  );
};
