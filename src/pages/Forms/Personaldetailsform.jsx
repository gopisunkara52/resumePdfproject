import React, { useState } from "react";
import{Box,Text,Input,Stack, Button, Flex} from '@chakra-ui/react';
import { useDispatch,useSelector } from "react-redux";
import { setPersonalData } from "../../Slice";
import { useNavigate } from "react-router-dom";


const Personaldetailsform =()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [personaldata, setPersonaldata]= useState({
        username:"",
        address:"",
        email:"",
        phoneno:""

    });

 const handlechange =(e)=>{
    setPersonaldata({...personaldata,[e.target.name]:e.target.value})
 };

 const savebutton =()=>{
    dispatch(setPersonalData(personaldata));
    console.log(personaldata);

 };

 
    return(
        <Box>
         <Text color={'blue.600'} as='b'>Personal Details</Text>
          
          <Stack spacing={3} margin={20}>
          <Text color={'blue.600'}>Your Full Name</Text>
           <Input placeholder=' Your Name' size='md'  type="text" name="username" onChange={handlechange}/>
           <Text color={'blue.600'}>Address</Text>
           <Input placeholder='Address'  type="textarea"   name="address"  onChange={handlechange} />
           <Text color={'blue.600'}>Email</Text>
           <Input placeholder='Email' size='md'  name="email" onChange={handlechange}/>
           <Text color={'blue.600'}>Phone Number</Text>
           <Input placeholder='Phone No' size='md' name="phoneno" onChange={handlechange}/>
          </Stack>
          <Flex justifyContent={'center'}>
           <Button colorScheme='teal' size='md' width={"200px"} onClick={savebutton}>
             Save
           </Button>
           </Flex>
        </Box>
    )
}
export default Personaldetailsform;