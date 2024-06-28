import React, { useState } from 'react';
import { Box, Text, Input, Button, Flex, Textarea } from '@chakra-ui/react';
import { useDispatch,useSelector } from "react-redux";
import { setLanguagesknowns,  } from '../../Slice';


const Laguages = () => {

  const dispatch = useDispatch();

  const [forms, setForms] = useState([]);
  const [languages,setLanguages] = useState([
    {
   
    languagesknown:"",
    }] );
    
    // const   handleChange =(e)=>{
    //     setSklilldata({...skilldata,[e.target.name]:e.target.value})
    // };
    // console.log(skilldata)

  const addForm = () => {
    setForms([...forms, { id: Date.now() }]);
    setLanguages(prevDataArray => [...prevDataArray]);
  };

  const deleteForm = (formId) => {
    setForms(forms.filter((form) => form.id !== formId));
    setLanguages(skilldata.filter((data, index) => index !== formId));
  };

  const handleChange = (e, formIndex) => {
    const { name, value } = e.target;
    const updatedLanguagesdata = [...languages];
    updatedLanguagesdata[formIndex] = {
      ...updatedLanguagesdata[formIndex],
      [name]: value
    };
    setLanguages(updatedLanguagesdata);
  };



  const saveFormData = () => {
    console.log(languages);
    dispatch(setLanguagesknowns(languages))
   
  };
 
  

  const data = [
    {
      name: "languagesknown",
      type: "input",
     
    },
  ];

  return (
    <Box>
      <Box>
        {forms.map((form,index) => (
          <Box key={form.id} >
            <Box display={"flex"} justifyContent={"space-between"} bg="blue.600">
              <Box m="5px">
                <label htmlFor={`name${form.id}`}> Language{index+1}</label>
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
                <Input
                  key={item.name}
                  size="md"
                  type={item.type}
                  name={item.name}
                  onChange={(e)=>handleChange(e,index)}
                />
              ))}
            </Box>
          </Box>
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
  );
};

export default Laguages;
