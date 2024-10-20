import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './contact.css'; 


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [paragraph, setParagraph] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Subject:", subject);
      console.log("Message:", paragraph);
  
      
      setName('');
      setEmail('');
      setSubject('');
      setParagraph('');
    };
  
    return (
    <div> 
          <h1>Let's Connect</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Enter your name:
                
              </label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            
            <div className="form-group">
              <label>
                Enter your email:
               
              </label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
  
            <div className="form-group">
              <label>
                Enter your subject:   
                
              </label>
              <input type="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
            
            <div className="form-group">
              <label>
                Message Box:
                
              </label>
              <textarea value={paragraph} onChange={(e) => setParagraph(e.target.value)} />
            </div>
  
          
            <button type="submit" className='btn'>Send Message</button>
          
  
          </form>
          </div>
    );

    };


export default Contact;
