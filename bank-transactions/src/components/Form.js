import React from "react"
import { useState, useEffect } from "react"


function Form(){
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3003/transactions')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => alert(error))
  }, []);
  


  const handleSubmit = e => {
    e.preventDefault();
    const newId = data.length + 1;
    const newTransaction = {
      id: newId,
      date: formData.date,
      description: formData.description,
      category: formData.category,
      amount: formData.amount
    };
    setData([...data, newTransaction]);
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: ''
    });
    // PUT request to update the JSON file with the new transaction data
fetch(`http://localhost:3003/transactions/${newId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newTransaction)
})
  .then(response => response.json())
  
  .catch(error => console.log(error));
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


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