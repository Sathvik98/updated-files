import React,{Component} from 'react';
import '../css/Schools.css';
import Scrol from './Scrol'
class School extends Component {
    handleClick = () => {
        this.props.history.push("/"); 
    }
    anganwadiClick=()=>{
        this.props.history.push("/school");
    }

    render() {
        return (
            <div className="school">
                <button id="signout" type="button" value="Signout" onClick={this.handleClick}>Signout</button>
            <div id="details1">
            <h1 id="heading5">SCHOOL STUDENT INFO</h1>
            <form>
                <br /><input class="ns" type="text" name="ChildId" placeholder="Child Id"></input><br />
                <input class="ns" type="text" name="ChildName" placeholder="Child Name"></input><br />
                <br /><input class="ns" type="text" name="ChildAadhar" placeholder="Child Aadharcard number" size="25"></input><br />
                <br /><input class="ns" type="text" name="Aadhar" placeholder="Parent/Gaurdian Aadhar" size="25"></input><br />
                <input class="ns" type="" name="ParentName" placeholder="Parent/Gaurdian Name"></input><br></br>
                <input class="ns" type="number" name="Number" placeholder="PhoneNumber"></input>
                <br /><input class="ns" type="text" name="street" placeholder="Street"></input><br />
                <br /><input class="ns" type="text" name="Town" placeholder="Town/Village"></input><br />
                <br /><input class="ns" type="number" name="pincode" placeholder="pincode"></input><br />
                <br /><input class="ns" type="text" name="Schoolname" placeholder="Schoolname"></input><br />
                <Scrol/>
            <br></br><button type="reset" value="cancel">cancel  </button>&nbsp;&nbsp;
            <button type="submit" value="Submit" onClick={this.anganwadiClick}>Submit</button><br />
            </form>
            </div>
            </div>
        );
    }
}

export default School;