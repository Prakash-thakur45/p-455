import {Link,NavLink} from 'react-router-dom';
import styles from '/Mainn.module.css';



function mainn(){
                   return (
                            <>
                            {/* // <!-- Header --> */}
<div className={styles.top}>
 <div class="logo">
     <img src="./Screenshot 1.png" alt=""/>
    <p className={styles.prap}>AgriTradeZone Online Agri Market Of India</p>
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
   <div className={styles.nav}>   
            <ul className={styles.menu} >  { /* nav menu nav-pills mod-list */}
                <li class="item-101 default"><NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${isActive ? " text-orange-700":" text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink></li>
                <li class="item-102"><a href="/about" >About Us</a></li>
                <li class="item-165"><NavLink
                                to="/Products"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${isActive ? " text-orange-700":" text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Products
                                </NavLink></li>
                <li class="item-115"><NavLink
                                to="/Add"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${isActive ? " text-orange-700":" text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Add Agri Produce (Click here after Login)
                                </NavLink></li>

                    <li className={styles.active}><NavLink
                                to="/Registration"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${isActive ? " text-orange-700":" text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Farmers' Registration
                                </NavLink></li>
                    {/* item-386 current active */}
                    <li class="item-172">      <NavLink
                                to="/login"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${isActive ? " text-orange-700":" text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Login
                                </NavLink></li>
                    <li class="item-114"><NavLink
                                to="/Contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${isActive ? " text-orange-700":" text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact us
                                </NavLink></li>
                    <li class="item-554"><NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                                        ${isActive ? " text-orange-700":" text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    MOU
                                </NavLink></li></ul>

        </div>
    {/* <!-- </nav> --> */}
 {/* <!-- image 1st --> */}
 <div class="imagebb">
     <img class="imageb" src="../static/images/pexels-md-aslam-hossain-18100007.jpg" alt="image"/>
     <h2 class="h2h">Welcome to Apka Apna AgriTradeZone</h2>
     <p class="parap">Empowering farmers through online trading of agricultural commodities is essential for their
          prosperity and sustainable livelihood. Agrotrade Zone is committed to facilitating farmers in selling their
           products, including vegetables, seeds, fertilizers, and manure, ensuring they receive fair compensation for
            their efforts. Our platform revolutionizes traditional mandi operations by providing farmers with a secure and efficient online portal for price discovery and payment settlement. By enabling direct selling of farmer produce through e-commerce, Agrotrade Zone saves time and digitizes record-keeping processes. We prioritize better price discovery for agricultural commodities, benefiting farmers, traders, and corporations alike. Our comprehensive services include storage facilities, commodity grading, and lodging for farmers at convenient locations. Agrotrade Zone serves as a reliable and modest platform for farmers to obtain fair prices for their agricultural produce. Additionally, we provide live commodity rates to help assess market demand effectively.</p>


 </div>
 {/* <!-- 2nd image --> */}
 <div class="endd">
     <img class="enddimage" src="../static/farmer buy.jpg" alt="image" />
     <h4 class="h44">AgriTradeZone.com is the First Free online Agri-Market where you can Buy or Sell or Agriculture Product ,Advertise fruits &amp; vegetables,  any Agri machinery or Tools,etc &amp;  it will truly fulfill our dream <strong>"Sabko Sahi Mol "</strong>.</h4>

     <p class="pp"><span>Agritrade Zone is the First Agri startup in India who started Free Agri Market Place in India and  Agritrade zone.com is providing assistance to farmers with the help of Gram Sahayaks from grading, packing, logistic support to sell their agriculture produce directly to end customers, and farmers will get the better price of agriculture produce as compared to the current APMC mandi price.</span></p>

     <p class="ppp">Now farmers (Kisan) can sell their produce directly to end consumer i.e. Retailers, Bulk buyers, Institution, Group Co-operative Societies, Citizen Associations or any other group buyers on AgriTradeZone.com &amp; also farmer can save a lot of money via Group buying of Agri products or machinery directly from Manufacturing Companies and big distributors on a fair price.</p>
     
</div>
<footer class="footer">
 <div class="footerwraper">
     <div class="hyperlink">
         <div><a href="#Login">Login</a></div>
     <div><a href="#ContactUs">Contact Us</a></div>
     <div><a href="#AboutUs">About Us</a></div>
     </div>
     <div class="iconss">
         <i class="icons1 fa-brands fa-instagram"></i>
         <i class="icons1 fa-brands fa-linkedin"></i>
         <i class="icons1 fa-brands fa-x-twitter"></i>
         <i class="icons1 fa-solid fa-envelope"></i>
         <i class="icons1 fa-brands fa-github"></i>  
     </div>
 </div>
    </footer>
    <footer class="footer" role="contentinfo">        
     <p class="pull-right">
         <p>&copy; 202</p>
      </p>
      </footer>
        </>
                   )
}

export default mainn;