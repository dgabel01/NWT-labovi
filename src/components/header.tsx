import React from 'react';

import './header.css';

interface HeaderProps{}

interface HeaderState{}


class Header extends React.Component<HeaderProps, HeaderState> {
    //constructor(){}

    render(){
        return(
        <div className='header'>
            <div className='logo'><p>Np</p></div>
            <div className='navbar'>
                <div className='nav-home'><p>Početna</p></div>
                <div className='nav-divider'></div>
                <div className='nav-dropdown'>
                    <p className='nav-dropdown-button'>Nacionalni parkovi</p>
                    <div className='nav-dropdown-content'>
                        <p>NP Brijuni</p>
                        <p>NP Krka</p>
                        <p>NP Paklenica</p>
                        <p>NP Plitivička jezera</p>
                        <p>NP Kornati</p>
                        <p>NP Mljet</p>
                        <p>NP Risnjak</p>
                        <p>NP Sjeverni Velebit</p>
                    </div>
                </div>
                <div className='nav-divider'></div>
                <div className='nav-comments'><p>Komentari</p></div>
            </div>
        </div>
        )

        };
    }

export default Header;