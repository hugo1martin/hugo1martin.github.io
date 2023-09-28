import Footer from "./footer";
import Header from "./header";
import BubbleBackground from "../bubbleBackground";

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <>
      <BubbleBackground />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
