import React from 'react';

function Navbar(props){
    return(
        <header data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top" className="uk-sticky default_navbar" style={{backgroundColor:'white'}}>
            <div className="uk-container uk-container-large">
                <nav data-uk-navbar="mode: click;" className="uk-navbar">
    
                    <div className="uk-navbar-left">
                        <h1 className="uk-margin-remove uk-navbar-item uk-logo" style={{fontSize:'32px', fontWeight:'500', color:'black'}}>HorrorInCode</h1>
                    </div>                    

                    <div className="uk-navbar-right">
                        <a href="#" className="uk-button uk-button-large active_menu_button uk-padding-remove uk-margin-right uk-margin-left" style={{fontSize:'18px'}}>HOME</a>
                        <span style={{fontSize:'30px', color:'#0008FF'}}>&bull;</span>
                        <a href="#" className="uk-button uk-button-large nonactive_menu_button uk-padding-remove uk-margin-right uk-margin-left" style={{fontSize:'18px'}}>POPULAR</a>
                        <span style={{fontSize:'30px', color:'#0008FF'}}>&bull;</span>
                        <a href="#" className="uk-button uk-button-large nonactive_menu_button uk-padding-remove uk-margin-right uk-margin-left" style={{fontSize:'18px'}}>RECENT</a>
                    </div>                    
                </nav>
            </div>
        </header>
    );
}

export default Navbar;