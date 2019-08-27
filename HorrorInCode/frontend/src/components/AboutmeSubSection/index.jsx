import React from 'react';

export default function AboutmeSubSection(props){

    return (
        <React.Fragment>
        <h1 className="about-titleText">
            <strong>
                {props.sectionTItle}
            </strong>
        </h1>

        <p className="about-description">
            {props.sectionDescription}
        </p>
        </React.Fragment>
    )
    
}