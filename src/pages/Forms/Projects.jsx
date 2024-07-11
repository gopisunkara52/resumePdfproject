import React, { useState } from "react";
import{Box,Text,Input,Stack,Button, Textarea, Card, CardBody, Flex,} from '@chakra-ui/react';
import { useDispatch,useSelector } from "react-redux";
import { setProjectsData } from "../../Slice";


const Projects =()=>{
  const dispatch = useDispatch();

  const [forms, setForms] = useState([]);
  const [count,setCount]= useState(0)
  const [projectsdata,setProjectsdata] = useState([
    {
    title:"",
    description:""

  }
]);

  // const handleChange =(e)=>{
  //   setProjectsdata({...projectsdata,[e.target.name]:e.target.value})

  // };

  const addForm = () => {
    setForms([...forms, { id: Date.now() }]);
    setProjectsdata(prevedataArray =>[...prevedataArray])
    
  };

  const deleteForm = (formId) => {
    setForms(forms.filter((form) => form.id !== formId));
    setProjectsdata(projectsdata.filter((data , index)=> index !==formId))
  };

  const handleChange =(e,formIndex)=>{
    const {name,value}= e.target;
    const updatedProjectsdata =[...projectsdata];
    updatedProjectsdata[formIndex]={
      ...updatedProjectsdata[formIndex],[name]:value
    }
    setProjectsdata(updatedProjectsdata)

  };


  const saveFormData = () => {
    console.log(projectsdata);
    dispatch(setProjectsData(projectsdata))
  };


  

  const data = [
    {
      name: "title",
      type: "text",
      text:"Title"
    },
    // {
    //     name: "description",
    //     type: "textarea",
    //     text:"Description"
    //   },
      
  ];
    return(
       <Box>
         <Box>
        
        {forms.map((form,index) => (
            <Card m={"20px"}>
            <CardBody>
          <Box key={form.id} m="20px">
            <Box display={"flex"} justifyContent={"space-between"} bg="blue.600">
              <Box m="5px">
           <label htmlFor={`name${form.id}`}>Project </label>
              </Box>
              <Box m="5px">
                <Button
                  colorScheme="gray"
                  size="md"
                  onClick={() => deleteForm(form.id)}
                >
                  Delete 
                </Button>
              </Box>
            </Box>
            <Box>
              {data.map((item) => (
                <Stack spacing={"5px"}>
                <Text color={'blue.600'} m="5px">{item.text}</Text>
                <Input 
                //   key={item.name}
                  size="md"
                  type={item.type}
                  name={item.name}
                  onChange={(e)=>handleChange(e,index)}
                 
                />
                <Text color={'blue.600'}>Description</Text>
                <Textarea type={item.type}  name="description" height={"150px"} onChange={(e)=>handleChange(e,index)}/>
                </Stack>
              ))}
            </Box>
          </Box>
          </CardBody>
        </Card>
         
        ))}
        
      </Box>

      <Flex justifyContent={"center"} mt="20px">
        <Button colorScheme="blue" size="md" onClick={addForm} ml="10px">
          +Add
        </Button>
        <Button colorScheme="green" size="md" ml="10px" onClick={saveFormData}>
          Save
        </Button>
      </Flex>
       </Box>
 )
};
export default Projects;