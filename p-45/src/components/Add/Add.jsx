import styles from './Add.module.css'

function Add()
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
            <h1>Add Farmer Product</h1>
            <form action="/upload" method="post" enctype="multipart/form-data">
                <div class="form-group ">
                    <label for="productimage">Product Image:</label>
                    <input class="formm" type="file" id="product-image" name="productimage" accept="image/*" required/>
                </div>
                <div class="form-group">
                    <label for="productname">Product Name:</label>
                    <input class="formm" type="text" id="product-name" name="productname" required/>
                </div>
                <div class="form-group">
                    <label for="productprice">Product Price:</label>
                    <input class="formm" type="number" id="product-price" name="productprice" min="0" required/>
                </div>
                <div class="form-group">
                    <label for="productquantity">Product Quantity:</label>
                    <input class="formm" type="number" id="product-quantity" name="productquantity" min="0" required/>
                </div>
                <div class="form-group">
                    <label for="productdetails">Product Details:</label>
                    <textarea class="formm" id="product-details" name="productdetails" rows="4" required></textarea>
                </div>
                <button class="submitbtn" type="submit">Add Product</button>
            </form>
        </div>
    </div>
              </>
    )
}
export default Add;