import React from "react"
import { useState, useEffect } from "react"

function Filter() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3003/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data))
      .catch(error => console.log(error))
  }, []);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search by description"
          value={searchTerm}
          onChange={handleSearch}
        />
      </form>
      
      
    </div>
  )
}

export default Filter;
