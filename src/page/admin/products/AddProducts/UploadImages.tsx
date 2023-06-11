import Image from 'next/image';
import React, { useState } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const UploadImages = () => {
      // const [uploading, setUploading] = useState(false)
  const [imgsSrc, setImgsSrc] = useState([]);
  // const [uploading, setUploading] = useState(false)
  const HandleImage = (e) => {
    for (const file of e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImgsSrc((imgs) => [...imgs, reader.result]);
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    }
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
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex items-center justify-center text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span className="text-orangeAdmin">
                        فایل خود را انتخاب کنید
                      </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        multiple
                        onChange={HandleImage}
                      />
                    </label>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 items-center justify-center mt-10">
                  {imgsSrc?.map((link) => (
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
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex items-center justify-center text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span className="text-orangeAdmin">
                        فایل خود را انتخاب کنید
                      </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        multiple
                        onChange={HandleImage}
                      />
                    </label>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 items-center justify-center mt-10">
                  {imgsSrc?.map((link) => (
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
              </div>
            </div>
            
          </div> 
        </>
    );
};

export default UploadImages;