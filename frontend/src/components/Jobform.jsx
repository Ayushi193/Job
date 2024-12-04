import { useState } from 'react'

import Inputfield from "./Inputfield";
import { saveData } from '../Services/Api';
const defaultData={Title:"",Company:"", Description:"",Location:"",}
const Jobform=()=>{
    const [formData,setFormData]=useState(defaultData);

    const handleChange=(e)=>{

        const {name,value}=e.target;
        setFormData({...formData,[name]:value});

    }
    const handleSubmit= async(e)=>{
e.preventDefault();
await saveData(formData)
    }
    return(
        <div className="container" >
           
        <h2>Add a job form</h2>
        <form className="mt-4 mb-3" onSubmit={handleSubmit}>
        <Inputfield
        label=" Title"
        type="text"
        onChange={handleChange}
        value={formData.Title}
        id="Title" 
        name="Title"/>
        <Inputfield
         type="text"
         label="Company"
         onChange={handleChange}
         value={formData.Company}
         id="Company" 
         name="Company"
        />
        <Inputfield
         type="text"
         label="Description"
         onChange={handleChange}
        value={formData.Description}
        id="Description" 
        name="Description"
 />
        <Inputfield
         type="text"
         label="Location"
         onChange={handleChange}
        value={formData.Location}
        id="Location" 
        name="Location"
 />
 <button
 type="submit"
 className="btn btn-primary mt-2" 
 >Submit</button>
 </form>
        </div>
        
    )
}
export default Jobform;
