import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';



const Display=()=>{

    const [val,setval] =useState([]);

    const loaddata=()=>{
      let api="http://localhost:3000/students";
      axios.get(api).then((res)=>{
        setval(res.data)
        console.log(res.data)
      })
    }

    useEffect(()=>{
        loaddata()
    },[])


    const ans =val.map((key)=>{
        return(
            <>
              <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
              </tr>
            </>
        )
    })


    return(
        <>
          <h1>This is display page</h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Rollno</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        
      </tbody>
    </Table>
        </>
    )
}

export default Display;