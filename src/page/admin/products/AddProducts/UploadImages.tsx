import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
interface props {
  setImgsSrc: Dispatch<SetStateAction<unknown[]>>;

  setThumbnailSrc: Dispatch<SetStateAction<string |unknown[]>>;
}
const UploadImages = ({
  setImgsSrc,

  setThumbnailSrc,
}: props) => {
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [currentThumbnail, setCurrentThumbnail] = useState('');
  const HandlemainImages = (e: any) => {
    for (const file of e.target.files) {
      console.log(e.target.files);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setCurrentImages((imgs: string) => [...imgs, reader.result]);
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    }
    const imageName2 = e.currentTarget.files;
    
    const entries = Object.entries(imageName2);
    
    const Array = entries.map((item) => item[1]);
   return setImgsSrc(Array);
  };
  const HandleThumbnails = (e: any) => {
    const file = e.target.files[0];
    console.log(Array);
    
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
   return setThumbnailSrc(imageName2[0]);

  };

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="col-span-full">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            آپلود عکس های اصلی
          </label>
          <div className="mt-2 flex  flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center flex flex-col items-center justify-center">
              {currentImages.length !== 0 ? (
                <div className="flex flex-wrap gap-2 items-center justify-center mt-10">
                  {currentImages?.map((link) => (
                    <div key={link} className="w-20 aspect-square">
                      <Image
                        className="object-fill w-full h-full"
                        src={link}
                        width={50}
                        height={50}
                        alt="l"
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
                  htmlFor="mainImages"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span className="text-orangeAdmin">
                    فایل خود را انتخاب کنید
                  </span>
                  <input
                    id="mainImages"
                    name="mainImages"
                    type="file"
                    className="sr-only"
                    multiple
                    onChange={HandlemainImages}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="col-span-full">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            آپلود عکس تامبنیل
          </label>
          <div className="mt-2 flex  flex-col justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center flex flex-col items-center justify-center">
              {currentThumbnail !== '' ? (
                <div className="w-20 aspect-square">
                  <Image
                    className="object-fill aspect-square w-full h-full"
                    src={currentThumbnail}
                    width={50}
                    height={50}
                    alt="l"
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
                    id="thumbnail"
                    name="thumbnail"
                    type="file"
                    className="sr-only"
                    onChange={HandleThumbnails}
                  />
                </label>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-center mt-10"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadImages;
