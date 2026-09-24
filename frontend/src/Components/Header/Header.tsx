import { Photos } from '../../../Photos.ts';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import Button from '../Button/Button.tsx';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={Photos.Icon.Buffer} alt="" />
                    <p className={styles.logoText}>Collosal.</p>
                </div>

                <nav className={styles.navigation}>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/work">How We Work</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>

                <Button text="Contact" />
            </div>
        </header>
    );
}
