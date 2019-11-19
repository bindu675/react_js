import React, { Component } from 'react';
import './Signin.css';
class Signin extends Component {
    render() {
        return (
            <div class="container">
                <div class="sign1">
                    Signin form</div><br></br>
             <form>
                 <input class="name1"type="text" name="email" placeholder="Name or Email"></input><br></br>
                 <input class="pass1" type="text" name="password" placeholder="Password"></input>
             </form>
             <div><br></br>
                 <input class="check1" type="checkbox"></input>
                 Remember me
             </div>
             <div class="pass2">
                 ForgetPassword?
                 <div><br></br>
                     <button class="sign2">Signin</button>
                     <div class="account1"><br></br>
                         Create a New accout
                         <div>
                         <a href="#" class="fa fa-facebook"></a>
                         <a href="#" class="fa fa-twitter"></a>
                         <a href="#" class="fa fa-google"></a>
                         </div>
                     </div>
                 </div>
             </div>
            </div>
            <div>
            <a href="/Signup">Signup</a>
            </div>
        );
    }
}

export default Signin;