import Title from "./Title";
function Features(){
    return(
        <div className=" h-auto flex flex-col items-center justify-center text-white text-center h-[1200px]">
            <Title
                title="Features"
                description="Most calendars are designed for teams. Slate is designed for 
            freelancers who want a simple way to plan their schedule."/>
            <div className="mt-[50px] flex">
                <div class="relative">
                    <img src="src/assets/features-chatbot.png" class="relative" alt="Chatbot Image"></img>
                    <img src="src/assets/features-chart.png" class="absolute top-[450px] left-[350px] z-20" alt="Chart Image"></img>
                </div>
                <div className="ml-11">
                    <div className="flex flex-col ml-4 my-10 mb-[70px]">
                        <div className="flex justify-space w-[190px] text-left">
                            <img src="src\assets\f-round-restaurant-menu.png" className="mr-3"></img>
                            <h4 className="content-center font-medium text-xl">A single source of truth</h4>
                        </div>
                        <p className=" font-normal text-base w-72 mt-2 text-left">When you add work to your Slate calendar we automatically calculate useful insights 
                        </p>
                    </div>
                    <div className="flex flex-col m-3 mb-[70px]">
                        <div className="flex justify-space w-[190px] text-left">
                            <img src="src\assets\f-_alien-outline.png" className="mr-3"></img>
                            <h4 className="content-center font-medium text-xl">Intuitive interface</h4>
                        </div>
                        <p className=" font-normal text-base w-72 mt-2 text-left">When you add work to your Slate calendar we automatically calculate useful insights 
                        </p>
                    </div>
                    <div className="flex flex-col m-3 mb-[70px]">
                        <div className="flex justify-space w-[190px] text-left">
                            <img src="src\assets\f-_all-inclusive.png" className="mr-3"></img>
                            <h4 className="content-center font-medium text-xl">Or with rules</h4>
                        </div>
                        <p className=" font-normal text-base w-72 mt-2 text-left">When you add work to your Slate calendar we automatically calculate useful insights 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features;