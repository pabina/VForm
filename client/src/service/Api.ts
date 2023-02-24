import axios from 'axios';
import {  toast } from 'react-toastify';

const baseUrl= 'http://localhost:8006'

class CallApi{

    //for get all data

  async fetchData(url:any,data=null){
    
   let res=  await axios.get(baseUrl+url);
   console.log(res);
   let response=res.data;
   return response.data;
   

}

//for create or store
  async storeData(url:any,data:any){
   
   let res=  await axios.post(baseUrl+url,data);
  let response=await res.data;
  if (response.error) {
    toast(response.Message,{style:{background:'red',color:'#fff'},autoClose: 1000,
    closeOnClick: true,
  })
  toast(response.message,{style:{background:'red',color:'#fff'},autoClose: 1000,
  closeOnClick: true,
})
  }else{
    toast(response.Message,{style:{background:'green',color:'#fff'},autoClose: 1000,
    closeOnClick: true,
 })
  }
return response;
  }


  
  //for editing 
  async EditData(url:any){
   
  let res=  await axios.get(baseUrl+url);
   let response=res.data;
   return response.data;

}



//for updating single 

async updateData(url:any,data:any){

 
let res=  await axios.patch(baseUrl+url,data);
let response=await res.data;
if (response.error) {
toast(response.Message,{style:{background:'red',color:'#fff'},autoClose: 1000,
closeOnClick: true,
})
toast(response.message,{style:{background:'red',color:'#fff'},autoClose: 1000,
closeOnClick: true,
})
}else{
toast(response.Message,{style:{background:'green',color:'#fff'},autoClose: 1000,
closeOnClick: true,
})
}

return response;
}



//for deleting
async deleteData(url:any){
 
let res=  await axios.delete(baseUrl+url);
let response=await res.data;
console.log(response)
if (response.error) {
toast(response.Message,{style:{background:'red',color:'#fff'},autoClose: 1000,
closeOnClick: true,
})
toast(response.message,{style:{background:'red',color:'#fff'},autoClose: 1000,
closeOnClick: true,
})
}else{
toast(response.Message,{style:{background:'green',color:'#fff'},autoClose: 1000,
closeOnClick: true,
})
}

}



}

export default CallApi;