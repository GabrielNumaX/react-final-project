import React ,{Component} from 'react';

import css from './Login.module.css';

class Login extends Component {




    render() {

        return(

            <div className={css.login}>

                <div className={css.divLogin}>
                    <h2>Welcome to Dashboard, Login</h2>

                    <form>
                        <div className={css.divName}>
                            <label>Username</label>
                            <input type="text" name="user"></input>
                            
                            <label>Password</label>
                            <input type="password" name="password"></input>

                            <button type="submit">LOGIN</button>

                            <button>FORGOT YOUR PASSWORD?</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default Login;

