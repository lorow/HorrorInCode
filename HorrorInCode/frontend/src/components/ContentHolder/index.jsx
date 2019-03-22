import React from 'react';

function ContentHolder(props){

    return(
        // main container
        <React.Fragment>
        <div className="uk-container uk-container-expand">
        {/* scroller */}
        <div class="uk-position-center-right uk-position-medium uk-position-fixed uk-margin-xlarge-right">
            <ul class="uk-dotnav uk-dotnav-vertical">
                <li class="uk-active"><a href="#landingPage" style={{backgroundColor:'white', width:'10px', height:'10px'}}>Item 1</a></li>
                <li><a href="#landingPage" style={{borderColor:'white', width:'10px', height:'10px'}}>Item 2</a></li>
                <li><a href="#landingPage" style={{borderColor:'white', width:'10px', height:'10px'}}>Item 3</a></li>
                <li><a href="#landingPage" style={{borderColor:'white', width:'10px', height:'10px'}}>Item 4</a></li>
                <li><a href="#landingPage" style={{borderColor:'white', width:'10px', height:'10px'}}>Item 5</a></li>
            </ul>
        </div>
        {/* /scroller */}

        {/* first panel */ }
            <div id="landingPage" className="uk-section uk-margin-top">
                <div className="uk-container">
                    <p className="uk-button uk-disabled" style={{color:'#919191', fontSize:'71px'}}>
                        01
                    </p>
                    <div className="uk-button uk-button-large uk-align-right" style={{
                        boxShadow:'-12px 12px 0px -5px rgba(0,0,143,0.6)',
                        MozBoxShadow:'-12px 12px 0px -5px rgba(0,0,143,0.6)',
                        WebkitBoxShadow:'-12px 12px 0px -5px rgba(0,0,143,0.6)',
                        backgroundColor:'#0007CF',
                        color:'white',
                        padding:' 0 12px'
                    }}>
                        Source on Github
                    </div>
                </div>

                <div className="uk-container uk-container-small">
                    <h1 className="uk-margin-medium-top uk-margin-left" style={{color:'white'}}>
                        Hi there!
                    </h1>
                    <h3 className="uk-margin-medium-left uk-margin-remove-top uk-width-2-3" style={{color:'#BFBFBF'}}>
                        I am Zdzisław, a creative developer form Poland,
                        And this is HorrorInCode, a place where I combine 
                        the horrors of code I encounter as well as present myself.
                    </h3>

                    <div className="uk-margin-large-top uk-margin-large-left">
                        <a href="#blog" className="uk-button" style={{
                            background:'linear-gradient(to right, #0008FF, #050AB2)',
                            color:'white',
                            padding:'2px 50px'
                        }}>Blog</a>
                        <a href="#contact" className="uk-button uk-margin-left" style={{
                            border:'2px solid #0008FF',
                            color:'white',
                        }}>Contact</a>
                    </div>
                </div>

            </div>
        {/* /first panel */}
        </div>
        </React.Fragment>
    );
}

export default ContentHolder; 