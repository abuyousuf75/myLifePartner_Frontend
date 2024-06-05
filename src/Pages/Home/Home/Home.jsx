import Banner from "../Banner/Banner";
import ProfileCard from "../ProfileCard/ProfileCard";
import CounterSection from "./Counter/CounterSection";
import WorkHow from "./How_we_Work/WorkHow";
import SucessStory from "./SucessStory/SucessStory";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <ProfileCard></ProfileCard>
        <WorkHow></WorkHow>
        <CounterSection></CounterSection>
        <SucessStory></SucessStory>
    </div>
  );
};

export default Home;
