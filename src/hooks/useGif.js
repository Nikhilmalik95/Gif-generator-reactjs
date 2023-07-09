import axios from "axios";
import { useState , useEffect } from "react";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`



function useGif(tag){

    const [gif , setGif] = useState('');
    const [loading , setLoading] = useState('false')
    const[err , setErr] = useState(false);
    

    async function fetchData(tag){
        setLoading(true);
        try{
            const {data} =  await axios.get(tag==="" ? url : `${url}&tag=${tag}`);
            if(data === undefined){
             throw new Error("No gif found")
            }
             const imageSource = data.data.images.downsized_large.url
             setGif(imageSource)
             setLoading(false)
             setErr(false)
        }catch(error){
            setLoading(false)
            setErr(true);
            
        }
      
    }

    useEffect(()=>{
        fetchData()
    },[])

    return{err , gif , loading , fetchData};

}

export default useGif