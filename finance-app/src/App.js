import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Budgets from "./pages/Budets";
import Pots from "./pages/Pots";
import Recurring from "./pages/Recurring";
import "./assets/css/style.css"; // Import my CSS

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/Transactions" element = {<Transactions />} />
          <Route path="/budgets" element = {<Budgets />} />
          <Route path="/pots" element = {<Pots />} />
          <Route path ="/recurring" element = {<Recurring />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;