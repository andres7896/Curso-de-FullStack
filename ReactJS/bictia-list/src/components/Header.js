import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <header>
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand">
                        BICTIA - Lista de Mercado
                    </span>
                </nav>
            </header>
        )
    }
}

export default Header;