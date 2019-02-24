import React,{Component} from 'react';
import '../css/complaint.css';
import Scrol from './Scrol';
class Complaint extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="complaint-section">
                    <h1>Complaint Us</h1><br/> 
                    <div id="imag"><Scrol/> </div>   
                    <div id="text">
                    <input type="text" className="complaint-form-text" placeholder="Your name" size="40"></input><br /><br />
                    <input type="email" className="complaint-form-text" placeholder="Your email"></input><br /><br />
                    <input type="text" className="complaint-form-text" placeholder="Your phone"></input><br /><br />
                    <input type="text" className="complaint-form-text" placeholder="Child name"></input><br /><br />
                    <input type="text" className="complaint-form-text" placeholder="Address"></input><br /><br />
                    <textarea className="complaint-form-text" placeholder="Your message"></textarea><br /><br />
                    <input type="submit" className="complaint-form-btn" value="Submit"></input></div></div>
                </form>
            </div>        
        );
    }
}
export default Complaint;