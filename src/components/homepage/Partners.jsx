import Title from "./Title";

function Partners(){
    return(
        <div className="h-auto flex flex-col items-center">
            <Title
            title="Partners"
            description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."/>
            <div className="m-[40px] w-[60%]">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 place-items-center">
                    <img src="src/assets/logos_apple-app-store.png" alt="Apple" />
                    <img src="src/assets/logos_apiary.png" alt="Apiary" />
                    <img src="src/assets/logos_android-icon.png" alt="Android Icon" />
                    <img src="src/assets/logos_basecamp.png" alt="Basecamp" />
                    <img src="src/assets/logos_airbnb.png" alt="Airbnb" />
                    <img src="src/assets/logos_ibm.png" alt="IBM" />
                </div>
            </div>

            <a href="#" className="font-medium m-5">
                <button type="button" className="btn w-44 h-12 text-white py-2 border border-solid border-white hover:text-black hover:bg-gray-200">All Partners</button>
            </a>
        </div>
    )
}
export default Partners;