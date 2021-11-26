import react from 'react'
import ContactCard from './ContactCard'

const ContactList = (props) =>{
    console.log(props,'contactlist')
    const deleteHandler = (id) =>{
        props.deleteHandler(id)
    }
    const renderContactList = props.contacts.map(contact=>{
        return <ContactCard contact ={contact} deleteHandler =  {deleteHandler}></ContactCard>
    })

    return(
        
        <div className='ui celled list'>
        <h2>contacts</h2>{renderContactList}</div>
    )
}
export default ContactList