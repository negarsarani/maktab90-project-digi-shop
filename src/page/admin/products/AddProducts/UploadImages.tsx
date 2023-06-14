import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { ProductModal } from '@/types/type';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
interface props {
  register: UseFormRegister<ProductModal>;

  setImgsSrc: Dispatch<SetStateAction<never[] | unknown[]>>;
  errors: FieldErrors<{ images: string; thumbnail: string }>;

  setThumbnailSrc: Dispatch<SetStateAction<never | unknown>>;
  editFlag: boolean | undefined;
  value: { images: string[]; thumbnail: string };
}
const UploadImages = ({
  register,
  setImgsSrc,
  setThumbnailSrc,
  errors,
  editFlag,
  value,
}: props) => {
  const [currentImages, setCurrentImages] = useState<
    { id: string; img: string }[]
  >([]);
  const [currentThumbnail, setCurrentThumbnail] = useState('');
  useEffect(() => {
    if (editFlag) {
      const congigImage = value.images.map(
        (item) => `http://localhost:8000/images/products/images/${item}`
      );
      const congigThumbnail = `http://localhost:8000/images/products/images/${value.thumbnail}`;
      console.log('img', congigImage);
      console.log('thumb', congigThumbnail);

      setCurrentImages(congigImage);
      setCurrentThumbnail(congigThumbnail);
    }
  }, []);

  const HandlemainImages = (e: any) => {
   const array = Object.entries(e.target.files)
   array.map((file:any) => {
     const reader = new FileReader();
    const generateId  = setTimeout(() => Date.now(), 400);
      reader.readAsDataURL(file[1]);
      reader.onload = () => {
  
       return  setCurrentImages((imgs: { id: number; img: string }) => [
          ...imgs,
          { id: generateId, img: reader.result },
        ]);  
        
        
      };
    
      
    });

    const imageName2 = e.currentTarget.files;

    const entries = Object.entries(imageName2);

    const Array = entries.map((item) => item[1]);
    return setImgsSrc(Array);
  };
  const HandleThumbnails = (e: any) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setCurrentThumbnail(reader.result);
    };
    reader.onerror = () => {
      console.log(reader.error);
    };
    const imageName2 = e.currentTarget.files;
    const entries = Object.entries(imageName2);
    const Array = entries.map((item) => item[1]);
    return setThumbnailSrc(Array[0]);
  };
  const handleDeleteImg = (
    event: any,
    name: 'currentImages' | 'currentThumbnail'
  ) => {
    if (name === 'currentImages') {
      const id = event.target.id;
      const filterImg = currentImages.filter((item) => +item.id !== +id);
      console.log(currentImages, id);
      setCurrentImages(filterImg)
      // console.log(filterImg , id);
    } else {
      setCurrentThumbnail('');
    }
  };
  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="col-span-full flex flex-col w-full justify-center items-center">
          <label
            htmlFor="cover-photo"
            className="flex  justify-start w-full text-sm font-medium leading-6 text-gray-900"
          >
            آپلود عکس های اصلی
          </label>
          <div className="mt-2 flex w-full flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center flex flex-col items-center justify-center">
              {currentImages.length !== 0 ? (
                <div className="flex flex-wrap gap-2 items-center justify-center mt-10">
                  {currentImages?.map((link) => (
                    <div key={link.id} className="w-20 relative aspect-square">
                      <Image
                        className="object-fill w-full h-full"
                        src={link.img}
                        width={50}
                        height={50}
                        alt="l"
                      />
                      <Image
                        className="absolute top-2 right-2 cursor-pointer"
                        src={'/icons/close.svg'}
                        width={20}
                        height={20}
                        alt="l"
                        id={link.id}
                        onClick={(event: any) =>
                          handleDeleteImg(event, 'currentImages')
                        }
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
              )}

              <div className="mt-4 flex items-center justify-center text-sm leading-6 text-gray-600">
                <label
                  htmlFor="images"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span className="text-orangeAdmin">
                    فایل خود را انتخاب کنید
                  </span>
                  <input
                    {...register('images')}
                    id="images"
                    name="images"
                    type="file"
                    className="sr-only"
                    multiple
                    onChange={HandlemainImages}
                  />
                </label>
              </div>
            </div>
          </div>{' '}
          <div className="h-5 text-orangeAdmin pt-2">
            {errors.images?.message}
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="col-span-full flex flex-col w-full items-center justify-center">
          <label
            htmlFor="cover-photo"
            className="flex justify-start text-sm font-medium w-full leading-6 text-gray-900"
          >
            آپلود عکس تامبنیل
          </label>
          <div className="mt-2 flex w-full flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center flex flex-col items-center justify-center">
              {currentThumbnail !== '' ? (
                <div className="w-20 aspect-square relative">
                  <Image
                    className="object-fill aspect-square w-full h-full"
                    src={currentThumbnail}
                    width={50}
                    height={50}
                    alt="l"
                  />
                  <Image
                    className="absolute top-2 right-2 cursor-pointer"
                    src={'/icons/close.svg'}
                    width={20}
                    height={20}
                    alt="l"
                    onClick={(event: any) =>
                      handleDeleteImg(event, 'currentThumbnail')
                    }
                  />
                </div>
              ) : (
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
              )}

              <div className="mt-4 flex items-center justify-center text-sm leading-6 text-gray-600">
                <label
                  htmlFor="thumbnail"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span className="text-orangeAdmin">
                    فایل خود را انتخاب کنید
                  </span>
                  <input
                    {...register('thumbnail')}
                    id="thumbnail"
                    name="thumbnail"
                    type="file"
                    // value={EditImage}
                    className="sr-only"
                    onChange={HandleThumbnails}
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-center mt-10"></div>
          </div>
          <div className="h-5 text-orangeAdmin pt-2">
            {errors.thumbnail?.message}
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadImages;
