import React from "react"
import { useState, useEffect } from "react"




function Filter(){
    const [Transaction, setTransaction] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = e => {
        setSearchTerm(e.target.value);
      };
      const filteredTransaction = Transaction.filter(Transaction => Transaction.description.toLowerCase().includes(searchTerm.toLowerCase()));
 

    return (
       <>
      <form>
        <input type="text" placeholder="Search by description" value={searchTerm} onChange={handleSearch} />
      </form>
      
</>
    )
        }
  export default Filter;