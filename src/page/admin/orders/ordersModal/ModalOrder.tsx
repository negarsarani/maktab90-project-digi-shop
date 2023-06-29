import { Button } from '@/components'
import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment, ReactNode, SetStateAction, useState } from 'react'
interface props {
  openModal: boolean;
  setIsOpen: Dispatch<
    SetStateAction<any>
  >;
  children:ReactNode
}
 function ModalOrder({openModal , setIsOpen , children}:props) {
  

  function handleClose() {
    setIsOpen(false)
  }


  return (
    <>
     <Dialog
      open={openModal}
      onClose={()=>{}}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <Dialog.Panel className="bg-white px-3 py-3 xl:w-7/12  lg:w-8/12 md:w-9/12 w-11/12  shadow-gray-300  mx-auto rounded-md shadow-lg ">
        <div className=' border-orange-300 relative border-opacity-60 border rounded-lg py-2 px-3 w-full'>
          {children}
        <div className='w-full flex items-center justify-center gap-5 pb-2'>
        
           <Button className=' absolute top-1 right-1 bg-gray-100 hover:bg-gray-300 px-3 py-1 rounded-md' type='reset' onClick={handleClose}>X</Button>
        </div>
        </div>
       
        
      </Dialog.Panel>
    </Dialog>  
    </>
  )
}
export default ModalOrder