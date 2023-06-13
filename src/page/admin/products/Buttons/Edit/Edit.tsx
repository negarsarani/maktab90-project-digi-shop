import getData from '@/api/getData';
import { Button } from '@/components';
import useRedux from '@/hooks/useRedux';
import { ACTIVE } from '@/redux/slice';
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
    <Button className="text-sm text-gray-900 w-full" type="button">
      <Image
        src="/icons/edit.svg"
        alt="ویرایش"
        width={22}
        height={20}
        id={id}
        onClick={() => {
          getData(`products/${id}`)
            .then((res) => dispatch(ACTIVE(res.data.product)))
            .then(() =>
            setIsOpen({
                Edit: true,
                Delete: false,
              })
            )
        }}
      />
    </Button>
  );
};

export default Edit;
