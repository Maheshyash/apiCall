import logo from './logo.svg';
import React, {useEffect,useState} from 'react';
import './App.css';
import api from './api/contacts';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
// const [contacts, setContacts] = useState('')
// const retriveContacts =async () => {
//   const repsonse = await api.get("/contacts");
//   return repsonse.data;
// }
// useEffect(() => {
//   const getAllContacts =async () => {
//       const allContacts = await retriveContacts()
//       if(allContacts){
//         setContacts(allContacts)
//       }
//   } 
//   getAllContacts();
// }, [])
function App() {
  // const contacts =[
  //   {
  //     id:'1',
  //     'name':'dipesh',
  //     'email':'mail@gmail.com'
  //   },
  //   {
  //     id:'2',
  //     'name':'mipesh',
  //     'email':'mil@gmail.com'
  //   }
  // ]
  const LOCALSTORAGEKEY = 'contacts'
  const [contacts, setContacts] = useState([])
  var a=[]
  const addContactHandler = (contact) =>{

    // localStorage.setItem(LOCALSTORAGEKEY,JSON.stringify(contacts))
    setContacts([...contacts,contact])
   
    
  }
  const deleteHandler = (id)=>{
    console.log(id,'id');

  }
  useEffect(() => {
    console.log('useEffect without array')
    const retriveContacts = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY))
    if(retriveContacts) setContacts(retriveContacts);
  }, [])
  
  useEffect(() => {
    console.log('useEffect with array')
    localStorage.setItem(LOCALSTORAGEKEY,JSON.stringify(contacts))
  }, [contacts])
  
  return (
    <div className="App">
      <Header/>
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default App;
