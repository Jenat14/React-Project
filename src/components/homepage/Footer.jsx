function Footer(){
    const Comp = ({heading, link1, link2, link3, link4, href1, href2, href3, href4})=>(
            <div>
                <h6 className="text-white font-medium text-xl mb-5">{heading}</h6>
                <a href={href1} className="text-white font-medium text-base"><p className="mx-2 my-4">{link1}</p></a>
                <a href={href2} className="text-white font-medium text-base"><p className="mx-2 my-4">{link2}</p></a>
                <a href={href3} className="text-white font-medium text-base"><p className="mx-2 my-4">{link3}</p></a>
                <a href={href4} className="text-white font-medium text-base"><p className="mx-2 my-4">{link4}</p></a>
            </div>
    );
    const Addr = ({img,text}) =>(
        <div className="flex justify-space w-[190px] text-left">
            <img src={img} className="mr-3"></img>
            <h4 className="content-center font-medium text-xl">{text}</h4>
        </div>
    );
   return(
        <div>
            <div className="flex justify-space">
                <div  className="flex justify-space ml-20 w-6/12">
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
                <div>
                    < Addr
                    img=""/>
                </div>
            </div>
        </div>
   )
}
export default Footer;