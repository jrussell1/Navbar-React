import React from 'react';

import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (<nav className={drawerClasses}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/aboutme">Resume</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="https://www.linkedin.com/in/jordanrussell-1/">LinkedIn</a></li>
            <li><a href="https://github.com/jrussell1">Github</a></li>
            <li><a href="/">Code Pen</a></li>
        </ul>
    </nav>
    );
};

export default sideDrawer;