import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './contact.css'; 


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [paragraph, setParagraph] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", paragraph);
  
      
      setName('');
      setEmail('');
      setSubjet('');
      setParagraph('');
    };
  
    return (
    <div> 
          <h2>Let's Connect</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Enter your name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </label>
            </div>
            
            <div className="form-group">
              <label>
                Enter your email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
            </div>
  
            <div className="form-group">
              <label>
                Enter your subject:
                <input type="subject" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
            </div>
            
            <div className="form-group">
              <label>
                Message Box:
                <textarea value={paragraph} onChange={(e) => setParagraph(e.target.value)} />
              </label>
            </div>
  
          
            <button type="submit" className='button'>Send Message</button>
          
  
          </form>
          </div>
    );

    };


export default Contact;
