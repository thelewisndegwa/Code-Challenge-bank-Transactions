import React, { useState, useEffect } from "react";

function Form() {
  const [data, setData] = useState([]);

  const [transaction, setTransaction] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  useEffect(() => {
    fetch('http://localhost:3003/transactions')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.log(error));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    // POST request to add a new transaction
    fetch('http://localhost:3003/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to add transaction');
        }
        return response.json();
      })
      .then(newTransaction => {
        setData([...data, newTransaction]);
        setTransaction({
          date: '',
          description: '',
          category: '',
          amount: ''
        });
      })
      .catch(error => console.log(error));
  };

  const handleChange = e => {
    setTransaction({
      ...transaction,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="text"
          name="date"
          value={transaction.date}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={transaction.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={transaction.category}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Amount:
        <input
          type="text"
          name="amount"
          value={transaction.amount}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default Form;
