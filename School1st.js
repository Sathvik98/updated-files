import '../css/School1st.css';

import React, {Component} from 'react';
class School1st extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    handleClick = () => {
        this.props.history.push("/"); 
    }
    anganwadiClick=()=>{
        this.props.history.push("/school");
    }
    render() {
        return (
            <div className='sch' >
                <h1 className="title2">Schools</h1>
                <button id="signout1" type="button" value="Signout" onClick={this.handleClick}>Signout</button>
                <body className="body2">
                    <input type="text" name="Id" placeholder="Child Id"></input>
                    <button type="submit" value="Search" onClick={this.anganwadiClick}>Search</button><br /><br />
                    <button type="submit" value="New Entry" onClick={this.anganwadiClick}>New Entry</button><br />
                </body>
            </div> 
        );
    }
}

export default School1st;