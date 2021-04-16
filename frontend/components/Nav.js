import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/products">Take a Pet</Link>
    <Link href="/sell">Give a Pet</Link>
    <Link href="/orders">Orders</Link>
    <Link href="/account">Account</Link>
    <Link href="/cart">Cart</Link>
  </NavStyles>
);

export default Nav;
