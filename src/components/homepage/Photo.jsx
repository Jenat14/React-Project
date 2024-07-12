function Photo(){
    return(
        <div className="relative mt-4 h-[800px]">
            <img src="src\assets\i-bg.png" className="z-index[-10]"></img>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
        </div>
    )
}
export default Photo;