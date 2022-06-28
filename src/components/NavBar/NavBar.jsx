import { Link } from 'react-router-dom';

export default function NavBar(props) {
    return (
        <nav>
        <Link to="/orders">Order History</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new">New Order</Link>
        <br />
        Hello   { props.user.name}
        </nav>
    );
  }
  