import React, { useState } from 'react'
import{Box,Text,Input,Stack, Button} from '@chakra-ui/react';
import { useDispatch,useSelector } from 'react-redux';
import { setJump } from '../Slice';
import { useNavigate } from 'react-router-dom';

const  Login =()=> {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userData = useSelector((state)=>state?.auth?.jump)

   

    console.log("userData",userData)
     const [data,setData]=useState({
        //  userName:"",
         email:"",
         password:""
     });

   
    
     const handleChange = (e)=> {
        setData({...data,[e.target.name]:e.target.value})
     }

  

       const logindta ={
           email:"gopisunkara52@gmail.com",
           password:"Gopi@123"
       }

    const handleSubmit  = () => {
        if(data.email==logindta.email&&data.password==logindta.password){
            dispatch(setJump(data))
            navigate("/welcome")
        }else{
            alert("wrong credentioals")
        }
        };

     console.log("dataaaa",data)
    
     const signup =()=>{
      navigate("/singup")
     }
     
    return(
        <Box w="100%" bg="gray.100">
            <Box bg="white" p="2" shadow={"lg"}>
            <Text>Login</Text>
            <Stack spacing={5} margin={"20px"}>
            {/* <Input placeholder='user name' size='md' name="userName" value={data?.userName} onChange={handleChange}/> */}
            <Input placeholder='email' size='md' name="email" value={data?.email}  onChange={handleChange}/>
            <Input placeholder='password' size='md' name="password" value={data?.password} onChange={handleChange}/>
            <Button onClick={handleSubmit} bg={'blue.500'}>Submit</Button>
            </Stack>
            <Box m="20px">
            <Text color={'blackAlpha.600'} mt="10px">You Don't have a Account please</Text>
            <Text  color={'blue.700'} onClick={signup}>Signup</Text>
            </Box>
            </Box>
        </Box>
       
    )
}




export default Login;
