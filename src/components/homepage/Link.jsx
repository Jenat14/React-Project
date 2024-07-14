import Title from "./Title";

function Link(){
    return(
        <div className="flex items-center">
            <div className="bg-[#343434] w-[1600px] flex flex-col items-center lg:flex-row h-auto rounded-xl m-28">
                <div className="p-0 md:p-7 w-8/12 md:w-6/12 items-center">
                    <h2 className="text-white text-center mb-4 font-normal text-[52px]">OpenType features and Variable fonts</h2>
                    <a href="#"  className="font-medium">
                        <button type="button" className="btn w-60 h-14 bg-[#4452FE] text-white hover:bg-white hover:text-[#4452FE]">Try For Free</button>
                    </a>
                </div>
                <div>
                    <img src="src\assets\template.png" className="h-full"></img>
                </div>
            </div>
        </div>
    )
}
export default Link;