import React, { useState } from "react";
import {Box, Text,Image, useDisclosure} from '@chakra-ui/react';
import Home from "./Home";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const Layouthome =()=>{
//   const [show,setShow]=useState(false);

// click

    return(
        <Box>
            <Box w="100%">
             <Home/>
            </Box>
            <Box display={'flex'} flexDirection={'row'}>
            <Box w="20%" >
            <Sidebar/>
            </Box>
             <Box w="80%" margin={"20px"}>
             <Outlet/>
            </Box>
            </Box>
        </Box>

    )
}
export default Layouthome