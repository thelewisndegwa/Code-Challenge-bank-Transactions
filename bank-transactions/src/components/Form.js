import React from "react"
import { useState, useEffect } from "react"




function Form(){
    

    return (
        
     <form onSubmit={handleSubmit}>
         <label>
           Date:
           <input type="text" name="date" value={formData.date} onChange={handleChange} required />
         </label>
         <label>
           Description:
           <input type="text" name="description" value={formData.description} onChange={handleChange} required />
         </label>
         <label>
           Category:
           <input type="text" name="category" value={formData.category} onChange={handleChange} required />
         </label>
         <label>
           Amount:
           <input type="text" name="amount" value={formData.amount} onChange={handleChange} required />
         </label>
         <button type="submit">Add Transaction</button>
       </form>
     
    )
        }
  export default Form;