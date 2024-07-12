import Title from "./Title";
function Contents(){
    return(
        <div className="mt-12">
             <Title
                title="Contents"
                description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
            />
            <div className="flex justify-center mt-8">
                <div className="bg-white w-[480px] h-[650px] flex flex-col justify-between items-center m-7 p-[50px]">
                    <h4 className="font-medium text-[25px]">Work</h4>
                    <p className="w-72 text-[#5C5C5C] p-3 text-center">Ever wondered if you're too reliant on a client for work? Slate helps you identify .</p>
                    <a href="#"  className="font-medium">
                <button type="button" className="btn w-44 h-16 bg-[#4452FE] text-white py-2 hover:bg-sky-950 ">Sign Up</button>
                </a>
                    <img src="src\assets\work-image.png"></img>
                </div>
                <div className="bg-white  w-[480px] h-[650px] flex flex-col justify-between items-center m-7 p-[50px]">
                    <h4 className="font-medium text-[25px]">Design with real data</h4>
                    <p className="w-72 text-[#5C5C5C] p-3 text-center">Ever wondered if you're too reliant on a client for work? Slate helps you identify .</p>
                    <a href="#"  className="font-medium">
                <button type="button" className="my-5 btn w-44 h-16 bg-[#4452FE] text-white py-2 hover:bg-sky-950 ">Try For Free</button>
                </a>
                    <img src="src\assets\data image.png"></img>
                </div>
            </div>
        </div>
    )
}
export default Contents;