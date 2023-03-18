import React from 'react'
import style from './Nav.module.css'
import SearchBar from "../SearchBarr/SearchBar"
import { Link } from 'react-router-dom';


class Nav extends React.Component{
    constructor(props){ // searbar recive sus props
    super(props)
}

    render(){
        return(
            <div className={style.Nav} >
            <Link to='/'>LOGOUT</Link>
            <Link to='/about'>About</Link>
            <Link to='/Home'>Home</Link>
            <SearchBar onSearch={this.props.onSearch} />
            </div>
        );
    }
}


export default Nav