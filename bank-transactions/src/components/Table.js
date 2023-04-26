import React from "react"
import { useState, useEffect } from "react"




function TransTable(){

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
  
  
    // const [selectedTransactions, setSelectedTransactions] = useState("All");
 const [Transactions, setTransactions] = useState([]);
    useEffect(() =>
 {
   fetch("http://localhost:3003/transactions")
     .then((r) => r.json())
     .then((data) => setTransactions(data));
 }, [])
 const handleDelete = id => {
  const newData = data.filter(row => row.id !== id);
  setData(newData); 

// DELETE request to remove the transaction data from the JSON file
fetch(`http://localhost:3003/transactions/${id}`, {
method: 'DELETE',
headers: {
  'Content-Type': 'application/json'
}
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));
};

const filteredData = data.filter(row => row.description.toLowerCase().includes(searchTerm.toLowerCase()));
    return (<div className="Trans">
    <h1>Transactions</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>

          <th>Date</th>

          <th>Description</th>
          
          <th>Category</th>
          
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {Transactions.map((Transaction, index) => (
          <tr key={index}>
           <td>{Transaction.id}</td>
              
           <td>{Transaction.date}</td>
               
           <td>{Transaction.description}</td>
               
           <td>{Transaction.category}</td>
               
           <td>{Transaction.amount}</td>
           <td><button onClick={() => handleDelete(Transaction.id)}>Delete</button></td>
          </tr>
          
        ))}
      </tbody>
    </table>
   </div>
    )
        }
  export default TransTable;