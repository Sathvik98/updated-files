import React, {Component} from 'react';
import './hospital.css'; 

class Hospital extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    handleClick = () => {
        this.props.history.push("/"); 
    }
    anganwadiClick=()=>{
        this.props.history.push("/hospital");
    }
    render() {
        return (
            <div className="hospital">
             <h1 id="heading2">Hospitals </h1>
                <button id="signout" type="button" value="Signout" onClick={this.handleClick}>Signout</button>
                <div id="details5">
                   
                    {/* <form action="Hospital" method="POST"> */}
                    <form>
                        <br /><input type="text" name="Aadhar" placeholder="Parent/Gaurdian Aadhar" size="25"></input><br/>
                        <input type="" name="ParentName" placeholder="Parent/Gaurdian Name"></input><br />
                        <input type="" name="Gender" placeholder="Gender"></input><br />
                        <input type="number" name="Number" placeholder="PhoneNumber"></input>          
                        <br /><input type="text" name="street" placeholder="Street"></input><br />
                        <br /><input type="text" name="Town" placeholder="Town/Village"></input><br />
                        <br /><input type="number" name="pincode" placeholder="pincode"></input><br />
                      <div id="submit">  <br></br><button type="reset" value="cancel">cancel  </button>&nbsp;&nbsp;&nbsp;
                        <button  type="submit" value="Submit" onClick={this.anganwadiClick}>Submit</button><br /></div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Hospital;