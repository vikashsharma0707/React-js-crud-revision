import axios from "axios";
import { useEffect, useState } from "react";



const Search=()=>{

    const [rno,setrno]=useState("");
    const [val,setval] =useState([]);

    const hanldeseacrh=()=>{
        let api=`http://localhost:3000/students/?rollno=${rno}`;
        axios.get(api).then((res)=>{
            setval(res.data)
             console.log(res.data)

             if(res.data<0){
                return(
                    alert("data not found")
                )
             }
        })
    }

    useEffect(()=>{
       hanldeseacrh()
    },[])

    const ans= val.map((key)=>{
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
          <h1>This is search page</h1>
          <input type="text" value={rno} onChange={(e)=>{setrno(e.target.value)}}/>
          <button  onClick={hanldeseacrh}>Search</button>

          <table>
            <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
            </tr>
            {ans}
          </table>
        </>

        
    )
}

export default Search;