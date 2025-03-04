import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Loading, Header } from "../components";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header className="" />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="">
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;
