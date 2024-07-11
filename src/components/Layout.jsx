import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Imagee from "./Imagee";
const Layout = () => {
  return (
    <>
    <Box  display={"flex"} flexDirection={"row"}>
    
      <Box w="70%">
        <Image
          src="https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg"
          alt=""
          height={"100vh"}
        />
        {/* <Imagee/> */}
      </Box>
      <Box w="30%">
      <Outlet />
      </Box>
    </Box>
    </>
  );
};
export default Layout;
