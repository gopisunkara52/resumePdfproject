import {
    Box,
    Button,
    Card,
    CardBody,
    Flex,
    Input,
    Stack,
    Text
  } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { setEducationdata } from "../../Slice";
  
  const Educationform = () => {
    const [forms, setForms] = useState([]);
    const [educationDataArray, setEducationDataArray] = useState([
      {
        course: "",
        SchoolorUniversity: "",
        grad: "",
        year: ""
      }
    ]);

    const dispatch = useDispatch();
    // const usereducationdata = useSelector((state)=>state?.auth?.educationdata);
    // console.log(usereducationdata,"reduxdata")
  
    // const addForm = () => {
    //   setForms([...forms, { id: Date.now() }]);
    //   setCount(count);
    //   setEducationDataArray([...educationDataArray, { course: "", SchoolorUniversity: "", grad: "", year: "" }]);
    // };

    const addForm = () => {
        setForms([...forms, { id: Date.now() }]);
      
        // Add a new empty object only if a new form is created
        setEducationDataArray(prevDataArray => [...prevDataArray]);
      };
  
    const deleteForm = (formId) => {
      setForms(forms.filter((form) => form.id !== formId));
      setEducationDataArray(educationDataArray.filter((data, index) => index !== formId));
    };
  
    const saveFormData = () => {
      console.log(educationDataArray);
      dispatch(setEducationdata(educationDataArray));
      // You can now do something with educationDataArray, for example, send it to the server.
    };
  
    const data = [
      {
        name: "course",
        type: "text",
        placeholder: "Course/Degree",
        text: "Course/Degree"
      },
      {
        name: "SchoolorUniversity",
        type: "textarea",
        placeholder: "School/University",
        text: "School/University"
      },
      {
        name: "grad",
        type: "number",
        placeholder: "Grad/score",
        text: "Grad/score"
      },
      {
        name: "year",
        type: "number",
        placeholder: "Year",
        text: "Year"
      },
    ];
  
    const handleChange = (e, formIndex) => {
      const { name, value } = e.target;
      const updatedEducationDataArray = [...educationDataArray];
      updatedEducationDataArray[formIndex] = {
        ...updatedEducationDataArray[formIndex],
        [name]: value
      };
      setEducationDataArray(updatedEducationDataArray);
    };
  
    return (
      <Box>
        <Box>
          {forms.map((form, index) => (
            <Card key={form.id} m="20px">
              <CardBody>
                <Box key={form.id} m="20px">
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    bg="blue.600"
                  >
                    <Box m="5px">
                      <label htmlFor={`name${form.id}`}>Education {index+1}</label>
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
                        <Text color={"blue.600"} m="5px">
                          {item.text}
                        </Text>
                        <Input
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
    );
  };
  
  export default Educationform;
  