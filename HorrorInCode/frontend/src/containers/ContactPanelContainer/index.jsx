import React from 'react';
import ContactPanel from '../../components/ContactPanel';

export default function ContactPanelContainer(props){

    const handleForm = e => {
        e.preventDefault();
        var data = new FormData(e.target);
        var jsonData = {};
        data.forEach((value, key) => {jsonData[key] = value});
        // make an api call here, something like /api/email/
    }

    return(
        <ContactPanel formHandler={handleForm} />
    )
}