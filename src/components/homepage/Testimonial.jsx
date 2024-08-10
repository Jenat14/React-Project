import Title from "./Title";
import t1 from "../../assets/t1.png";
import t2 from "../../assets/t2.png";
import t3 from "../../assets/t3.png";
import t4 from "../../assets/t4.png";
function Testimonial(){
    const Person = ({photo,names,role,text}) =>(
        <div className="border border-white rounded-lg flex flex-col justify-between items-center m-2 p-8">
            <div className="flex justify-start w-full p-4">
                <img src={photo} alt={names}/>
                <div className="font-medium text-white text-[16px] ml-2">
                    <h6>{names}</h6>
                    <p>{role}</p>
                </div>
            </div>
        <p className="w-72 text-white text-left">{text}</p>
        </div>
    );
    return(
        <div className="flex flex-col items-left">
            <Title
            title="Testimonials"/>
            <div className="flex flex-col items-center">
                <div className="w-fit grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
                    <Person
                        photo={t1}
                        names="Claire Bell"
                        role="Designer"
                        text="Slate helps you see how many more days
                            you need to work to reach your financial
                            goal for the month and year. Slate helps
                            you see how many more days
                            you need to work to reach your financial
                            goal for the month and year."
                    />
                    <Person
                        photo={t2}
                        names="Francisco Lane"
                        role="Designer"
                        text="Slate helps you see how many more days
                            you need to work to reach your financial
                            goal for the month and year. Slate helps
                            you see how many more days
                            you need to work to reach your financial
                            goal for the month and year."
                    />
                    <Person
                        photo={t3}
                        names="Ralph Fisher"
                        role="Designer"
                        text="Slate helps you see how many more days
                            you need to work to reach your financial
                            goal for the month and year. Slate helps
                            you see how many more days
                            you need to work to reach your financial
                            goal for the month and year."
                    />
                    <Person
                        photo={t4}
                        names="Jorge Murphy"
                        role="Designer"
                        text="Slate helps you see how many more days
                            you need to work to reach your financial
                            goal for the month and year. Slate helps
                            you see how many more days
                            you need to work to reach your financial
                            goal for the month and year."
                    />
                </div>
            </div>
        </div>
    )
}
export default Testimonial;