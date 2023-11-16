import { baseULR,API_KEY } from "./constants"

 export const action=`${baseULR}/discover/movie?api_key=${API_KEY}&with_genres=28`
 export const originals=baseULR+'/movie/top_rated?api_key='+API_KEY
  export const romantic=`${baseULR}/discover/movie?api_key=${API_KEY}&with_genres=10749`
  export const sci=`${baseULR}/discover/movie?api_key=${API_KEY}&with_genres=53`
