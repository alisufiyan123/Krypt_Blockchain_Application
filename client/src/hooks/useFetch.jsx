import { useEffect, useState } from "react";

const APIKEY = import.meta.env.VITE_GIPHY_API;


/*
#API_LOGIC
here we made a function called useFetch and this function needs
a parameter named "keyword" at the bottom we have exported this function
from file called "Transactions" we are passing a const gifUrl = useFatch({keyword})
and at the bottom of that file we have a placeholder where we are entering 
this keyword which is stored in the gifurl variable which inturn is sent here
and then the useEffect at the bottom here takes the keyword and call the function useFetch
and thats how this API works...
*/
const useFetch = ({ keyword }) => {
    const [gifUrl, setGifUrl] = useState("");
  
    const fetchGifs = async () => {
      try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword.split(" ").join("")}&limit=1`);
        const { data } = await response.json();
  
        setGifUrl(data[0]?.images?.downsized_medium.url);
      } catch (error) {
        setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
      }
    };
    //we use this here because we want the refresh to 
    //happen whenever a user enters new keyword...
    //it means we want to call teh fetchGifs API to be called 
    //whenever a user enter a new keyword...
    //thats how all the API calling works...
    useEffect(() => {
        if (keyword) fetchGifs();
      }, [keyword]);
    
      return gifUrl;
    };
    
    export default useFetch;
