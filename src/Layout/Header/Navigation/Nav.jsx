import css from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <ul className ={css.Nav}>
            <li><Link to="/">Posts</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><a href="###">About</a></li>
        </ul>
    );
}

export default Nav;