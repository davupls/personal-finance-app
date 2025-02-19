import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/budgets">Budgets</Link></li>
                <li><Link to="/pots">Pots</Link></li>
                <li><Link to="/recurrring">Reccurring Bills</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;