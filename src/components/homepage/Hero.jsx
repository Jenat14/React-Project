function Hero(){
    return(
        <div className="h-auto flex flex-col items-center justify-center text-white text-center">
            <h1 className="mt-10 font-medium text-[80px] w-[700px]">Work at the speed of thought</h1>
            <p className="p my-5 w-[600px] font-normal text-[20px] ">Most calendars are designed for teams. Slate is designed for 
            freelancers who want a simple way to plan their schedule.</p>
            <div className="flex mt-[70px] mb-3">
                <a href="#"  className="font-medium mr-20">
                <button type="button" className="btn w-44 h-16 bg-[#4452FE] text-white py-2 hover:text-[#4452FE] hover:bg-gray-200">Try For Free</button>
                </a>
                <a href="#" className="font-medium">
                <button type="button" className="btn w-44 h-16 text-white py-2 border border-solid border-white hover:text-black hover:bg-gray-200">Learn More</button>
                </a>
            </div>
        </div>
    )
}
export default Hero;