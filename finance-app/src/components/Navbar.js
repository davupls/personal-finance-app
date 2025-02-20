import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/"><img src="/assets/images/icon-nav-overview.svg"/></Link></li>
                <li><Link to="/transactions"><img src="/assets/images/icon-nav-transactions.svg"/></Link></li>
                <li><Link to="/budgets"><img src="/assets/images/icon-nav-budgets.svg"/></Link></li>
                <li><Link to="/pots"><img src="/assets/images/icon-nav-pots.svg"/></Link></li>
                <li><Link to="/recurrring"><img src="/assets/images/icon-nav-recurring-bills.svg"/></Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;