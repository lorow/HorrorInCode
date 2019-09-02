import React from 'react';
import ContactPanel from '../../components/ContactPanel';

export default function ContactPanelContainer(props){

    const handleForm = e => {
        e.preventDefault();
        var data = new FormData(e.target);
        var jsonData = {};
        data.forEach((value, key) => {jsonData[key] = value});
        
        // for the sake of testing and actually doing something
        
    }

    return(
        <ContactPanel formHandler={handleForm} />
    )
}