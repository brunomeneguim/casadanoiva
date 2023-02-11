import { HashLink as Link } from 'react-router-hash-link';
import './style.css';

export default function SecaoMenu() {
    return (
        <section className='container-menu-vestidos'>
            <nav className='links-menu-vestido'>
                <Link className='link-vestido' to="/vestidos#primeiro-vestido">Vestido1</Link>
                <Link className='link-vestido' to="/vestidos#segundo-vestido">Vestido2</Link>
                <Link className='link-vestido' to="/vestidos#terceiro-vestido">Vestido3</Link>
                <Link className='link-vestido' to="/vestidos#quarto-vestido">Vestido4</Link>
                <Link className='link-vestido' to="/vestidos#quinto-vestido">Vestido5</Link>
            </nav>
        </section>
    );

}