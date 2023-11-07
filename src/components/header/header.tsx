import * as React from 'react';
import styles from './header.module.css';
import { Link } from "react-router-dom";

export interface HeaderProps {

}

export interface HeaderState {
    isSticky: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props);
        this.state = {
            isSticky: false,
        };
    }

    componentDidMount() {

        const stickyElm = document.querySelector('#navigation');

        const observer = new IntersectionObserver(
            // ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
            ([e]) => this.setState({ isSticky: !this.state.isSticky }),
            { threshold: [1] }
        );

        if (stickyElm) {
            observer.observe(stickyElm)
        }

    }

    render() {

        return (
            <>
                <header className={styles.mainHeader}>
                    <div className={styles.innerHeaderContainer}>
                        <div className={styles.overlay}>
                            <h1 className={styles.headerTitle}>Nacionalni parkovi Hrvatske</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui magnam consequatur ab.</p>
                        </div>
                    </div>
                </header>
                <nav id="navigation" className={`${styles.primaryNavigation} ${!this.state.isSticky ? "isSticky" : ""}` }>
                    <span className="logo">Np</span>
                    <ul>
                        <li><Link to={`/`}>Početna</Link></li>
                        <li><Link to={`/park/${0}`}>Nacionalni parkovi</Link>
                            <ul className="dropdown">
                                <li><Link to={`/park/${0}`}>NP Brijuni</Link></li>
                                <li><Link to={`/park/${1}`}>NP Krka</Link></li>
                                <li><Link to={`/park/${2}`}>NP Paklenica</Link></li>
                                <li><Link to={`/park/${3}`}>NP Plitvička jezera</Link></li>
                                <li><Link to={`/park/${4}`}>NP Kornati</Link></li>
                                <li><Link to={`/park/${5}`}>NP Mljet</Link></li>
                                <li><Link to={`/park/${6}`}>NP Risnjak</Link></li>
                                <li><Link to={`/park/${7}`}>NP Sjeverni Velebit</Link></li>
                            </ul>
                        </li>
                        <li><Link to={`/comments`}>Komentari</Link></li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Header;