import getData from '@/api/getData';
import { Button } from '@/components';
import useQueries from '@/hooks/useQueries';
import useRedux from '@/hooks/useRedux';
import { ACTIVE } from '@/redux/slice';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import React, { Dispatch, SetStateAction } from 'react';

interface props {
  id: string;
  setIsOpen: Dispatch<
    SetStateAction<{
      Edit: boolean;
      Delete: boolean;
    }>
  >;
}
const Edit = ({ id, setIsOpen }: props) => {
  const [value, dispatch] = useRedux((state) => state.formProductState);

  return (
    <>
      {/* {isLoading ? (
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        
      )} */}
      <Button className="text-sm text-gray-900 w-full" type="button">
        <Image
          src="/icons/edit.svg"
          alt="ویرایش"
          width={22}
          height={20}
          id={id}
          onClick={() => setIsOpen({
            Edit: true,
            Delete: false,
          })}
        />
      </Button>
    </>
  );
};

export default Edit;
