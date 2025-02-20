import React, { useState, useEffect } from "react";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;

  useEffect(() => {
    fetch("/assets/data/data.json")
      .then((response) => response.json())
      .then((data) => setTransactions(data.transactions))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  // Calculate transactions for the current page
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1 className="text-preset-1">Transactions</h1>
      <div className="transaction-container">
        {currentTransactions.map((transaction, index) => (
          <div className="transaction-item" key={index}>
            <img className="transaction-image" src={transaction.avatar} alt={transaction.name} />
            <p className="transaction-name text-preset-4">{transaction.name}</p>
            <p className="transaction-date text-preset-5">{new Date(transaction.date).toLocaleDateString()}</p>
            <p className="transaction-category text-preset-5">{transaction.category}</p>
            <p className="transaction-amount text-preset-4">{transaction.amount}</p>
            <hr className="hr" />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(transactions.length / transactionsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Transactions;