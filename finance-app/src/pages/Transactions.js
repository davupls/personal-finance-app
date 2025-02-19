import React, { useState, useEffect } from "react";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("/assets/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data.transactions);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <h1>Transactions</h1>
      <div className="transaction-container">
        {transactions.map((transaction, index) => (
          <div className="transaction-item" key={index}>
            <img src={transaction.avatar} alt={transaction.name} />
            <div className="transaction-details">
              <p className="transaction-name">{transaction.name}</p>
              <p className="transaction-date">{new Date(transaction.date).toLocaleDateString()}</p>
              <p className="transaction-category">{transaction.category}</p>
            </div>
            <div className="transaction-amount">{transaction.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
 
}

export default Transactions;