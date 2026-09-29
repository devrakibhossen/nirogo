import BestSellingProducts from "../components/BestSellingProducts";
import Hero from "../components/Hero";
import TrustBadges from "../components/TrustBadges";

const Home = () => {
  return (
    <div className="mt-6">
      <Hero></Hero>
      <BestSellingProducts/>
      <TrustBadges/>
    </div>
  );
};

export default Home;