function navbar(){

    return` <section>
    <div id='navCont'>
            <div id='logo'>
                 <img src="/Logo/SuperGains.png" alt="Your Logo" width="200" height="50">
            </div>
        <div id="searchCont">
            <img class="glass" src="https://static1.hkrtcdn.com/hknext/static/media/common/header/search-icon-grey-2.svg">
            <input id='search' type="text" placeholder="Search for products, brands or Health Goals">
        </div>
        <div id='headCart'>
          <div> Loyal Rewards <span class="ima">&nbsp;|</span></div>
          <div>Customer Support
            <span class="ima"><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/arrow-down.svg" alt="">&nbsp;|</span>
         </div>
          <div id='accounts'>My Account & Orders
          <span class="ima"><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/arrow-down.svg" alt="">&nbsp;|</span>
           <div id='dropTable'>
               <div id='sI'><a href="login.html">LogIn</a></div>
               <div id='lO'><a href="signup.html">New user? / Sign up</a></div>
               <div id='insideDrop'>
                <div id='f1'>
                    <div>My Account</div>
                    <div><span><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/my-orders.svg" alt="" srcset=""></span>&nbsp; Orders</div>
                    <div><span><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/my-wishlist.svg" alt="" srcset=""></span>&nbsp; Witch List</div>
                    <div><span><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/loyalty-rewards.svg" alt="" srcset=""></span>&nbsp; Loyal Rewards</div>
                </div>
                <div id='f2'>
                    <div>Health Profile</div>
                    <div>&nbsp; Diet Plan</div>
                    <div>&nbsp; My Consultants</div>
                    <div>&nbsp; Recommended Products</div>
                </div>
               </div>
           </div>
        </div>
          <div id='cart'><a href="cart.html"><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/cart.svg" alt="cart"></a></div>
        </div>
    </div>
</section>
<hr>
<section>
     <div id='belowNav'>
        <div id='catag'>
        <div id='bestSells'>Category
        <div id='catogBestSeller'>
            <div id='sellerCat1'>
                <div id='sNutri'><a href="login.html">Sport Nutrition</a></div>
                <div id='hNutri'><a href="login.html">Health Nutrition</a></div>
            </div>
            <div id=sellerCat2>
                <div id='forSport'>
                    <div>Protein Powder</div>
                    <div>Masss Gainer</div>
                    <div>Whey Protein</div>
                    <div>Health Booster</div>
                </div>
                <div id='forhealth'>
                    <div>Protein A</div>
                    <div>Mas B</div>
                    <div>Protein C</div>
                    <div>Health Booster G</div>
                </div>
            </div>
        </div>
        </div>
        <div>Brand</div>
        <div id='genderSec'>Gender
            <div id='gend-DroDwn'>
                 <div id='gen_content'>
                     <div class="gender_text">Shop By Gender</div>
                     <div id='cat_menWomen'>
                         <div id='div_cat_Men'><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/man-2.svg" alt="" srcset="">
                             <div>MEN</div>
                        </div>
                         <div id='div_cat_Women'><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/woman-2.svg" alt="" srcset="">
                           <div>WOMEN</div>
                        </div>
                     </div>
                 </div>
            </div>
        </div>
        <div>Goal</div>
       
        <div id='catagfirst'>Bestseller</div>

        <div>Deals</div>
        <div>Gift Card</div>
        <div id='cataglast'>Blog,Video & More</div>
        </div>
        <div id='store'>
            <div id='hk'><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/hk-consult.svg" alt="" srcset="">
                <span id='cons'>&nbsp;SG Consult</span>
                <div id='myDIV'>
                    <h1>Consult Services</h1>
                    <p><span class="ic"><img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/consult-health-profile-icon.svg" alt=""></span>&nbsp;&nbsp;Health Profile</p>
                    <p><span class="ic"><img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/book-consultation-icon.svg" alt=""></span>&nbsp;&nbsp;Book a Consultation</p>
                    <p><span class="ic"><img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/consult-health-profile-icon.svg" alt=""></span>&nbsp;&nbsp;Recommend a Product</p>
                    <p><span class="ic"><img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/what-we-offer-icon.svg" alt=""></span>&nbsp;&nbsp;Service Programs</p>
                    <p><span class="ic"><img src="https://static1.hkrtcdn.com/hknext/static/media/common/misc/consult-health-profile-icon.svg" alt=""></span>&nbsp;&nbsp;Workout at Home</p>
                 </div>
            </div>
            <div id='st_store'><img src="https://static1.hkrtcdn.com/hknext/static/media/common/header/location-pin.svg" alt="" srcset="">&nbsp;Find a Store
            </div>
        </div>
     </div>
</section>
<hr>`
}
export default navbar;