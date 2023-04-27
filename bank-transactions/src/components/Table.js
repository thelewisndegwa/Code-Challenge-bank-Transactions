import React, { useState, useEffect } from "react";

function TransTable() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch data from the API endpoint when the component mounts
    fetch("https://my-json-server.typicode.com/thelewisndegwa/Code-Challenge-bank-Transactions/transactions")
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => alert(error))
  }, []);

  const handleDelete = id => {
    // Filter out the deleted transaction from the current data array
    const newData = data.filter(transaction => transaction.id !== id);
    setData(newData);

    // Send a DELETE request to the API to remove the transaction
    fetch(`https://my-json-server.typicode.com/thelewisndegwa/Code-Challenge-bank-Transactions/transactions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  const filteredData = data.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Trans">
      <h1>Transactions</h1>
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <table id="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                <button onClick={() => handleDelete(transaction.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransTable;
