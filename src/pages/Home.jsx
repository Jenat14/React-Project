import Header from "../components/homepage/Header";
import Hero from "../components/homepage/Hero";
import Photo from "../components/homepage/Photo";
import Features from "../components/homepage/Features";
import Contents from "../components/homepage/Contents";
import Gallery from "../components/homepage/Gallery";
import Partners from "../components/homepage/Partners";
import Testimonial from "../components/homepage/Testimonial";
import Link from "../components/homepage/Link";
import Footer from "../components/homepage/Footer";
function  Home(){
    return(
        <div className="bg-[#181818]">
            <Header/>
            <Hero/>
            <Photo/>
            <Features/>
            <Contents/>
            <Gallery/>
            <Partners/>
            <Testimonial/>
            <Link/>
            <Footer/>
        </div>
    )
}
export default Home;