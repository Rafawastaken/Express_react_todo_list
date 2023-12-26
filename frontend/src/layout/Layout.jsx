import Navbar from "../components/Navbar/Navbar";
import BodyContent from "../components/BodyContent/BodyContent";

const Layout = ({ title, children }) => {
  return (
    <>
      <Navbar />
      <BodyContent>{children}</BodyContent>
    </>
  );
};

export default Layout;
