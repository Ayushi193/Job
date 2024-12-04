import axios from "axios";
const API_URL="http://localhost:8080"
  export const saveData=async(data)=>{
    try{
await axios.post(`${API_URL}/save`,data)
    }catch(error){
console.log("error while calling the api url",error.message)
    }
}
