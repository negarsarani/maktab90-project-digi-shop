import * as yup from 'yup';
const MAX_FILE_SIZE = 102400; //100KB

const validFileExtensions = {
  image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'],
};

function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1
  );
}
const formProduct = yup.object().shape({
  name: yup
    .string()
    .min(3, 'نام محصول کوتاه است')
    .required('نام محصول الزامی می باشد'),
  brand: yup.string().required('برند محصول الزامی می باشد '),
  quantity: yup
    .number()
    .min(1, 'کم ترین مقدار موجودی یک عدد است')
    .typeError('تعداد موجودی کالا الزامی می باشد  ')
    .required('تعداد موجودی کالا الزامی می باشد  '),
  price: yup
    .number()
    .min(1000, 'حداقل مبلغ کالا هزار تومان می باشد')
    .typeError('مبلغ کالا الزامی می باشد')
    .required('مبلغ کالا الزامی می باشد'),
  category: yup.string().required('دسته بندی الزامی می باشد'),
  subcategory: yup.string().required('زیر دسته بندی الزامی می باشد'),
  // images: yup
  //   .mixed()
  //   .test(
  //     'is-valid-type',
  //     'تایپ های عکس باید jpg, gif, png, jpeg, svg, webp باشند',
  //     (value) =>
  //       isValidFileType(value !== '' && value?.name?.toLowerCase(), 'image')
  //   )
  //   .required('مبلغ کالا الزامی می باشد'),
  images: yup.string().required('عکس کالا الزامی می باشد'),
  thumbnail: yup.string().required('تامبنیل الزامی می باشد')
});

export default formProduct;
