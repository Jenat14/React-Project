import Title from "./Title";
import work from "../../assets/work-image.png";
import data from "../../assets/data image.png";
function Contents(){
    const Contentbox = ({heading,text,button,image}) =>(
        <div className="bg-white w-[480px] h-[650px] flex flex-col rounded-xl justify-between items-center m-7 p-[50px]">
            <h4 className="font-medium text-[25px]">{heading}</h4>
            <p className="w-72 text-[#5C5C5C] p-3 text-center">{text}</p>
            <a href="#"  className="font-medium">
            <button type="button" className="btn w-44 h-16 bg-[#4452FE] text-white py-2 hover:bg-sky-950 ">{button}</button>
            </a>
            <img src={image}></img>
        </div>
    );
    return(
        <div className="mt-12">
             <Title
                title="Contents"
                description="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
            />
            <div className="flex flex-col md:flex-row justify-center items-center mt-8">
                <Contentbox
                heading="Work"
                text="Ever wondered if you're too reliant on a client for work? Slate helps you identify ."
                button="Sign Up"
                image={work}
                />
                <Contentbox
                heading="Design with real data"
                text="Ever wondered if you're too reliant on a client for work? Slate helps you identify ."
                button="Try For Free"
                image={data}
                />
            </div>
        </div>
    )
}
export default Contents;