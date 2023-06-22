import { useState } from 'react';
import { Tab } from '@headlessui/react';
import ReadMore from './shared/RaedMore';

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ');
}
type postType = {
  description?:string; productDescription?:string 
    ; name:string ; id:number ; title:string ; date:string ; commentCount:string ; shareCount:string
}
interface props {
  data: {description:string};
}
export default function Index({ data }: props) {
  let [categories, setCatg] = useState({
    توضیحات: [
      {
        name: 'description',
        description: `فروشگاه دیجی شاپ این کالا را معرفی میکند`,
        productDescription: `${data.description || ""}`,
      },
    ],
    نظرات: [
      {
        name: 'comments',
        id: 1,
        title: 'با سلام من این کالا را خریداری کردم و بسیار راضی هستم',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        name: 'comments',
        id: 2,
        title: 'پیشنهاد من خریداری این کالاست . واقعا عالی و مفید 👌',
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="w-full">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl  p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full border-b py-2.5 text-sm font-medium leading-5 ring-0 focus:outline-none focus:ring-0  ',

                  selected
                    ? 'text-btnCard border-b border-btnCard '
                    : 'text-[#999999]   hover:text-black border-b hover:border-black'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className="rounded-xl bg-white p-3  ring-0 focus:ring-0
              ring-white ring-opacity-60  focus:outline-none"
            >
              {posts.map((post :postType) => {
                if (post.name == 'description') {
                  return (
                    <div key={post.description} className="w-full">
                        <p>{post.description}</p>{' '}
                      <ReadMore> 
                        {post.productDescription}
                      </ReadMore>
                    </div>
                  );
                }
                if (post.name === 'comments') {
                  return (
                    <ul
                      key={post.id}
                      className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500"
                    >
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 hover:bg-gray-100"
                      >
                        <h3 className="text-sm font-medium leading-5">
                          {post.title}
                        </h3>
                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                          <li>{post.date}</li>
                          <li>&middot;</li>
                          <li>{post.commentCount} comments</li>
                          <li>&middot;</li>
                          <li>{post.shareCount} shares</li>
                        </ul>

                        <a
                          href="#"
                          className={classNames(
                            'absolute inset-0 rounded-md',
                            'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                          )}
                        />
                      </li>
                    </ul>
                  );
                }
              })}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
