import Title from "./Title";
import g1 from "../../assets/g1.png";
import g2 from "../../assets/g2.png";
import g3 from "../../assets/g3.png";
import g4 from "../../assets/g4.png";
import g5 from "../../assets/g5.png";
import g6 from "../../assets/g6.png";
import g7 from "../../assets/g7.png";

function Gallery() {
  return (
    <div className="flex flex-col items-center">
      <Title
        title="Gallery"
        description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
      />
      <div className="w-4/5 flex flex-col items-center">
        <div className="grid w-[350px] md:w-full gap-5 items-center grid-cols-1 md:grid-cols-4">
            <img src={g1} alt="Image 1" className="w-full h-64 object-cover m-3 rounded-md"/>
            <img src={g2} alt="Image 2" className="w-full h-64 object-cover m-3 rounded-md"/>
            <img src={g3} alt="Image 3" className="w-full h-64 object-cover m-3 rounded-md"/>
            <img src={g4} alt="Image 4" className="w-full h-64 object-cover m-3 rounded-md"/>
        </div>
        <div className="grid w-[350px] md:w-full gap-5 items-center grid-cols-1 md:grid-cols-3">
            <img src={g5} alt="Image 1" className="w-full h-64 object-cover m-3 rounded-md"/>
            <img src={g6} alt="Image 2" className="w-full h-64 object-cover m-3 rounded-md"/>
            <img src={g7} alt="Image 3" className="w-full h-64 object-cover m-3 rounded-md"/>
        </div>
      </div>
      <a href="#" className="font-medium m-5">
        <button type="button" className="btn w-44 h-12 text-white py-2 border border-solid border-white hover:text-black hover:bg-gray-200">
          See More
        </button>
      </a>
    </div>
  );
}
export default Gallery;
