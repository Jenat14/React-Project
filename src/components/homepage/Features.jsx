import Title from "./Title";
import chatbot from "../../assets/features-chatbot.png";
import chart from "../../assets/features-chart.png";
import menu from "../../assets/f-round-restaurant-menu.png";
import alien from "../../assets/f-_alien-outline.png";
import inclusive from "../../assets/f-_all-inclusive.png";
function Features(){
    const Content = ({icon,heading,text}) => (
        <div className="flex flex-col m-3 mb-[70px]">
            <div className="flex justify-space w-[190px] text-left">
                <img src={icon} className="mr-3"></img>
                <h4 className="content-center font-medium text-xl">{heading}</h4>
            </div>
            <p className=" font-normal text-base w-72 mt-2 text-left">{text}</p>
        </div>
    );
    return(
        <div className="h-auto flex flex-col items-center justify-center text-white text-center h-[1200px] mb-0 md:mb-40">
            <Title
                title="Features"
                description="Most calendars are designed for teams. Slate is designed for 
            freelancers who want a simple way to plan their schedule."/>
            <div className="mt-[50px] flex flex-col md:flex-row items-center">
                <div class="relative w-[70%]">
                    <img src={chatbot} className="relative" alt="Chatbot Image"></img>
                    <img src={chart} className="absolute w-[70%] top-[80%] left-[60%] -translate-x-2/3 md:-translate-x-1/3 -translate-y-1/3 "alt="Chart Image"></img>
                </div>
                <div className="ml-11 mt-24 md:mt-0">
                    <Content
                    icon={menu}
                    heading="A single source of truth"
                    text="When you add work to your Slate calendar we automatically calculate useful insights "
                    />
                    <Content
                    icon={alien}
                    heading="Intuitive interface"
                    text="When you add work to your Slate calendar we automatically calculate useful insights "
                    />
                    <Content
                    icon={inclusive}
                    heading="Or with rules"
                    text="When you add work to your Slate calendar we automatically calculate useful insights "
                    />
                </div>
            </div>
        </div>
    )
}
export default Features;