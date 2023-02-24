import React,{useState,useEffect} from 'react'
import CallApi from '../service/Api';
import Table from './Table';



const ContactTable = () => {
  const [contactData, setContactDatat] = useState([]);
  const [isDelete, setisDelete] = useState(0);

  let Api = new CallApi();

// Delete 
  const handleDelete=(e:any)=>{
    let id=e.target.getAttribute('value');
    Api.deleteData(`/contact/${id}`)
    setisDelete(1);

  }
  




 useEffect(() => {
  fetchData();
 }, [isDelete]);


 let fetchData=async()=>{
  let data= await Api.fetchData('/contact');
  setisDelete(0);
  setContactDatat(data);

 }

  return (
    <>
  
 
   <div className="row mt-3">
    <div className="col-md-12">
      <div className="card">
        <div className="card-body">
  
   {contactData &&<Table data={contactData} handleDelete={handleDelete}/>}
        </div>
      </div>
    </div>
   </div>
   </>

  )
}

export default ContactTable;