import Title from "./Title";

function Partners(){
    return(
        <div className="h-auto flex flex-col items-center">
            <Title
            title="Partners"
            description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."/>
            <div className="flex justify-evenly m-[40px] w-[900px]">
                <img src="src\assets\logos_apple-app-store.png"></img>
                <img src="src\assets\logos_apiary.png"></img>
                <img src="src\assets\logos_android-icon.png"></img>
                <img src="src\assets\logos_basecamp.png"></img>
                <img src="src\assets\logos_airbnb.png"></img>
                <img src="src\assets\logos_ibm.png"></img>
            </div>
            <a href="#" className="font-medium m-5">
                <button type="button" className="btn w-44 h-12 text-white py-2 border border-solid border-white hover:text-black hover:bg-gray-200">All Partners</button>
            </a>
        </div>
    )
}
export default Partners;