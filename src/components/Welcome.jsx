import React from "react";
import { Box,Button,Flex,Grid,GridItem,Text, } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { IoIosCreate } from "react-icons/io";

const Welcome =()=>{
    const navigate = useNavigate();
    const next =()=>{
        navigate("/home/personaldetailsform")
    }


    
    return(
        <Box >
            <Box>
            
            <Box width={"100%"}>
            <Box  display={"flex"} justifyContent={"center"} height={{base:"90px",md:"100px",lg:"120px"}} textAlign={"center"} bg={"#20B2AA"} >
            <Text color={"blue.800"} fontWeight={"bold"} bgColor={""}>CREATE CV(RESUME)</Text>
            </Box>
            </Box>
           
            <Flex justifyContent={"center"} gap={"100px"}>
            <Grid templateColumns='repeat(2, 1fr)' gap={6} margin={"50px"} >
                
                 <GridItem w='100%' h='30' cursor={"pointer"} > 
                 <Box display={"flex"} justifyContent={"center"} width={"200px"} bg={"blue"} onClick={next   }>
                 <Text color={"white"} ><IoIosCreate size={"50px"}  color="white"/> Create CV</Text>
                 </Box>
                 </GridItem>

                 <GridItem w='100%' h='30'  > 
                 <Box display={"flex"} justifyContent={"center"} width={"200px"} bg={"blue"}>
                 <Text  color={"white"} ><FiDownload size={"50px"}  color="white"/> Downloads</Text>
                 </Box>
                 </GridItem>
               
                 
                </Grid>
                </Flex>
           
           
            
        
        </Box>
        </Box>

         )
        };
       export default Welcome ;