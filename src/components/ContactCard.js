import React from 'react'

const ContactCard = (props) =>{
    console.log(props)
    const {contact} = props
    return(
        <div className='item'>
            <div className='p-2 content d-flex justify-content-between'>
                <div className=''>
                    {contact.name}
                </div>
                <div>{contact.email}</div>
                <i className='btn btn-danger'>delete</i>
            </div>
        </div>
    )
}

export default ContactCard