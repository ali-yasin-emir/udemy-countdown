import Challenges from "@/components/Challenges";
import Header from "@/components/Header";
import Player from "@/components/Player";

const Home = () => {


  return (
    <div className="py-12 justify-center flex flex-col gap-4">
      <div className="max-md:w-[470px] max-md:h-fit w-[840px] h-fit flex flex-col gap-12" id="content">
        <Header />
        <Player />
        <Challenges />
      </div>
    </div>
  );
};

export default Home;
