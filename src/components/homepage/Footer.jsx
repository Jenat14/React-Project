function Footer(){
    const Comp = ({heading, link1, link2, link3, link4, href1, href2, href3, href4})=>(
            <div className="mx-5">
                <h6 className="text-white font-medium text-xl mb-5">{heading}</h6>
                <a href={href1} className="text-white font-medium text-base"><p className="mx-2 my-4">{link1}</p></a>
                <a href={href2} className="text-white font-medium text-base"><p className="mx-2 my-4">{link2}</p></a>
                <a href={href3} className="text-white font-medium text-base"><p className="mx-2 my-4">{link3}</p></a>
                <a href={href4} className="text-white font-medium text-base"><p className="mx-2 my-4">{link4}</p></a>
            </div>
    );
    const Addr = ({img,text}) =>(
        <div className="flex justify-start text-left text-white mb-6">
            <img src={img} className="mr-3"></img>
            <h4 className="content-center font-medium text-white text-base">{text}</h4>
        </div>
    );
   return(
        <div>
            <div className="flex justify-evenly">
                <div  className="flex justify-around w-6/12">
                    <Comp
                    heading="Fingertipe"
                    link1="Home"
                    link2="Examples"
                    link3="Pricing"
                    link4="Updates"
                    href1="#"
                    href2="#"
                    href3="#"
                    href4="#"
                    />
                    <Comp
                    heading="Resources"
                    link1="Home"
                    link2="Examples"
                    link3="Pricing"
                    link4="Updates"
                    href1="#"
                    href2="#"
                    href3="#"
                    href4="#"
                    />
                    <Comp
                    heading="About"
                    link1="Home"
                    link2="Examples"
                    link3="Pricing"
                    link4="Updates"
                    href1="#"
                    href2="#"
                    href3="#"
                    href4="#"
                    />
                </div>
                <div className="mr-12">
                    < Addr
                    img="src\assets\address.png"
                    text="7480 Mockingbird Hill undefined "
                    />
                    < Addr
                    img="src\assets\phone.png"
                    text="(239) 555-0108"
                    />
                    <div className="flex justify-between w-44 my-8">
                        <a href="#"><img src="src\assets\f-twitter.png"></img></a>
                        <a href="#"><img src="src\assets\f-facebook.png"></img></a>
                        <a href="#"><img src="src\assets\f-linkedin.png"></img></a>
                    </div>
                </div>
            </div>
        </div>
   )
}
export default Footer;