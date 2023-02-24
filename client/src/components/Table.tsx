import React from 'react';
import Row from './row';



const Table = (props:any) => {
let i=0;
// console.log(props.data);

    return (
        <>


        <div className='table-responsive'>
            <table className='table table-striped table-bordered border text-center table-hover' >
                <thead>
                    <tr>
                        <th>
                            #S.N
                        </th>

                        <th>
                           name
                        </th>

                        <th>
                           email
                        </th>


                        <th>
                           phone
                        </th>


                    
                       
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        props.data && props.data.map((row :any) => {
                            i++
                            return <Row row={row} handleDelete={props.handleDelete} key={Math.random()} index={i} />
                        })
                    }
                </tbody>
            </table>
            </div>
        </>
    )
}

export default Table