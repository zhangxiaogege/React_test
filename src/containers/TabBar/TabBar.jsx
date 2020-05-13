import React, { Component } from 'react';

class TabBar extends Component {
    render() {
        return (
            <div className='tabBar'>
                <NavLink activeClassName='demo' to='/home/message'>message</NavLink>
                <NavLink activeClassName='demo' to='/home/message'>message</NavLink>
                <NavLink activeClassName='demo' to='/home/message'>message</NavLink>
                <NavLink activeClassName='demo' to='/home/message'>message</NavLink>
                <NavLink activeClassName='demo' to='/home/message'>message</NavLink>
            </div>
        );
    }
}

export default TabBar;