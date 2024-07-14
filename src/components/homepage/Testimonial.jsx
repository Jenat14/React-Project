import Title from "./Title";

function Testimonial(){
    const Person = ({photo,names,role,text}) =>(
        <div className="border border-white rounded-lg flex flex-col justify-between items-center m-2 p-8">
            <div className="flex justify-start w-full ">
                <img src={photo}></img>
                <div className="font-medium text-white text-[16px] ml-2">
                    <h6>{names}</h6>
                    <p >{role}</p>
                </div>
            </div>
            <p className="w-72 text-white text-left">{text}</p>
        </div>
    );
    return(
        <div className="flex flex-col items-left">
            <Title
            title="Testimonials"/>
            <div className="flex justify-center mt-8">
                <Person
                    photo="src\assets\t1.png"
                    names="Claire Bell"
                    role="Designer"
                    text="Slate helps you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year. Slate helps 
                        you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year.your financial 
                        goal for the month and year."
                    />
                    <Person
                    photo="src\assets\t2.png"
                    names="Francisco Lane"
                    role="Designer"
                    text="Slate helps you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year. Slate helps 
                        you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year.your financial 
                        goal for the month and year."
                    />
            </div>
            <div className="flex justify-center">
            <Person
                    photo="src\assets\t3.png"
                    names="Ralph Fisher"
                    role="Designer"
                    text="Slate helps you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year. Slate helps 
                        you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year.your financial 
                        goal for the month and year."
                    />
                    <Person
                    photo="src\assets\t4.png"
                    names="Jorge Murphy"
                    role="Designer"
                    text="Slate helps you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year. Slate helps 
                        you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year.your financial 
                        goal for the month and year."
                    />
            </div>
        </div>
    )
}
export default Testimonial;