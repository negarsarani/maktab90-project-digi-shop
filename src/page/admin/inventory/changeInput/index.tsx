import useRedux from '@/hooks/useRedux';
import { UPDATAINVENTORY } from '@/redux/slice';
import React, { useState } from 'react';
import EdiText from 'react-editext';
interface props {
  values: string;
  id: string;
  name: string;
}
function EditText({ values, id, name }: props) {
  const [value, setValue] = useState(values);
  const [valueAdmin, dispatch] = useRedux((state) => state.adminState);
  const handleSave = (val:string) => {
    console.log('Edited Value -> ', val);
    if (val !== '') {
      setValue(val)
      const FindData = valueAdmin.orders.data.map((item: { id: string }) => {
        if (item.id === id) {
          return item;
        }
      });
      if (FindData[name] !== values) {
        const checkProduct = valueAdmin.inventory.updateItems.find(
          (item: { id: string }) => item.id === id
        );
        checkProduct
          ? dispatch(
              UPDATAINVENTORY({
                item: { id: id, name: name, value: val },
                type: 'valueAdd',
              })
            )
          : dispatch(
              UPDATAINVENTORY({
                item: { id: id, name: name, value: val },
                type: 'newAdd',
              })
            );
      }
    } else {
      setValue(''); // Update the state value to an empty string explicitly
    }
  };

  return (
    <div className="flex items-center lg:w-full w-[14rem] justify-center ">
      <EdiText
        value={value}
        tabIndex={10}
        onSave={handleSave}
        submitOnUnfocus
        startEditingOnFocus
        hideIcons={true}
        editButtonClassName="border-none"
        saveButtonClassName="text-xs w-10px"
        cancelButtonClassName="text-xs w-10px"
        buttonsAlign="before"
        cancelOnEscape
        cancelOnUnfocus
        hint={<span>به عدد و تومان وارد کنید</span>}
        inputProps={{
          // placeholder: 'Type your answer here',
          style: {
            border: '0px',
            borderRadius: '10px',

            borderColor: '#ffff',
            fontWeight: 500,
            width: '100%',
          },
          name: 'answer1',
        }}
        type="number"
        saveButtonContent={'ذخیره'}
        cancelButtonContent={'انصراف'}
        className=" text-sm text-center cursor-pointer w-full flex items-center justify-center py-3   bg-white border-opacity-40 border-2 rounded-lg  focus:border-none focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-orangeAdmin shadow-md text-gray-900 placeholder:py-2 "
        // viewProps={{
        //     style:{backgroundColor:"#233C51"  , width:`100%`},
        //     className: '#233C51'
        //   }}
        showButtonsOnHover
        editButtonContent={'ویرایش'}
      />
    </div>
  );
}

export default EditText;
