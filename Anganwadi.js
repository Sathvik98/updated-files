import React,{Component} from 'react';
import '../css/anganwadi.css'
import Scrol from './Scrol'
class Anganwadi extends Component {
    handleClick = () => {
        this.props.history.push("/"); 
    }
    anganwadiClick=()=>{
        this.props.history.push("/anganwadi");
    }
    render() {
        return (
            <div className='angan'>
                <button id="signout" type="button" value="Signout" onClick={this.handleClick}>Signout</button>
            <div id="details2">
            <h1 id='hash'>Courtyard Shelter</h1>
            <form>
                <br /><input class="ns" type="text" name="ChildId" placeholder="Child Id"></input><br />
                <input class="ns" type="text" name="ChildName" placeholder="Child Name"></input><br />
                <br /><input class="ns" type="text" name="ChildAadhar" placeholder="Child Aadhar(If Available)" size="25"></input><br />
                <br /><input class="ns" type="text" name="Aadhar" placeholder="Parent/Gaurdian Aadhar" size="25"></input><br />
                <input class="ns" type="" name="ParentName" placeholder="Parent/Gaurdian Name"></input><br></br>
                <input class="ns" type="number" name="Number" placeholder="PhoneNumber"></input>
                <br /><input class="ns" type="text" name="street" placeholder="Street"></input><br />
                <br /><input class="ns" type="text" name="Town" placeholder="Town/Village"></input><br />
                <br /><input class="ns" type="number" name="pincode" placeholder="pincode"></input><br />
                <Scrol />
            
            <br></br><button type="reset" value="cancel">cancel  </button>
            <button type="submit" value="Submit" onClick={this.anganwadiClick}>Submit</button><br />
            </form>
            </div>
            </div>
        );
    }
}

export default Anganwadi;