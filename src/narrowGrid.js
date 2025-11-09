import React from 'react';
import newpic from './square-profile.jpg'


function NarrowGrid(){
    var gradcourse = "Electrical Computer Engineering"
    var graduni = "Cornell University"
  
    return (
      <div>
        <hr className="invisible-line" />

        <h1 style={{color: "black", textAlign:'left', margin: '0'}}>James Ong</h1>
          <section style={{ color: "black", fontSize: 12, textAlign: "left", margin: 0 }}>
            <p>
                Hi, I'm James 👋 — a Software Engineer at Samsara in San Francisco.
              </p>
              <p>
                I work on automation and hardware validation frameworks that test IoT devices at scale — 
                from simulating GPS and real-world driving conditions to automating regression tests and data reporting. 
                My day-to-day involves building CI/CD tools, backend services, and internal web integrations that make large-scale device testing reliable and efficient.
              </p>
              <p>
                I graduated from Cornell University (M.Eng. ECE) and Imperial College London (B.Eng. EIE). 
                Outside of work, I enjoy running, playing tennis, and traveling. I'm always happy to connect or chat about new ideas, feel free to reach out!
              </p>
          </section>

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
