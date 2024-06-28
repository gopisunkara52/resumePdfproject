import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure,Text, Flex, Center } from '@chakra-ui/react';
import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
// import { FaUser ,FaBookReader,FaUserTie,RiShieldStarFill,FaUserFriends} from "react-icons/fa";
// import{ImTarget,ImRocket} from "react-icons";
const Home =()=>{

    const navigate =useNavigate();
    // const { isOpen, onOpen, onClose } = useDisclosure()
    // const btnRef = useRef();

    // const clickone =()=>{
    //     navigate("/personaldetailsform")
    // }
    
    return(
    <Box>
     <Box w="100%" bg="teal"height="100px" >
        <Flex justifyContent={'center'} >
          <Center>
           <Text color="white" as='b' fontSize='2xl'>Create your Resume</Text>
         </Center>
         </Flex>
        {/* <Button ref={btnRef} colorScheme='red' onClick={onOpen}>
        Open
      </Button> */}
    </Box>  
    {/* <Box >
    
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        
      > */}
       
        {/* <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Enter The Data</DrawerHeader>

          <DrawerBody> */}
          
            {/* <p><FaUser/></p> */}
            {/* <h3><FaBookReader/></h3> */}
            {/* <p><FaUserTie/></p>
            <p><RiShieldStarFill/></p> */}
            {/* <p><ImTarget/></p> */}
            {/* <p><FaUserFriends/></p> */}
            {/* <p><ImRocket/></p> */}
            
            
         {/* <Box>
         <p onClick={clickone}>Personal Details</p>
            <p>Education</p>
            <p>Experience</p>
            <p>Skills</p>
            <p>Objective</p>
            <p>Reference</p>
            <p>projects</p>
            <p></p>
         </Box> */}
        
            
           
          {/* </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </Box> */}
       
     
        </Box>

    )
}
export default Home