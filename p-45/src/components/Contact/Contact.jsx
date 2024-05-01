import styles from './Contact.module.css'

function Contact()
{
    return (
              <>
              {/* <!-- Header --> */}
   <div className={styles.top}>
    <div class="logo">
        <img src="../static/images/Screenshot 2024-03-18 151516.png" alt=""/>
       <p className={styles.parap}>AgriTradeZone Online Agri Market Of India</p>
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
        <div class="main">
    <div class="container">
        {/* <!-- <h1>Contact Us</h1> --> */}
        <p class="line">IF YOU HAVE ANY PROBLEM AND WANT TO HELP PLEASE SEND MESSAGE FROM HERE</p>
        <form action="#" method="post">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required/>

            <label for="email">Email</label>
            <input type="email" id="email" name="email" required/>

            <label for="message">Message</label>
            <textarea id="message" name="message" required></textarea>

            <input class="btn" type="submit" value="Submit"/>
        </form>
    </div>
    <div class="content">
        <div class="contact-text" itemprop="streetAddress">
            1) Registered Office: #236,opp IIM rou-pithampur Road ,Indore(Madhya Pradesh)-453331<br/>
            2) Corporate office: SCO-305, 3RD FLOOR, TRISHALLA LILLTE INDIA, INDORE,(Madhya Pradesh) INDIA	
        </div>
        <div class="contact-info">
            <p><strong>Address:</strong> 123 Farm Road,Bhopal,INDIA</p>
            <p><strong>Phone:</strong> +123-456-7890</p>
            <p><strong>Email:</strong> info@agritradezone.com</p>
        </div>
    </div>
</div>

              </>
    )
}
export default Contact;