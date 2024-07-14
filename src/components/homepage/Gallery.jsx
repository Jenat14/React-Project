import Title from "./Title";

function Gallery() {
  return (
    <div className="flex flex-col items-center">
      <Title
        title="Gallery"
        description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
      />
      <div className="w-4/5 flex flex-col items-center">
        <div className="grid w-[350px] md:w-full gap-5 items-center grid-cols-1 md:grid-cols-4">
            <img src="src/assets/g1.png" alt="Image 1" className="w-full h-64 object-cover m-3 rounded-md"/>
            <img src="src/assets/g2.png" alt="Image 2" className="w-full h-64 object-cover m-3 rounded-md"/>
            <img src="src/assets/g3.png" alt="Image 3" className="w-full h-64 object-cover m-3 rounded-md"/>
            <img src="src/assets/g4.png" alt="Image 4" className="w-full h-64 object-cover m-3 rounded-md"/>
        </div>
        <div className="grid w-[350px] md:w-full gap-5 items-center grid-cols-1 md:grid-cols-3">
            <img src="src/assets/g5.png" alt="Image 1" className="w-full h-64 object-cover m-3 rounded-md"/>
            <img src="src/assets/g6.png" alt="Image 2" className="w-full h-64 object-cover m-3 rounded-md"/>
            <img src="src/assets/g7.png" alt="Image 3" className="w-full h-64 object-cover m-3 rounded-md"/>
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
