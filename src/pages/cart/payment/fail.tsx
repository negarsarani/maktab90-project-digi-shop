import Linkrouter from '@/components/Linkrouter';

const fail = () => {
  return (
    <div className='w-full h-full items-center justify-center flex flex-col'>
      <div>متاسفانه پرداخت شما به اتمام نرسید</div>
      <div>با تشکر از صبوری شما 🤍</div>
      <Linkrouter className="text-btnCard" href="/">
        برگشت به صفحه اول سایت
      </Linkrouter>
    </div>
  );
};

export default fail;
