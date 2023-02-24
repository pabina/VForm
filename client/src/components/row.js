import React from 'react'
import { Link } from 'react-router-dom';

const row = (props) => {
   let row=props.row;
  return (
    <>
      
<tr>
<td>
        {props.index}
    </td>


   

    <td>
        {row.name}

    </td>

    <td>
    {row.email}         
    </td>



    <td>
    {row.phone}
              
    </td>

   

    <td>
    <a className='btn btn-danger btn-sm'  onClick={props.handleDelete} id={row._id} value={row._id}>Delete</a>
    </td>
</tr>
    </>
  )
}

export default row