function Title({ title, description }) {
    return (
        <div className="h-auto mt-10 flex flex-col items-center justify-center text-white text-center">
            <h2 className="p-5 font-normal text-[52px]">{title}</h2>
            <p className="p-2 my-5 w-[380px] md:w-[600px] font-normal text-[20px] ">{description}</p>
        </div>
    );
}
export default Title;