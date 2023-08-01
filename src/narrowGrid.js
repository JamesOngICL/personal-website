import React from 'react';
import newpic from './square-profile.jpg'


function NarrowGrid(){
    var gradcourse = "Electrical Computer Engineering"
    var graduni = "Cornell University"
  
    return (
      <div>
        <hr className="invisible-line" />

        <h1 style={{color: "black", textAlign:'left', margin: '0'}}>James Ong</h1>
      <section style={{color: "black", fontSize:12, justifyContent:'left', margin:"0",textAlign: 'left' }}>
      Hey, I'm James! 🚀 An Electronic and Information Engineering graduate from Imperial College London, currently pursuing a masters degree in {gradcourse} at {graduni}. With 3+ years of coding experience, I've honed my skills in C++, Python, and SQL having completed many embedded systems and robotics projects. 
      I'm adept in PyTorch, Pandas, and Matplotlib for ML and data-science and  used HTML, JavaScript, and React for web-development (this website is programmed with react). Eager to innovate, my career aspirations spans Artificial Intelligence, IOT, Software and Financial Engineering among others.🖥️🌐
      Discover more about my journey on my GitHub & LinkedIn profiles! Please don't hesitate to connect or drop me an email (found in my resume) for any questions, inquiries, or general advice. 🌟📧🔗
  
        </section >
        <section style={{display: 'flex',justifyContent: 'flex-start'}}>
            <a href="https://github.com/JamesOngICL" target='_blank' className='myButton' >
                Github
              </a>
              <a href='https://www.linkedin.com/in/jamesongicl/' target='_blank' className='myButton'>
                Linkedin
              </a>
      </section>
      <img src={newpic} className="App-logo" style={{height:"250vm", width:"300vm"}}/> 
  
    </div>
  
    );
  
  }
  
  export default NarrowGrid;
