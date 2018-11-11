import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import './Toolbar.css';

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_naviation-items-left">
                <ul>
                    <li><a href="https://www.linkedin.com/in/jordanrussell-1/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin fa-2x " aria-hidden="true" /></a></li>
                    <li><a href="https://github.com/jrussell1" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square fa-2x" aria-hidden="true" /></a></li>
                    <li><a href="https://codepen.io/jordanrussell1/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-codepen fa-2x" aria-hidden="true" /></a></li>
                </ul>
            </div>

            {/*<div className="spacer" />
            
            <div className="toolbar__logo"><a href="/">Jordan Russell</a></div>*/}
            
            <div className="spacer" />
            
            <div className="toolbar_naviation-items-right">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/aboutme">Resume</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;


