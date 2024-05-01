import { Link, useNavigate } from "react-router-dom";
import styles from './Login.module.css';

function login(){
                   return (
                            <>
  {/* <!-- Header --> */}
   <div className={styles.top}>
    <div className={styles.logo}>
        <img src="./Screenshot 1.png" alt=""/>
       <p className={styles.prap}>AgriTradeZone Online Agri Market Of India</p>
    </div>                  
   </div>
   {/* <!-- Navigation bar --> */}
        <div className={styles.nav}>   
            <ul className={styles.menu} >  { /* nav menu nav-pills mod-list */}
                <li class="item-101 default"><a href="./Login.jsx">Home</a></li>
                <li class="item-102"><a href="/about" >About Us</a></li>
                <li class="item-165"><a href="/product" >Products</a></li>
                <li class="item-115"><a href="/add" > Add Agri Produce (Click here after Login)</a></li>
                    <li className={styles.active}><a href="/reg" >Farmers' Registration</a></li>
                    {/* item-386 current active */}
                    <li class="item-172"><a href="/">Login</a></li>
                    <li class="item-114"><a href="/contact " >Contact Us</a></li>
                    <li class="item-554"><a href="/data" >MOU</a></li></ul>

        </div>
    {/* <!-- </nav> --> */}
    <div className={styles.wrapper}>
    <div className={styles.well}><h3 class="page-header">Login Form</h3>
        <form action="/log" method="post" id="login-form" class="form-inline">
            <div class="userdata">
                <div id="form-login-username" class="control-group">
                    <div class="controls">
                        <div class="input-prepend">
                            <span class="add-on">
                                <span class="icon-user hasTooltip" title="Username"></span>
                                <label for="Username" className={styles.elementinvisible}>Username</label>
                            </span>
                                <input id="username" type="text" name="Username" className={styles.inputsmall} tabindex="0" size="18" placeholder="username" />
                        </div>
                    </div>
                </div>
            <div id="form-login-password" class="control-group">
                <div class="controls">
                    <div class="input-prepend">
                        <span class="add-on">
                            <span class="icon-lock hasTooltip" title="Password">
                            </span>
                            <label for="Password" className={styles.elementinvisible}>Password</label>
                            </span>
                            <input  id="password" type="password" name="Password" className={styles.inputsmall}  tabindex="0" size="18" placeholder="Password" />
                    </div>
                </div>
            </div>
                <div id="form-login-remember" className={styles.checkbox} >
                <label for="modlgn-remember" className={styles.controllabel}>Remember Me</label> <input id="modlgn-remember" type="checkbox" name="remember" class="inputbox" value="yes"/>
            </div>
                <div id="form-login-submit" class="control-group">
                    <div class="controls">
                        <button type="submit" tabindex="0" name="Submit" className={styles.loginbutton} >Log in</button>
                    </div>
                </div>
                        <ul class="unstyled">
                                <li>
                                    <a href="/reg">Create an account <span class="icon-arrow-right"></span></a>
                                </li>
                                <li>
                                    <a href="">Forgot your username?</a>
                                </li>
                                <li>
                                    <a href="">Forgot your password?</a>
                                </li>
                        </ul>
                        <a className={styles.canclebtn} href="/" title="Cancel">Cancel</a>
            <input type="hidden" name="option" value="com_users" />
            <input type="hidden" name="task" value="user.login" />
            <input type="hidden" name="return" value="aHR0cHM6Ly93d3cua2lzYW5tYW5kaS5jb20vaW5kZXgucGhwL2xvZ2lu" />
            <input type="hidden" name="be18c94c5ea006739bbae1e08c471a1f" value="1" />	</div>
	    </form>
    </div>
</div>                              
                            </>
                   );
}

export default login;