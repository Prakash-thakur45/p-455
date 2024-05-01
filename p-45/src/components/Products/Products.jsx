import styles from './Products.module.css'

function Products(){
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
                <li class="item-101 default"><a href="/" >Home</a></li>
                <li class="item-102"><a href="/about" >About Us</a></li>
                <li class="item-165"><a href="/product" >Products</a></li>
                <li class="item-115"><a href="/upload" > Add Agri Produce (Click here after Login)</a></li>
                    <li class="item-386 current active"><a href="/reg" >Farmers' Registration</a></li>
                    <li class="item-172"><a href="/views/Login.html">Login</a></li>
                    <li class="item-114"><a href="/views/contact.html " >Contact Us</a></li>
                    <li class="item-554"><a href="/" >MOU</a></li></ul>

        </div>
    {/* <!-- </nav> --> */}
        {/* <hr> */}

        <div class="container">
            
            {/* <!-- Product 1 --> */}
            <div class="product">
                <img class="imagess" src="../static/images/pexels-sippakorn-yamkasikorn-3696170.jpg" alt="Product 1"/>
                <div class="product-details">
                    <h2>Name :Biofertilizer</h2>
                    <p>Price: Rs 1000/kg</p>
                    <p>Quantity: 50Kg</p>
                
                </div>
            <a class="aaa" href="/data">Seller Details</a>
            </div>
            
            {/* <!-- Product 2 --> */}
            <div class="product">
                <img class="imagess" src="../static/images/pexels-antony-trivet-12925598.jpg" alt="Product 2"/>
                <div class="product-details">
                    <h2>Name :Fertilizer</h2>
                    <p>Price: Rs 1500</p>
                    <p>Quantity: 30/beg</p>
                </div>
                <a class="aaa"  href="/data">Seller Details</a>
            </div>
            
            <div class="product">
                <img class="imagess" src="../static/images/broccoli-1238250_1280.jpg" alt="Product 1"/>
                <div class="product-details">
                    <h2>Name :Broccoli</h2>
                    <p>Price: Rs 100/kg</p>
                    <p>Quantity: 15Kg</p>
                </div>
                <a class="aaa" href="/data">Seller Details</a>
            </div>
            
            {/* <!-- Product 2 --> */}
            <div class="product">
                <img class="imagess" src="../static/images/pexels-luiz-m-santos-760281.jpg" alt="Product 2"/>
                <div class="product-details">
                    <h2>Name :Blabk grapes</h2>
                    <p>Price: Rs 100/kg</p>
                    <p>Quantity: 30kg</p>
                </div>
                <a class="aaa" href="/data">Seller Details</a>
            </div>
            {/* <!-- Add more products as needed --> */}
        </div>

        <div class="container">
            
            {/* <!-- Product 1 --> */}
            <div class="product">
                <img class="imagess" src="../static/images/pexels-pixabay-248420.jpg" alt="Product 1"/>
                <div class="product-details">
                    <h2>Name :Tomato</h2>
                    <p>Price: Rs 40/kg</p>
                    <p>Quantity: 25Kg</p>
                </div>
                <a class="aaa" href="/data">Seller Details</a>
            </div>
            
            {/* <!-- Product 2 --> */}
            <div class="product">
                <img class="imagess" src="../static/images/pexels-isabella-mendes-928251.jpg" alt="Product 2"/>
                <div class="product-details">
                    <h2>Name :Garlic</h2>
                    <p>Price: Rs 200/kg</p>
                    <p>Quantity: 300/beg</p>
                </div>
                <a class="aaa" href="/data">Seller Details</a>
            </div>
            
            <div class="product">
                <img class="imagess" src="../static/images/pexels-suzy-hazelwood-1306559.jpg" alt="Product 1"/>
                <div class="product-details">
                    <h2>Name :Carrot</h2>
                    <p>Price: Rs 40/kg</p>
                    <p>Quantity: 15Kg</p>
                </div>
                <a class="aaa" href="/data">Seller Details</a>
            </div>
            
            {/* <!-- Product 2 --> */}
            <div class="product">
                <img class="imagess" src="../static/images/pexels-monstera-production-5634614.jpg" alt="Product 2"/>
                <div class="product-details">
                    <h2>Name :Pumpkin</h2>
                    <p>Price: Rs 30/kg</p>
                    <p>Quantity: 20kg</p>
                </div>
                <a class="aaa" href="/data">Seller Details</a>
            </div>
            {/* <!-- Add more products as needed --> */}
            </div>
                 </>
                      )
}

export default Products;