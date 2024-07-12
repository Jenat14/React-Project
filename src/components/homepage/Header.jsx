function Header(){
    return(
            <div className="container content-center p-3 bg-[#181818] flex justify-around">
                <div className="self-center ml-3.5">
                    <a href="#"><img src="src\assets\Logo.png"></img></a>
                </div>
                <div className="content-center text-mx-3 text-white font-medium leading-7 text-white">
                    <a href="#" className="m-4 hover:text-zinc-400">Home</a>
                    <a href="#" className="m-4 hover:text-zinc-400">Product</a>
                    <a href="#" className="m-4 hover:text-zinc-400">About</a>
                    <a href="#" className="m-4 hover:text-zinc-400">Contact</a>
                </div>
                <a href="#" className="content-center font-medium mr-20">
                    <button type="button" className="btn w-28 text-white py-2 border border-solid border-white hover:text-black hover:bg-zinc-400">Login</button>
                </a>
        </div>
    )
}
export default Header;