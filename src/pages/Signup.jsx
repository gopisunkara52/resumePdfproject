import React, { useState } from 'react'
import{Box,Text,Input,Stack,Image,Button} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


const Signup =()=>{
    const navigate = useNavigate();
    const [signupdata,setSignupdata]= useState({
        username:"",
        mobilenumber:"",
        email:"",
        password:"",
        confirmpassword:""
    });
    const handleChange=(e)=>{
        setSignupdata({...signupdata, [e.target.name]:e.target.value})
    };

    console.log("signuppppppp",signupdata)

    const click =()=>{
        navigate("/")
    }
  return (
    <Box w="100%">
        <Box>
        <Text>Signup</Text>
        </Box>
    <Stack spacing={10} color="white" m="20px">
    <Input placeholder='username' size='md' name='username' type='text' onChange={handleChange} value={signupdata?.username} />
    <Input placeholder='mobile number' size='md' name='mobilenumber' color="black" type='number' onChange={handleChange} value={signupdata?.mobilenumber} />
    <Input placeholder='email' size='md'  name='email' type='email' color="black"  onChange={handleChange} value={signupdata?.email}/>
    <Input placeholder='password' size='md' name='password' type='password'   color="black"    onChange={handleChange} value={signupdata?.password}/>
    <Input placeholder='confirm password' size='md' name='confirmpassword'  color="black" type='password' onChange={handleChange} value={signupdata?.confirmpassword} />
    <Button colorScheme='teal' size='md' >Signup</Button>
    </Stack>
    <Box margin={"20px"}>
    <Text color={'blackAlpha.600'} mt="10px">You have a Account please </Text>
    <Text onClick={click} color={"blue.600"}>Signin</Text> 
    </Box>
     
    </Box>
    
  )
}
export default Signup