import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
    render() {
        return (
            <div class="container2">
                 <div class="signup1">
                    Signup form</div>
             <form>
                 <input class="pass1"type="text" name="name" placeholder="FirstName"></input><br></br>
                 <input class="pass1" type="text" name="name" placeholder="LatName"></input><br></br>
                 <input class="pass1" type="text" name="mail" placeholder="Email"></input><br></br>
                 <input class="pass1" type="text" name="phonenum" placeholder="Please enter a phone number"></input><br></br>
                 <input class="pass1" type="text" name="password" placeholder="Password"></input><br></br>
                 <input class="pass1" type="text" name="name" placeholder="Confirm Password"></input><br></br>
             </form>
             <div><br></br>
                 <input class="check2" type="checkbox"></input>
                 Agree to Terms and Privacy Policy
             </div>
             <div>
          <a class="sign4" href="/signin">Signin</a>
        </div>
            </div>
        );
    }
}

export default Signup;