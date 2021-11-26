import React from 'react'

const ContactCard = (props) =>{
    
    const deletionHandler = (e)=>{
        props.deleteHandler(e.target.id);
    }
    console.log(props)
    const {contact} = props
    return(
        <div className='item'>
            <div className='p-2 content d-flex justify-content-between'>
                <div className=''>
                    {contact.name}
                </div>
                <div>{contact.email}</div>
                <i className='btn btn-danger' onClick={deletionHandler} id={contact.id}>delete</i>
            </div>
        </div>
    )
}

export default ContactCard