import { HashLink as Link } from 'react-router-hash-link';
import './style.css';

export default function SecaoMenu() {
    return (
        <section className='container-menu-vestidos'>
            <nav className='links-menu-vestido'>
                <Link className='link-vestido' to="/vestidos#tipo-vestido1">Vestido</Link>
                <Link className='link-vestido' to="/vestidos#tipo-vestido2">Vestido</Link>
                <Link className='link-vestido' to="/vestidos#tipo-vestido3">Vestido</Link>
                <Link className='link-vestido' to="/vestidos#tipo-vestido4">Vestido</Link>
                <Link className='link-vestido' to="/vestidos#tipo-vestido5">Vestido</Link>
            </nav>
        </section>
    );

}