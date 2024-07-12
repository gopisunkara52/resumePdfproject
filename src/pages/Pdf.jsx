import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  pdf,
} from "@react-pdf/renderer";
import { Box, Button, Flex } from "@chakra-ui/react";
import { useDispatch,useSelector } from "react-redux";
import { setPdfUrl } from "../Slice";
import { useNavigate } from "react-router-dom";


const styles = StyleSheet.create({
  page: {
    width: "210mm",
    height: "297mm",
    backgroundColor: "#FFFFFF",
  },
  body: {
    height: "297mm",
    width: "210mm",
  },
  font:{
       fontSize:"12px",
       
       },
 head:{
      fontSize:"15px",
       },
       
       head1:{
        fontSize:"15px",
        backgroundColor:"#F0F8FF",
        margin:"10px"
         }, 

       textare:{
        fontSize:"12px",
        margin:"8px"
       },

       textare2:{
        fontSize:"12px",
       marginLeft:"20px",
       marginTop:"5px"
        

       },
         
       box:{
        fontSize:"12px",
        margin:"10px"

       },

    personaldataview :{
                       marginTop:"20px",
                       alignItems:"center",
                       },
        underline:{
                   borderBottom:"1px",
                   borderColor:"black",
                   margin:"10px"
                  } ,  
                  
                  educationview :{
                    display:"flex" ,
                    flexDirection:"row",
                    justifyContent:"space-between",
                    margin:"15px",
                    fontSize:"12px"
                  },

                  mainView:{
                            margin:"30px"
                      
                            },
});

const Mydocument = (props) => {
 console.log(props?.education,"pppppppppppp")

 const educationDetails = props?.education;
 const experinceDetails = props?.experinceofuser;
 const objectiveDetails = props?.objectiveuser;
 const persnaldataDetails = props?.persnoladtatauser;
 const projectDetails = props?.projectuser;
 const referenceDetails = props?.referenceuser;
 const Skill = props?.DATAskill;
 const LanguageDATA = props?.LANGuages
 console.log(LanguageDATA,"2222222222222222")


  return (
    <Document>
      <Page size="A4" style={styles?.page}>
        <View style={styles?.mainView}>
        {/* {persnaldataDetails.map((item)=>( */}

          <View style={styles?.personaldataview}>
            <Text style={styles?.head}>{persnaldataDetails?.username}</Text>
            <Text style={styles?.font}>{persnaldataDetails?.email}</Text>
            <Text style={styles?.font}>{persnaldataDetails?.phoneno}</Text>
            <Text style={styles?.font}>{persnaldataDetails?.address}</Text>

          </View>
            {/* ))} */}

           
           {/* <View style={styles?.underline}></View> */}

            <View>
              <Text style={styles?.head1}>Objective </Text>
              <Text style={styles?.textare}>{objectiveDetails?.objectivecontent}</Text>

            </View>

            <View>
              <Text style={styles?.head1}>Experience </Text>         
              {experinceDetails.map((item,i)=>(
              <View style={styles?.box}>
              <Text style={styles?.textare}>{item?.companyname}</Text>
              <Text style={styles?.textare}>{item?.jobtitle}</Text>
              <Text style={styles?.textare}>{item?.startdate}</Text>
              <Text style={styles?.textare}>{item?.enddate}</Text>
              <Text style={styles?.textare}>{item?.details}</Text>
              </View>
              ))};

            </View>

            <View>
              <Text style={styles?.head1}>Education </Text>
              
              
              {educationDetails.map((item,i)=>(
              <View style={styles?.educationview}>
              <View>
              
               <Text>{item?.course}</Text>
               <Text>{item?.SchoolorUniversity}</Text>
               <Text>{item?.grad}%</Text>
              </View>
              <View>
                <Text>{item?.year}</Text>
                
              </View>
              </View>
              ))}


              


            </View>

            <View>
              <Text style={styles?.head1}>Skills </Text>
             {Skill.map((item,i)=>(
              <View>
              <Text style={styles?.textare}>{item?.skill}</Text>
              </View>
              ))}

            </View>

            <View>
              <Text style={styles?.head1}>Projects </Text>
              {projectDetails.map((item,i)=>(
              <View style={styles?.box}>
              {/* <Text style={styles?.textare}>Title:</Text> */}
              <Text style={styles?.textare}>Title:{item?.title}</Text>
              <Text style={styles?.textare}>Descrption :</Text>
              <Text style={styles?.textare}> {item?.description}</Text>
              </View>
              ))}
            </View>


            <View >
            <Text style={styles?.head1}>References </Text>
           {referenceDetails.map((item,i)=>(
            <View style={styles?.box}>
            <Text >{item?.referencename}</Text>
            <Text >{item?.jobtitle}</Text>
            <Text >{item?.companyname}</Text>
            <Text>{item?.email}</Text>
            <Text >{item?.phonenumber}</Text>
            </View>
            ))}

            </View>


            <View >
            <Text style={styles?.head1}>Languages </Text>
           {LanguageDATA.map((item,i)=>(
            <View>
            <Text style={styles?.textare2}>{item?.languagesknown}</Text>
            
            </View>
            ))}

            </View>
            


          
        </View>
      </Page>
    </Document>
  );
};








const Pdf = () => {

  const usereducationdata = useSelector((state)=>state?.auth?.educationdata);
  const userexperience = useSelector((state)=>state?.auth?.experiencedata);
  const userobjective = useSelector((state)=>state?.auth?.oBjectivedata);
  const userpersonal = useSelector((state)=>state?.auth?.PersonalData);
  const userproject = useSelector((state)=>state?.auth?.projectsData);
  const userreference = useSelector((state)=>state?.auth?.referenceData);
  const skillofuser = useSelector((state)=>state?.auth?.skillsData);
  const lang = useSelector((state)=>state?.auth?.languagesknowns)
  console.log(lang,"11111111111111")


const dispatch =useDispatch()


    const handleDownloadPDF = async () => {

        const doc = ( <Mydocument  education ={usereducationdata} experinceofuser ={userexperience} 
          objectiveuser={userobjective} persnoladtatauser={userpersonal}
          projectuser ={userproject} referenceuser={userreference} DATAskill={skillofuser}  LANGuages={lang} />)
    
        const pdfBlob = await pdf(doc).toBlob()
    
        const pdfUrl = URL.createObjectURL(pdfBlob)
    
        const a = document.createElement('a');
        a.href = pdfUrl;
    
        a.download = 'userResume.pdf';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(pdfUrl);
    
        dispatch(setPdfUrl(pdfUrl))
    
    }
    
    const navigate = useNavigate()
    const backtoHome =()=>{
      navigate("/welcome")
    }


    



  return (
    <Box w="100%" h="49rem" >
      <Flex gap={5} p="2">
      <Button onClick={handleDownloadPDF} colorScheme="blue">download</Button>
      <Button onClick={backtoHome} colorScheme="green">Back To Home</Button>
      </Flex>
      <PDFViewer showToolbar={false} width="100%" height="100%" >
        <Mydocument  education ={usereducationdata} experinceofuser ={userexperience} 
                     objectiveuser={userobjective} persnoladtatauser={userpersonal}
                     projectuser ={userproject} referenceuser={userreference}  DATAskill={skillofuser} LANGuages={lang} />
      </PDFViewer>
    </Box>
  );
};
export default Pdf;
