import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';



const Delete=()=>{

    const [val,setval]=useState([]);

    const loaddata=()=>{
        let api="http://localhost:3000/students";
        axios.get(api).then((res)=>{
           setval(res.data);
        })
    }

    useEffect(()=>{
        loaddata();
    })


    const recdel=(myid)=>{
      let api=`http://localhost:3000/students/${myid}`;
      axios.delete(api).then((res)=>{
         alert("data deleted")
      })
    }


    let ans =val.map((key)=>{
      return(
        <>
         <tr>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.fees}</td>
            <td>
                <a href="">
                    <button  onClick={()=>{recdel(key.id)}}>Delete</button>
                </a>
            </td>
         </tr>
        </>
      )
    })
    return(
        <>
          <h1>This is delete page</h1>

          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>

        </>
    )
}

export default Delete;