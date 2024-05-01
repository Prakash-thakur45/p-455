import { Link, useNavigate } from "react-router-dom";
import styles from './Registration.module.css';

function Registration(){
        return (
                 <>
                  {/* <!-- Header --> */}
      <div className={styles.top}>
        <div class="logo">
            <img src="./Screenshot 1.png" alt=""/>
           <p className={styles.parap}>AgriTradeZone Online Agri Market Of India</p>
        </div>
        <div class="header-search pull-right">
              <div class="rsdir">
                <form class="rsdir-mod-simple-search rsdir-j30" action="/index.php/component/rsdirectory/process-filters" method="post">
                         <div class="input-prepend input-append">
                        <div class="btn-group pull-left">
                            <input type="hidden" name="categories[]" value="0" />
                            <select name="select" id="select1">
                                <option value="All categories">All categories</option>
                                <option value="Vegetables">Vegetables</option>
                                <option value="fruit">Fruits</option>
    
                            </select>
                            <input class="input-large pull-left" type="text" name="q" placeholder="Click here to search..." value="" />
                            <button class="btn pull-left" type="submit">Submit</button>
                        </div>
                      
                    </div>
                </form>
            </div>
            {/* <!-- .rsdir --> */}
                                </div>
                         
       </div>
      
   {/* <!-- Navigation bar --> */}
        <div class="nav-collapse">
            <ul class="nav menu nav-pills mod-list">
                <li class="item-101 default"><a href="/">Home</a></li>
                <li class="item-102"><a href="/about" >About Us</a></li>
                <li class="item-165"><a href="/product" >Products</a></li>
                <li class="item-115"><a href="/add" > Add Agri Produce (Click here after Login)</a></li>
                    <li class="item-386 current active"><a href="/reg" >Farmers' Registration</a></li>
                    <li class="item-172"><a href="/log">Login</a></li>
                    <li class="item-114"><a href="/contact " >Contact Us</a></li>
                    <li class="item-554"><a href="/data" >MOU</a></li></ul>
                    

        </div>
    {/* <!-- </nav> --> */}
    
    <main id="content" role="main" class="span9">
       <div class="registration">
        <h1 class="userr">User Registration</h1>
            <form id="member-registration" action="/add" method="post" class="">
                <fieldset>  
        <div class="control-group">
            <div class="control-label">
                <label id="jform_name-lbl" for="FullName" class="hasPopover required" title="Name" data-content="Enter your full name.">Name<span class="star">&#160;*</span></label>
            </div>
            <div class="controls">
                <input type="text" name="FullName" id="jform_name"  value="" class="required" size="30"       required aria-required="true"/>
            </div>
        </div>
        <div class="control-group">
            <div class="control-label">
                <label id="jform_username-lbl" for="Username" class="hasPopover required" title="Username" data-content="Enter your desired username.">Username<span class="star">&#160;*</span></label>
            </div>
            <div class="controls">
                <input type="text" name="Username" id="jform_username"  value="" class="validate-username required" size="30"required aria-required="true"/>
            </div>
        </div>
        <div class="control-group">
            <div class="control-label">
                <label id="jform_password1-lbl" for="Password" class="hasPopover required" title="Password" data-content="Enter your desired password.">Password<span class="star">&#160;*</span></label>
            </div>
            <div class="controls">
                <input type="password"name="Password"id="jform_password1"value=""autocomplete="off" class="validate-password required"   size="30" maxlength="99" required aria-required="true" />	
            </div>
        </div>
        <div class="control-group">
            <div class="control-label">
                <label id="jform_password2-lbl" for="ConfirmPassword" class="hasPopover required" title="Confirm Password" data-content="Confirm your password.">Confirm Password<span class="star">&#160;*</span></label>
            </div>
            <div class="controls">
                <input type="password"name="ConfirmPassword"id="jform_password2"value=""autocomplete="off" class="validate-password required"   size="30" maxlength="99" required aria-required="true" />	
            </div>
        </div>
        <div class="control-group">
            <div class="control-label">
                <label id="jform_email1-lbl" for="Email" class="hasPopover required" title="Email Address" data-content="Enter your email address.">Email Address<span class="star">&#160;*</span></label>
            </div>
            <div class="controls">
                <input type="email" name="Email" class="validate-email required" id="jform_email1" value=""size="30"    autocomplete="email"    required aria-required="true"  />	
            </div>
        </div>
        <div class="control-group">
            <div class="control-label">
                <label id="jform_email2-lbl" for="jform_email2" class="hasPopover required" title="Confirm Email Address" data-content="Confirm your email address.">Confirm Email Address<span class="star">&#160;*</span></label>
            </div>
             <div class="controls">
                <input type="email" name="jform[email2]" class="validate-email required" id="jform_email2" value=""size="30"        required aria-required="true"  />	
            </div>
        </div>
    </fieldset>
                                                                
    <fieldset>
               <div class="control-group">
                <div class="control-label">
                <label id="jform_profile_address1-lbl" for="Address" class="hasPopover required" title="Address 1" data-content="If required, please fill this field.">
        Address 1<span class="star">&#160;*</span></label>
                        </div>
            <div class="controls">
            <input type="text" name="Address" id="jform_profile_address1"  value="" class="required" size="30"      required aria-required="true"/>
        </div>
        </div>
        
        
        <div class="control-group">
                <div class="control-label">
                    <label id="jform_profile_city-lbl" for="City" class="hasPopover required" title="City" data-content="If required, please fill this field.">City<span class="star">&#160;*</span></label>
                </div>
                <div class="controls">
                    <input type="text" name="City" id="jform_profile_city"  value="" class="required" size="30"       required aria-required="true"      />
                </div>
        </div>
        <div class="control-group">
            <div class="control-label">
                <label id="jform_profile_country-lbl" for="Country" class="hasPopover" title="Country" data-content="If required, please fill this field.">Country</label><span class="optional">(optional)</span>
            </div>
            <div class="controls">
                <input type="text" name="Country" id="jform_profile_country"  value=""  size="30"             />
            </div>
        </div>
        
        <div class="control-group">
            <div class="control-label">
                <label id="jform_profile_postal_code-lbl" for="Pincode" class="hasPopover" title="Postal/ZIP Code" data-content="If required, please fill this field.">Postal/PIN Code</label><span class="optional">(optional)</span>
            </div>
            <div class="controls">
                <input type="text" name="Pincode" id="jform_profile_postal_code"  value=""  size="30"             />
            </div>
        </div>
        
        <div class="control-group">
            <div class="control-label">
                <label id="jform_profile_phone-lbl" for="PhoneNumber" class="hasPopover required" title="Phone" data-content="If required, please fill this field.">Phone<span class="star">&#160;*</span></label>
            </div>
            <div class="controls">
                <input type="tel" name="PhoneNumber"  class="required" id="jform_profile_phone" value="" size="30" required aria-required="true" />	
            </div>
        </div>
        
        <div class="control-group">
            <div class="control-label">
                <label id="jform_profile_aboutme-lbl" for="Aboutme" class="hasPopover" title="About Me" data-content="If required, please fill this field.">About Me</label><span class="optional">(optional)</span>
            </div>
            <div class="controls">
                <textarea name="Aboutme" id="jform_profile_aboutme"  cols="30"  rows="5"            ></textarea>	
            </div>
        </div>
            </fieldset>
            <div class="control-group">
                <div class="controls">
                    <button type="submit" class="btn btn-primary validate">Register</button>
                    <a class="btn" href="/" title="Cancel">Cancel</a>
                    <input type="hidden" name="option" value="com_users" />
                    <input type="hidden" name="task" value="registration.register" />
                </div>
            </div>
          </form>
        </div>
    </main>
                 </>

               );
}

export default Registration;