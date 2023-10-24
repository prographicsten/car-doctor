import About from "./About/About";
import Banner from "./Banner/Banner";
import BrowseProduct from "./BrowseProduct/BrowseProduct";
import OurTeam from "./OurTeam/OurTeam";
import PrimaryInfo from "./PrimaryInfo/PrimaryInfo";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <PrimaryInfo></PrimaryInfo>
            <BrowseProduct></BrowseProduct>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;