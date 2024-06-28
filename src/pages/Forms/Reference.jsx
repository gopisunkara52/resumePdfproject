import React, { useState } from "react";
import{Box,Text,Input,Stack,Button, Flex, CardBody, Card,} from '@chakra-ui/react';
import { useDispatch,useSelector } from "react-redux";
import { setReferenceData } from "../../Slice";


const Reference =()=>{

  const dispatch = useDispatch();
  const [forms, setForms] = useState([]);
  const[referencedata, setReferencedata] = useState([
    {
    referencename:"",
    jobtitle:"",
    companyname:"",
    email:"",
    phonenumber:""

   }
  ]);

   


  const addForm = () => {
    setForms([...forms, { id: Date.now() }]);
    setReferencedata(prevdataArray => [...prevdataArray])
  };

  const deleteForm = (formId) => {
    setForms(forms.filter((form) => form.id !== formId));
    setReferencedata(referencedata.filter((data,index)=> index !== formId))
  };

  const handleChange = (e, formIndex) => {
    const { name, value } = e.target;
    const updatedReferencedata = [...referencedata];
    updatedReferencedata[formIndex] = {
      ...updatedReferencedata[formIndex],
      [name]: value
    };
    setReferencedata(updatedReferencedata);
  };

  const saveFormData = () => {
    console.log(referencedata);
    dispatch(setReferenceData(referencedata))
  };



 


  const data = [
    {
      name: "referencename",
      type: "text",
      text:"Reference Name"
    },
    {
        name: "jobtitle",
        type: "text",
        text:"Job Title"
      },
      {
        name: "companyname",
        type: "text",
        text:"Company Name"
      },
      {
        name: "email",
        type: "email",
        text:"Email"
      },
      {
        name: "phonenumber",
        type: "number",
        text:"Phone No"
      },
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
                <label htmlFor={`name${form.id}`}>Reference {index+1}</label>
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
                <Stack spacing={"5px"}  key={item.name}>
                <Text color={'blue.600'} m="5px">{item.text}</Text>
                <Input
                //   key={item.name}
                  size="md"
                  type={item.type}
                  name={item.name}
                  onChange={(e)=>handleChange(e,index)}
                 
                />
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
export default Reference;