import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Insert=()=>{

    const [input,setinput]=useState({});

    const handleinput=(e)=>{
      let name =e.target.name;
      let value =e.target.value;
       setinput(values=>({...values,[name]:value}))
    
    }

    const handlesubmit=(e)=>{
        
        let api="http://localhost:3000/students";
        axios.post(api,input).then((res)=>{
            alert("data save sucessfully")
        }).catch((err)=>{
             console.log("error",err)
        })
    }



    
    return(
        <>
          <h1>This is insert page</h1>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter rollno</Form.Label>
        <Form.Control type="text" placeholder="Enter rollno"  name="rollno" value={input.rollno}  onChange={handleinput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" value={input.name}  onChange={handleinput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" placeholder="Enter City" name="city" value={input.city}  onChange={handleinput}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Fees</Form.Label>
        <Form.Control type="text" placeholder="Enter Fees" name="fees" value={input.fees}  onChange={handleinput}/>
      </Form.Group>

      
      <Button variant="primary" type="submit"  onClick={handlesubmit}>
        Submit
      </Button>
    </Form>


        </>
    )
}

export default Insert;