import axios from "axios";
import { useState } from "react";
import Table from 'react-bootstrap/Table';
import { useEffect } from "react";



const Edit=()=>{

    const [val,setval] =useState([]);
    const [editdata,setedit] =useState({});

    const loaddata=()=>{
        let api="http://localhost:3000/students";
        axios.get(api).then((res)=>{
            setval(res.data)
        })
    }


    useEffect(()=>{
       loaddata();
    },[])

   

    let ans = val.map((key)=>{
        return(
            <>
              <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
                <td>
                    <a href="">
                        <button onClick={()=>{myedt(key.id)}}>Editt</button>
                    </a>
                </td>
              </tr>
            </>
        )
    })

    const myedt=(myid)=>{
        const api=`http://localhost:3000/students/${myid}`;
        axios.get(api).then((res)=>{
           setedit(res.data);
           
        })
      }

    const handleinput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setedit(values=>({...values,[name]:value}))
    }

    const handlesubmit=(e)=>{
      let api=`http://localhost:3000/students/${editdata.id}`
      axios.put(api,editdata).then((res)=>{
          alert("data sucessfully updated")
          loaddata()
      })
    } 

    return(
        <>
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
      
      <input type="text" name="rollno"  value={editdata.rollno}  onChange={handleinput}/><br/><br/>
      <input type="text" name="name"  value={editdata.name}  onChange={handleinput}/><br/><br/>
      <input type="text" name="city"  value={editdata.city}  onChange={handleinput}/><br/><br/>
      <input type="text" name="fees"  value={editdata.fees}  onChange={handleinput}/><br/><br/>
      <button  onClick={handlesubmit}>Submit</button>

        </>
    )
}

export default Edit;