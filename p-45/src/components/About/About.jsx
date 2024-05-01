import styles from './About.module.css'

function About()
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
    <div class="wrapp">
        <div class="container">
            <section>
                <h2>Our Mission</h2>
                <p>At Agrotrade Zone, our mission is to revolutionize the agricultural industry by providing a seamless platform for farmers, traders, and consumers to connect and trade agricultural commodities efficiently and fairly. We strive to empower farmers by ensuring they receive fair compensation for their hard work and dedication, while also meeting the needs of traders and consumers for quality agricultural products.</p>
            </section>
    
            <section>
                <h2>Who We Are</h2>
                <p>Agrotrade Zone was founded by a team of passionate individuals with a shared vision to transform the agricultural landscape. With years of experience in agriculture, technology, and business, our team is dedicated to driving positive change and creating value for all stakeholders in the agricultural supply chain.</p>
            </section>
    
            <section>
                <h2>What We Do</h2>
                <p>At Agrotrade Zone, we offer a comprehensive online marketplace where farmers can showcase and sell their produce directly to buyers. Our platform facilitates transparent and secure transactions, enabling farmers to access wider markets and obtain better prices for their crops. We also provide valuable insights and resources to help farmers improve their productivity, sustainability, and profitability.</p>
            </section>
    
            <section>
                <h2>Our Values</h2>
                <p>Transparency, integrity, and fairness are at the core of everything we do at Agrotrade Zone. We are committed to building trust and fostering mutually beneficial relationships among all participants in the agricultural ecosystem. We believe in the power of technology to drive positive change and create opportunities for growth and prosperity in the agricultural sector.</p>
            </section>
    
            <section>
                <h2>Get in Touch</h2>
                <p>Whether you're a farmer looking to sell your produce, a trader seeking quality agricultural products, or a consumer interested in supporting local farmers, Agrotrade Zone is here to serve you. Join us in our mission to build a more resilient, sustainable, and equitable agricultural industry.</p>
            </section>
        </div>
    </div>
    
    <footer>
        <p class="foot">&copy; 2024 Agrotrade Zone. All rights reserved.</p>
    </footer>
              </>
    )
}
 export default About;