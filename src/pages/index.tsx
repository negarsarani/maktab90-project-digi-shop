export default function Home() {
  return (
    <div>
      hi im index
    </div>
  )
}
Home.getLayout = function PageLayout(page: any) {
  return <> {page}</>;
};