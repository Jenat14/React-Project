import Title from "./Title";

function Testimonial(){
    return(
        <div className="flex flex-col items-left">
            <Title
            title="Testimonials"/>
            <div className="flex justify-center mt-8">
                <div className="border border-white rounded-lg flex flex-col justify-between items-center m-2 p-8">
                    <div className="flex justify-start w-full ">
                        <img src="src\assets\t1.png"></img>
                        <div className="font-medium text-white text-[16px] ml-2">
                            <h6>Claire Bell</h6>
                            <p >Designer</p>
                        </div>
                    </div>
                    <p className="w-72 text-white text-left">Slate helps you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year. Slate helps 
                        you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year.your financial 
                        goal for the month and year.</p>
                </div>
                <div className="border border-white rounded-lg flex flex-col justify-between items-center m-2 p-8">
                    <div className="flex justify-start w-full ">
                        <img src="src\assets\t2.png"></img>
                        <div className="font-medium text-white text-[16px] ml-2">
                            <h6>Francisco Lane</h6>
                            <p >Designer</p>
                        </div>
                    </div>
                    <p className="w-72 text-white text-left">Slate helps you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year. Slate helps 
                        you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year.your financial 
                        goal for the month and year.</p>
                </div>

            </div>
            <div className="flex justify-center">
                <div className="border border-white rounded-lg flex flex-col justify-between items-center m-2 p-8">
                    <div className="flex justify-start w-full ">
                        <img src="src\assets\t3.png"></img>
                        <div className="font-medium text-white text-[16px] ml-2">
                            <h6>Ralph Fisher</h6>
                            <p >Designer</p>
                        </div>
                    </div>
                    <p className="w-72 text-white text-left">Slate helps you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year. Slate helps 
                        you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year.your financial 
                        goal for the month and year.</p>
                </div>
                <div className="border border-white rounded-lg flex flex-col justify-between items-center m-2 p-8">
                    <div className="flex justify-start w-full ">
                        <img src="src\assets\t4.png"></img>
                        <div className="font-medium text-white text-[16px] ml-2">
                            <h6>Jorge Murphy</h6>
                            <p >Designer</p>
                        </div>
                    </div>
                    <p className="w-72 text-white text-left">Slate helps you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year. Slate helps 
                        you see how many more days 
                        you need to work to reach your financial 
                        goal for the month and year.your financial 
                        goal for the month and year.</p>
                </div>

            </div>
        </div>
    )
}
export default Testimonial;