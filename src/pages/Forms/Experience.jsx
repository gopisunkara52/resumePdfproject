import React, { useState } from 'react';
import{Box,Text,Input,Button, Flex, Stack, Card, CardBody,Textarea} from '@chakra-ui/react';
import { useDispatch,useSelector } from "react-redux";
import { setExperiencedata } from '../../Slice';


const Experience =()=>{
  const dispatch = useDispatch();
    
    const [forms, setForms] = useState([]);
    const [experincedataArray,setExperincedataArray] = useState([
      {
        companyname:"",
        jobtitle:"",
        startdate:"",
        enddate:"",
        details:""

    }
  ]);


    // const handlechange =(e)=>{
    //     setExperincedata({...experincedata,[e.target.name]:e.target.value})
    // };
    // console.log(experincedata)


    const data =[
        {
         name:"companyname",
         type:"text",
         placeholder:"Company Name",
         text:"Company Name"
        },
        {
          
          name:"jobtitle",
          type:"textarea",
          placeholder:"Job Title",
          text:"Job Title"
        },
        { 
          name:"startdate",
          type:"date",
          placeholder:"Start Date ",
          text:"Start Date"
        },
        { 
          name:"enddate",
          type:"date",
          placeholder:"End Date",
          text:"End Date"
        },
        {
            name:"details",
            type:"text",
            placeholder:"Details",
            text:"Details"
          },

        ];

      

    const addForm = () => {
      setForms([...forms, { id: Date.now() }]);
      setExperincedataArray(prevDataArray => [...prevDataArray]);
    };
  
    const deleteForm = (formId) => {
      setForms(forms.filter((form) => form.id !== formId));
      setExperincedataArray(experincedataArray.filter((data, index) => index !== formId));
    };
   
    const saveFormData = () => {
      console.log(experincedataArray);
      dispatch(setExperiencedata(experincedataArray))
     
    };
   
    const handleChange = (e, formIndex) => {
      const { name, value } = e.target;
      const updatedExperincedataArray = [...experincedataArray];
      updatedExperincedataArray[formIndex] = {
        ...updatedExperincedataArray[formIndex],
        [name]: value
      };
      setExperincedataArray(updatedExperincedataArray);
    };
  

   
return(
    <Box>
   <Box>
        
        {forms.map((form,index) => (
            <Card m={"20px"}>
            <CardBody>
          <Box key={form.id} m="20px">
            <Box display={"flex"} justifyContent={"space-between"} bg="blue.600">
              <Box m="5px">
                <label htmlFor={`name${form.id}`}>Experince {index+1}</label>
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
                <Stack spacing={"10px"} key={item.name}>
                <Text color={'blue.600'} m="5px">{item.text}</Text>
                <Input
                //   key={item.name}
                  size="md"
                  type={item.type}
                  name={item.name}
                 placeholder={item.placeholder}
                 onChange={(e) => handleChange(e, index)}
                
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
}
export default Experience;