import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
import ErrorHandler from "./ErrorHandler";

function Tag() {
    const [tag, setTag] = useState('')

    function changeHandler(e) {
        setTag(e.target.value);
    }

    const { err ,gif, loading, fetchData } = useGif(tag);
    return (
        <div className="w-1/2  bg-violet-200 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className=" mt-[15px] text-2xl underline uppercase font-bold">Random {tag} Gif</h1>
            
            { err ? (loading ? (<Spinner />) : (<ErrorHandler />)) :(loading ? (<Spinner />) : (<img src={gif} width={450} alt="gif" />))}
            

            <input
                className="w-10/12 -mb-[10px] bg-white text-lg py-2 rounded-lg border border-blue-400 text-center"
                onChange={changeHandler}
                value={tag}
                placeholder="type somehting here 😉"
            />

            <button onClick={() => fetchData(tag)} className="w-10/12 mb-[20px] bg-white text-lg py-2 rounded-lg border border-blue-400">
                Generate
            </button>
        </div>
    )

}
export default Tag;