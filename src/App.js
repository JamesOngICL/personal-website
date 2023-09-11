import './App.css';

import React from 'react';
import logo from './logo.svg';
import websitepic from './self-picture.JPG'
import unityrover from './unity-rover.mp4'
import mktvid from './marketingvid.mp4'
import eploss from './adamepvsloss.png'
import NarrowGrid from './narrowGrid';
import thumbnailrover from './thumbnailrover.jpg';
import occonn from './occonnectsample.jpg';

import { If, Then, Else } from 'react-if';


function App() {
  var width = window.innerWidth;

  return (
    <div className="App">
      <ul style={{listStyleType: "none",display:"block",margin:"0",padding:"0",position:'fixed', top: "0",border: "1px solid #e7e7e7",backgroundColor:"navy"}}>
        <li style={{float: "left"}}><a href="#wrapper" className='anchorval'>Home</a></li>
        <li style={{float: "left"}}><a href="#projects" className='anchorval'>Projects</a></li>
        <li style={{float: "left"}}><a href="https://drive.google.com/file/d/1Ij9XY63oYwwRZqQRiMkbUiPEFAa5PehJ/view?usp=sharing" className='anchorval' target='_blank'>Resume</a></li>
      </ul>
      <hr className="invisible-line" />

    <div id="wrapper">
    <If condition ={width<800}>
      <Then>
        <NarrowGrid></NarrowGrid>
      </Then>

      <Else>
      <div className="container" id="home">

        <div className="left-grid">
          <img src={websitepic} style={{height:"300vm", width:"250vm"}} className="App-logo" alt="logo" /> 

        </div>
        {/*This is where the right grid of the website is actually laid out */}
        <Gridsection></Gridsection>
        </div>


      </Else>
    </If> 
    </div>
    <div style={{backgroundColor:
      'navy', textAlign:'centre'}}>

        <h2 id="projects" style={{color:"white"}}>
              Featured Projects
        </h2>
    </div>

    <NewProjectGrid></NewProjectGrid>
    <NewEmbeddedProject></NewEmbeddedProject>
    <NewMLProject></NewMLProject>


    </div>
  );
}

function Gridsection(){
  var gradcourse = "Electrical Computer Engineering"
  var graduni = "Cornell University"

  return (
    <div className="right-grid">
    <h1 style={{color: "white", textAlign:'left'}}>James Ong</h1>

  <section style={{color: "white", fontSize:15, justifyContent:'left', textAlign: 'left' }}>
  Hey, I'm James! 🚀 An Electronic and Information Engineering graduate from Imperial College London, currently pursuing a masters degree in {gradcourse} at {graduni}. With 3+ years of coding experience, I've honed my skills in C++, Python, and SQL having completed many embedded systems and robotics projects. 
  I'm adept in PyTorch, Pandas, and Matplotlib for ML and data-science and  used HTML, JavaScript, and React for web-development (this website is programmed with react). Eager to innovate, my career aspirations spans Artificial Intelligence, IOT, Software and Financial Engineering among others.🖥️🌐
  Discover more about my journey on my GitHub & LinkedIn profiles! Please don't hesitate to connect or drop me an email (found in my resume) for any questions, inquiries, or general advice. 🌟📧🔗


    </section >
    <section style={{display: 'flex',justifyContent: 'flex-start'}}>
        <a href="https://github.com/JamesOngICL" target='_blank' className='myButton' >
            Github
          </a>
          <a href='https://www.linkedin.com/in/jamesongicl' target='_blank' className='myButton'>
            Linkedin
          </a>
  </section>
  </div>

  );

}

function NewProjectGrid(){
  var width = window.innerWidth;

  return (
  <>
  <If condition ={width<800}>
      <Then>
      {/* <video src={unityrover} width="160vw" height="190vw" controls/>  */}
      <hr></hr>
      <video src={unityrover} width="200vw" height="200vw" controls poster={thumbnailrover}/>
      <h3 style={{color: "black", textAlign:'centre'}}>Unity Mars Rover</h3>

      <section style={{color: "black", fontSize:12, justifyContent:'left', textAlign: 'left'}}>
        {rovertext}


        </section >
        <section style={{display: 'flex',justifyContent: 'flex-start'}}>

          <a href={rovergit} target='_blank' className='myButton' >
                Unity Rover Github
          </a>
          
          <a href={roverreport} target='_blank' className='myButton' >
              Rover Report
          </a>
          

      </section>

      </Then>
      <Else>  
        <div className="container">
            <div className="left-grid" style={{padding:0}} >

            <video src={unityrover} width="250vm" height="200vm" controls  poster={thumbnailrover}/>
            </div>
 
            <div className="right-grid" style={{backgroundColor: 'rgba(245, 245, 220,0.911)', padding:'0 calc(var(--padding-percentage, 1.5%))'}}>
    
              <h2 style={{color: "black", textAlign:'left',marginTop:'10px'}}>Unity Mars Rover</h2>
            <section style={{color: "black", fontSize:15, justifyContent:'left', textAlign: 'left'}}>
              {rovertext}


              </section >
              <section style={{display: 'flex',justifyContent: 'flex-start'}}>

                <a href={rovergit} target='_blank' className='myButton' >
                      Unity Rover Github
                </a>
                
                <a href={roverreport} target='_blank' className='myButton' >
                    Rover Report
                </a>
                

            </section>

          </div>

        </div>
      </Else>
    </If>  
</>
);

}

// function ProjectGrid(){
//   var width = window.innerWidth;

//   return (
//   <>
//   <div className="container">
//   <div className="left-grid" style={{padding:0}} >
//   <If condition ={width<500}>
//       <Then>
//       <video src={unityrover} width="160vw" height="190vw" controls/> 


//       </Then>
//       <Else>
//       <video src={unityrover} width="275px" height="280px" controls/> 

//       </Else>
//     </If>  </div>
//   <div className="right-grid" style={{backgroundColor: 'rgba(245, 245, 220,0.911)', padding:'0 calc(var(--padding-percentage, 1.5%))'}}>
    
//     <h2 style={{color: "black", textAlign:'left',marginTop:'10px'}}>Unity Mars Rover</h2>
//   <section style={{color: "black", fontSize:15, justifyContent:'left', textAlign: 'left'}}>
//     {rovertext}


//     </section >
//     <section style={{display: 'flex',justifyContent: 'flex-start'}}>

//       <a href={rovergit} target='_blank' className='myButton' >
//             Unity Rover Github
//       </a>
      
//       <a href={roverreport} target='_blank' className='myButton' >
//            Rover Report
//       </a>
      

//   </section>
//   </div>

// </div>
// </>
// );

// }

function NewEmbeddedProject(){
  var width = window.innerWidth;
  return (
  <>


    <If condition ={width<800}>
      <Then>
      <hr></hr>
      <video src={mktvid} width="230vw" height="260vw" poster={occonn} controls/>
      <h3 style={{color: "black", textAlign:'centre'}}>Opencare IOT-Smart Mask</h3>
        <section style={{color:"black", fontSize:12, justifyContent:'left', textAlign: 'left'}}>
          {embtext}

          </section>
        <section style={{display: 'flex',justifyContent: 'flex-start'}}>
          
        <a href="https://pmz7696.wixsite.com/opencare" target='_blank' className='myButton' style={{marginLeft:'0px', position:'relative'}} >
                Product Website
        </a>


        </section>


      </Then>
      <Else>
      <div className="container">
        <div className="left-grid" style={{padding:0}} >

        <video src={mktvid} width="250vm" height="250vm" poster={occonn} controls/> 
        </div>
        <div className="right-grid" style={{backgroundColor: 'rgba(245, 245, 220,0.911)', padding:'0 calc(var(--padding-percentage, 1.5%))'}}>
          <h2 style={{color: "black", textAlign:'left',marginTop:'30px'}}>Opencare IOT-Smart Mask</h2>
        <section style={{color:"black", fontSize:15, justifyContent:'left', textAlign: 'left'}}>
          {embtext}

          </section>
        <section style={{display: 'flex',justifyContent: 'flex-start'}}>
          
        <a href="https://pmz7696.wixsite.com/opencare" target='_blank' className='myButton' style={{marginLeft:'0px', position:'relative'}} >
                Product Website
        </a>


        </section>

        </div>

      </div>


      </Else>
    </If>



</>
);

}




// function EmbeddedProject(){
//   var width = window.innerWidth;
//   return (
//   <>

//   <div className="container">
//   <div className="left-grid" style={{padding:0}} >

//     <If condition ={width<500}>
//       <Then>
//       <video src={mktvid} width="160vw" height="190vw" controls/> 


//       </Then>
//       <Else>
//       <video src={mktvid} width="275px" height="280px" controls/> 

//       </Else>
//     </If>




//   </div>
//   <div className="right-grid" style={{backgroundColor: 'rgba(245, 245, 220,0.911)', padding:'0 calc(var(--padding-percentage, 1.5%))'}}>
//     <h2 style={{color: "black", textAlign:'left',marginTop:'30px'}}>Opencare IOT-Smart Mask</h2>
//   <section style={{color:"black", fontSize:15, justifyContent:'left', textAlign: 'left'}}>
//     {embtext}

//     </section>
//     <section style={{display: 'flex',justifyContent: 'flex-start'}}>
      
//     <a href="https://pmz7696.wixsite.com/opencare" target='_blank' className='myButton' style={{marginLeft:'0px', position:'relative'}} >
//             Product Website
//     </a>


//     </section>

//   </div>

// </div>
// </>
// );

// }

function NewMLProject(){
  var width = window.innerWidth;
  return (
  <>

  <If condition ={width<800}>
      <Then>
        <hr></hr>
      <img src={eploss} width="250vw" height="250vw" controls/> 
      <h3 style={{color: "black", textAlign:'centre',marginTop:'30px'}}>Neural Network Coursework</h3>
      <section style={{color:"black", fontSize:12, justifyContent:'left', textAlign: 'left'}}>
        {mltext}

        </section>
        <section style={{display: 'flex',justifyContent: 'flex-start'}}>
          
        <a href="https://github.com/JamesOngICL/intro-ml-neural-net" target='_blank' className='myButton' >
                Intro-ML Github
          </a>
          
          <a href="https://drive.google.com/file/d/1MAk4LFoZgccna0AvaQTkW06Vd9pKjo1c/view?usp=sharing" target='_blank' className='myButton' >
              Intro-ML Report
          </a>
          

        </section>


      </Then>
      <Else>
      <div className="container">
      <div className="left-grid" style={{padding:0}} >

      <img src={eploss} width="250vm" height="250vm" controls/> 
      </div>
      <div className="right-grid" style={{backgroundColor: 'rgba(245, 245, 220,0.911)', padding:'0 calc(var(--padding-percentage, 1.5%))'}}>
        <h2 style={{color: "black", textAlign:'left',marginTop:'30px'}}>Neural Network Coursework</h2>
      <section style={{color:"black", fontSize:15, justifyContent:'left', textAlign: 'left'}}>
        {mltext}

        </section>
        <section style={{display: 'flex',justifyContent: 'flex-start'}}>
          
        <a href="https://github.com/JamesOngICL/intro-ml-neural-net" target='_blank' className='myButton' >
                Intro-ML Github
          </a>
          
          <a href="https://drive.google.com/file/d/1MAk4LFoZgccna0AvaQTkW06Vd9pKjo1c/view?usp=sharing" target='_blank' className='myButton' >
              Intro-ML Report
          </a>
          

        </section>

      </div>

    </div>


      </Else>
    </If>



</>
);

}




function MLProject(){
  var width = window.innerWidth;
  return (
  <>

  <div className="container">
  <div className="left-grid" style={{padding:0}} >
  <If condition ={width<800}>
      <Then>
      <img src={eploss} width="160vw" height="190vw" controls/> 


      </Then>
      <Else>
      <img src={eploss} width="275px" height="280px" controls/> 

      </Else>
    </If>



  </div>
  <div className="right-grid" style={{backgroundColor: 'rgba(245, 245, 220,0.911)', padding:'0 calc(var(--padding-percentage, 1.5%))'}}>
    <h2 style={{color: "black", textAlign:'left',marginTop:'30px'}}>Neural Network Coursework</h2>
  <section style={{color:"black", fontSize:15, justifyContent:'left', textAlign: 'left'}}>
    {mltext}

    </section>
    <section style={{display: 'flex',justifyContent: 'flex-start'}}>
      
    <a href="https://github.com/JamesOngICL/intro-ml-neural-net" target='_blank' className='myButton' >
            Intro-ML Github
      </a>
      
      <a href="https://drive.google.com/file/d/1MAk4LFoZgccna0AvaQTkW06Vd9pKjo1c/view?usp=sharing" target='_blank' className='myButton' >
           Intro-ML Report
      </a>
      

    </section>

  </div>

</div>
</>
);

}




export default App;

//Rover added text etc. 
const rovertext = "On this dynamic project, my team of seven and I developed a robot capable of autonomously navigating a maze while detecting and avoiding obstacles. I contributed by implementing a TCP-IP based Wi-Fi communication protocol, enabling an Arduino client to interface with front-end web displays at a sub-second latency.I also designed three+ databases to log exploration data and store backup coordinate information related to the mission. Rigorously stress-tested, these databases held 10k+ map coordinate entries, efficiently storing rover, obstacle, and orientation data.Since then, I've further honed my skills in robotics, mastering PID control for accurate navigation and Monte Carlo simulation for localizing a rover's position on a grid using particle representation. This  project earned first-class honors from my university and fuelled my interest in robotics 🤖."

const rovergit = "https://github.com/JamesOngICL/Unity-Mars-Rover"
const roverreport = "https://drive.google.com/file/d/17oxbTTPWYuWwJK3xg9Ecex6pJmTrc78l/view?usp=sharing"

const embtext = "In this innovative project, my team of four and I developed a cutting-edge IoT smart-breathing mask prototype to monitor air quality and gather user health data. Designed with doctors and residents of polluted cities in mind, our reusable mask provides a sustainable solution for better breathing.Leveraging a 4x-threaded architecture and multithreading, I concurrently collected readings from 5+ sensors via I2C, sending the data to web servers for processing. Our mask's sensors measured heart rate, air temperature, acceleration, volatile organic components, and more—crucial metrics for healthcare professionals. I also implemented machine learning algorithms using decision trees to analyze acceleration and heart rate data, enabling user activity identification and step counting. Discover our marketing website and GitHub repository below, and watch our engaging prototype launch video on the right-hand side 🎥🔬🌐."

const mltext = "In this project, my team of four tackled the challenge of predicting California house prices using a diverse set of input features. Dealing with incomplete and raw data, I efficiently pre-processed the columns, scaling them between -1 and +1 using Python Pandas and one-hot encoding.I designed a robust neural network architecture comprising linear layers and tanh activation functions. We employed an O(n^3) hyperparameter sweep, iterating over 1000+ epochs each time to optimize the network configuration. The result was an impressive RMSE of $62,000, a full 30% below our target. With an 80-10-10 train-test-validation split, our report and code submission earned a perfect score from the college computing department. 🌟"