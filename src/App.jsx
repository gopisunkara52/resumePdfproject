import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { ChakraProvider } from '@chakra-ui/react';
import{BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Imagee from './components/Imagee';
import Layout from './components/Layout';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Layouthome from './pages/Layouthome';
import Personaldetailsform from './pages/Forms/Personaldetailsform';
import Educationform from './pages/Forms/Educationform';
import Experience from './pages/Forms/Experience';
import Skills from './pages/Forms/Skills';
import Objective from './pages/Forms/Objective';
import Reference from './pages/Forms/Reference';
import Projects from './pages/Forms/Projects';
import Pdf from './pages/Pdf';
import Laguages from './pages/Forms/Languages';
import Welcome from './components/Welcome';
import Newpage from './pages/Newpage';

function App() {
 

  return (
    
    <ChakraProvider>
    
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout/>}>
        <Route  path="/" element={<Login/>}/>
        <Route path="/singup" element={<Signup />}/>
        </Route>
        
         <Route path="/welcome" element={<Welcome/>}/>
         
         <Route path="/home" element={<Layouthome/>}>
         <Route  path="personaldetailsform" element={<Personaldetailsform/>}/>
         <Route  path="educationform" element={<Educationform/>}/>
         <Route  path="experience" element={<Experience/>}/>
         <Route  path="skills" element={<Skills/>}/>
         <Route  path="objective" element={<Objective/>}/>
         <Route  path="reference" element={<Reference/>}/>
         <Route  path="projects" element={<Projects/>}/>
         <Route  path="laguages" element={<Laguages/>}/>

        </Route>
 
        <Route  path="/pdf" element={<Pdf/>}/>
        <Route  path="/downloads" element={<Newpage/>}/>
        </Routes>
      </BrowserRouter>
     
      </ChakraProvider>
    
  )
}

export default App
