import React from "react";
import { Box, Flex, Text,Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
// import { FaUser ,FaBookReader,FaUserTie,RiShieldStarFill,FaUserFriends} from "react-icons/fa";
const Sidebar = () => {
  const options = [
    {
      id: 1,
      text: "Personal Details",
      path:"personaldetailsform"
    },
    {
      id: 2,
      text: "Education",
      path:"educationform"
    },
    {
      id: 3,
      text: "Experience",
      path:"experience"
    },
    {
      id: 4,
      text: "Skills",
      path:"skills"
    },
    {
      id: 5,
      text: "Objective",
      path:"objective"
    },
    {
      id: 6,
      text: "Reference",
      path:"reference"
    },
    {
      id: 7,
      text: "Projects",
      path:"projects"
    },
    {
      id: 8,
      text: "LanguagesKnow",
      path:"laguages"
    },
  ];

  const navigate = useNavigate();
const pdf =()=>{
  navigate("/pdf")
}
  
  const handleNavgate=(clickeditem)=>{
      navigate(`${clickeditem.path}`)
  };

  return (
    <Box bg="#20B2AA"  height="100rem" >
      <Box marginLeft={"20px"} >
        {options.map((item) => (
          <Text color={"white"} cursor={"pointer"} fontSize={{ base: "xs", md: "md", lg: "lg" }} onClick={()=>handleNavgate(item)}>
            {item.text}
          </Text>
        ))}
      </Box>
      <Flex justifyContent={"center"} mt="200px">
        <Button colorScheme="green" onClick={pdf} >View PDF</Button>
      </Flex>
    </Box>
  );
};
export default Sidebar;
