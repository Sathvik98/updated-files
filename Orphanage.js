import '../css/Orphanage.css'
import Scrol from './Scrol'
import React, { Component } from 'react';
class Orphanage extends Component {
    handleClick = () => {
        this.props.history.push("/"); 
    }
    render() {
        
        return (
            <div className='orph'>
                <button id="signout" type="button" value="Signout" onClick={this.handleClick}>Signout</button>
            <div id="details">
            <h1>ORPHANAGE</h1><br />
            <h2>CHILD DETAILS</h2>
            <form>
                <br /><input class="ns" type="text" name="ChildId" placeholder="Child Id"></input><br />
                <input class="ns" type="text" name="ChildName" placeholder="Child Name"></input><br />
                <br /><input class="ns" type="text" name="ChildAadhar" placeholder="Child Aadharcard number" size="25"></input><br />
                <input class="ns" type="" name="OrphanageName" placeholder="Orphanage Name"></input><br></br>
                <input class="ns" type="number" name="Number" placeholder="PhoneNumber"></input>
                <br /><input class="ns" type="text" name="street" placeholder="Street"></input><br />
                <br /><input class="ns" type="text" name="Town" placeholder="Town/Village"></input><br />
                <br /><input class="ns" type="number" name="pincode" placeholder="pincode"></input><br />
                <Scrol />
        
            <br></br><button type="reset" value="cancel">cancel  </button>
            <button type="submit" value="Submit">Submit</button><br />
            </form>
            </div>
            </div>
        );
    }
}

export default Orphanage;