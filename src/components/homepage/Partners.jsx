import Title from "./Title";
import apple from "../../assets/logos_apple-app-store.png";
import apiary from "../../assets/logos_apiary.png";
import android from "../../assets/logos_android-icon.png";
import basecamp from "../../assets/logos_basecamp.png";
import airbnb from "../../assets/logos_airbnb.png";
import ibm from "../../assets/logos_ibm.png";
function Partners(){
    return(
        <div className="h-auto flex flex-col items-center">
            <Title
            title="Partners"
            description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."/>
            <div className="m-[40px] w-[60%]">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 place-items-center">
                    <img src={apple} alt="Apple" />
                    <img src={apiary} alt="Apiary" />
                    <img src={android} alt="Android Icon" />
                    <img src={basecamp} alt="Basecamp" />
                    <img src={airbnb} alt="Airbnb" />
                    <img src={ibm} alt="IBM" />
                </div>
            </div>

            <a href="#" className="font-medium m-5">
                <button type="button" className="btn w-44 h-12 text-white py-2 border border-solid border-white hover:text-black hover:bg-gray-200">All Partners</button>
            </a>
        </div>
    )
}
export default Partners;