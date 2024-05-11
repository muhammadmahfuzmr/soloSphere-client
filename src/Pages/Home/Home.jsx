import Carousal from "../../components/Slider/Carousal";
import TabCategory from "../../components/Tabs/TabCategory";


const Home = () => {
    return (
        <div className="container mx-auto mt-5">
           <Carousal></Carousal>
           <TabCategory></TabCategory>
        </div>
    );
};

export default Home;