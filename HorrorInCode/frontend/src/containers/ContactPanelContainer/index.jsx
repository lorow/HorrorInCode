import React from 'react';
import ContactPanel from '../../components/ContactPanel';

export default function ContactPanelContainer(props){

    const handleForm = e => {
        e.preventDefault();
        var data = new FormData(e.target);
        var jsonData = {};
        data.forEach((value, key) => {jsonData[key] = value});
    }

    return(
        <ContactPanel formHandler={handleForm} />
    )
}