import getData from "@/api/getData";

interface props {
  data: [];
}
const mainCart = ({ data }: props) => {
  return <div></div>;
};

export default mainCart;

export const getServerSideProps = async () => {
  const DataLocalStorge = localStorage.getItem('cart');
  if (DataLocalStorge) {
    const ParseData = JSON.parse(DataLocalStorge);
    try {
        ParseData.map(item => {
            // getData()
        })
    } catch (error) {
      console.log(error);
    }
    return {
      props: {
        data: ParseData,
      },
    };
  } else {
    return {
      props: {
        data: [],
      },
    };
  }
};
mainCart.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};