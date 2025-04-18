import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";
import Projects from "../../layouts/projects";
import StatsComponent from "../../layouts/Stats";
import TestimonialCarousel from "../../layouts/Stories";
import HeroSection from "../Hero";
import LatestSuccessStories from "../LatestSuccessStories";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden mt-16">
      {/* Navbar at the top */}
      {/* <Navbar /> */}
      <HeroSection />
      <Projects />
      <LatestSuccessStories />
      <StatsComponent />

      <TestimonialCarousel />
    </div>
  );
};
export default HomePage;
