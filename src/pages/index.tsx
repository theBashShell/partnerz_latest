import Top from "../components/index/Top";
import HeadMeta from "../components/meta/HeadMeta";
import NavBar from "../components/nav/NavBar";
import Content from "../components/index/Content";
import Services from "../components/index/Services";
import Footer from "../components/footer/Footer";
import Page from "../components/page/Page";

const Index = () => (
  <Page>
    <HeadMeta>
      <title>Partnerz FP Limited | Your Financial Architects</title>
    </HeadMeta>
    <NavBar />
    <Top />
    <Content />
    <Services />
    <Footer />
  </Page>
);

export default Index;
// <Stock />
//
