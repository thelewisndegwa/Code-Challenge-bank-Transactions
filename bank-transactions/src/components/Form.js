function TransTable(){
    // const [selectedTransactions, setSelectedTransactions] = useState("All");
 const [Transactions, setTransactions] = useState([]);
    useEffect(() =>
 {
   fetch("http://localhost:3002/transactions")
     .then((r) => r.json())
     .then((data) => setTransactions(data));
 }, [])
    return (<div className="Trans">
    <h1>Transactions</h1>
    <table>
      <thead>
        <tr>
        <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          {/* <br></br> */}
          <th>Category</th>
          {/* <br></br> */}
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {Transactions.map((Transaction, index) => (
          <tr key={index}>
           <td>{Transaction.id}</td>
               {/* <br></br>
               <br></br>
               <br></br> */}
           <td>{Transaction.date}</td>
                {/* <br></br>
                <br></br>
                <br></br> */}
           <td>{Transaction.description}</td>
               {/* <br></br>
               <br></br>
               <br></br> */}
           <td>{Transaction.category}</td>
               {/* <br></br>
               <br></br>
               <br></br> */}
           <td>{Transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
   </div>
    )
        }
  export default TransTable;