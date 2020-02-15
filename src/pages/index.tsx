import Top from "../components/index/Top";
import HeadMeta from "../components/meta/HeadMeta";
import NavBar from "../components/nav/NavBar";
import Content from "../components/index/Content";
import Services from "../components/index/Services";
import Stock from "../components/stock/Stock";
const Index = () => (
  <>
    <HeadMeta>
      <title>Partnerz FP Limited | Your Financial Architects</title>
    </HeadMeta>
    <NavBar />
    <Top />
    <Content />
    <Services />
  </>
);

export default Index;
// <Stock />
//
