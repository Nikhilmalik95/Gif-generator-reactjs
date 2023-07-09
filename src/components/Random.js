import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

function Random(){
    const {gif , loading , fetchData} = useGif("");

    return(
        <div className="w-1/2  bg-violet-200 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className=" mt-[15px] text-2xl underline uppercase font-bold">A Random Gif</h1>
            {
                loading ? (<Spinner />) : (<img src = {gif} width={450} alt="gif" />)
            }
            
            <button onClick={()=>fetchData("")} className="w-10/12 mb-[20px] bg-white text-lg py-2 rounded-lg border border-blue-400">
                Generate
            </button>
        </div>
    )

}
export default Random;