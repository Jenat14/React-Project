import image from "../../assets/i-bg.png";
function Photo(){
    return(
        <div className="relative mt-4 mb-40">
            <img src={image} className="z-index[-10]"></img>
            <div class="absolute top-20 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
        </div>
    )
}
export default Photo;