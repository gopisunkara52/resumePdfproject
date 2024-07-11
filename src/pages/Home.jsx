import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure,Text, Flex, Center } from '@chakra-ui/react';
import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';
// import { FaUser ,FaBookReader,FaUserTie,RiShieldStarFill,FaUserFriends} from "react-icons/fa";
// import{ImTarget,ImRocket} from "react-icons";
const Home =()=>{

    const navigate =useNavigate();
    // const { isOpen, onOpen, onClose } = useDisclosure()
    // const btnRef = useRef();

    const clickone =()=>{
        navigate("/")
    }
    
    return(
    <Box>
     <Box w="100%" bg="teal"height="100px" >
        <Flex justifyContent={'center'} >
          <Center>
           <Text color="white" as='b' fontSize='2xl'>Create your Resume </Text>
         </Center>
         </Flex>
           <Flex justifyContent={"right"} p={"1rem"}>
           <Text cursor={"pointer"} color={"white"} onClick={clickone}>LogOut</Text>
           </Flex>
    </Box>  
   
        </Box>

    )
}
export default Home