import React, { useState } from 'react';
import {Box,Button,Flex,Text,Textarea} from '@chakra-ui/react';
import { useDispatch,useSelector } from "react-redux";
import { setOBjectivedata } from '../../Slice';


const Objective=()=> {

  const dispatch = useDispatch();

    const[objectivedata,setObjectivedata]= useState({
        objectivecontent:"",
    });
    const handlechange =(e)=>{
        setObjectivedata({...objectivedata,[e.target.name]:e.target.value})
    };

   const savebutton =()=>{
    console.log(objectivedata);
    dispatch(setOBjectivedata(objectivedata));
   };

    


  return (
    <Box>
        <Box m="10px">
            <Box bg={"blue.600"}>
                <Text color={"white"}  >Objective</Text>
            </Box>
            <Textarea name="objectivecontent" height="150px" mt="10px" onChange={handlechange} />
        </Box>
        <Flex justifyContent={"center"} mt={"20px"}>
        <Button colorScheme="teal" size="md" ml="10px" width={"200px"} onClick={savebutton}>
          Save
        </Button>
        </Flex>
    </Box>
  )
}
export default Objective;