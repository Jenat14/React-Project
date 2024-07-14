import Title from "./Title";

function Link(){
    return(
        <div className="flex items-center">
            <div className="bg-[#343434] w-[1500px] flex flex-col md:flex-row h-[380px] rounded-xl m-28">
                <div className="p-4 w-6/12">
                    <Title
                    title="OpenType features and Variable fonts"/>
                    <a href="#"  className="font-medium">
                <button type="button" className="btn w-60 h-14 bg-[#4452FE] text-white ml-5 hover:bg-white hover:text-[#4452FE]">Try For Free</button>
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