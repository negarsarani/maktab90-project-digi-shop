import getData from '@/api/getData';
import { FinalForm } from '@/page/user';
import { setCookie, getCookie, removeCookies } from 'cookies-next';
import { parseCookies } from 'nookies';

const final = ({ user }: props) => {

  return (
    <div className='lg:container lg:mx-auto px-4'>
      <FinalForm />
    </div>
  );
};

export default final;

export const getServerSideProps = async (context) => {
  const cookies = parseCookies(context);
  const userId = cookies['id'];

  if (!userId) {
    // Redirect to login page or handle the absence of userId
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const InformationUser = await getData(`users/${userId}`).then(
    (res) => res.data.user
  );
  try {
    return { props: { user: InformationUser } };
  } catch (error) {
    console.log(error);
    return { props: { InformationUser: null } };
  }
};

final.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};
