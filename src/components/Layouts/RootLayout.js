import Footer from "../Common/Footer";
import Header from "../Common/Header";

const RootLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;
