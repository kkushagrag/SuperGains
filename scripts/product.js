function onMouseIn(hCons, myDIV){
    hCons.onmouseover = ()=> 
    {
        addDropDwn(myDIV)
    }
}
function onMouserOut(hCons, myDIV){
   hCons.onmouseleave = ()=> 
    {
        removeDropDwn(myDIV)
    }
}
function addDropDwn(x) {
      
    if (x.style.display === "none") {
      x.style.display = "grid";
      x.style.position ='absolute'
      x.style.zIndex = '1'
    }
  }
  function removeDropDwn(x){
      x.style.display = "none";
     }

 function addDropDwn1(mO,x ,array) {
        mO.onmouseover =()=> {
            array.forEach((ele)=>{
                 ele.style.display = "none"
          });
        if (x.style.display === "none") {
          x.style.display = "grid";
          x.style.position ='absolute';
          x.style.backgroundColor = 'white'
          x.style.zIndex = '1'
        }
       }
      }
      function getElement(id)
      {
          return document.getElementById(id);
      }
    
        function makeArr(array){
            let arr = []
            for(let i=0; i< array.length; i++)
            {
                arr.push(document.getElementById(array[i]))
            }
            return arr;
        }
        function makeNavbar(){
            let hCons = getElement('hk');
            let myDIV = getElement('myDIV');
            onMouseIn(hCons,myDIV)
            onMouserOut(hCons,myDIV)
        
          let bestSeller = getElement('bestSells');
          let catBestSell = getElement('catogBestSeller')
           onMouseIn(bestSeller,catBestSell)
           onMouserOut(bestSeller, catBestSell)
          let sNutri = getElement('sNutri')
          let hNutri = getElement('hNutri')
          let ar = makeArr(['forSport','forhealth'])
          addDropDwn1(sNutri,ar[0],ar)
          addDropDwn1(hNutri,ar[1],ar)
          
          let accounts = getElement('accounts')
          let dT = getElement('dropTable')
          onMouseIn(accounts,dT)
          onMouserOut(accounts,dT)

          //image of man-fmale function

          let genderSec = document.getElementById('genderSec');
          genderSec.onmouseover = ()=>{
          let gendDroDwn = document.getElementById('gend-DroDwn')
          gendDroDwn.style.display = 'grid'
          gendDroDwn.style.zIndex = '1'
  }
        genderSec.onmouseleave = ()=>{
       let gendDroDwn = document.getElementById('gend-DroDwn')
       gendDroDwn.style.display = 'none'
  }
  


  }
  let parent=document.getElementById("display");
      

      let data = [
      {imgPrime:`https://img5.hkrtcdn.com/17017/prd_1701644_o.jpg`,
      name:`MuscleBlaze High Protein Muesli, 1 kg, Dark Chocolate & Cranberry`,
      oriPrice: 825,
      curPrice: 745,
      quantity: 1,
      imgSub1:`https://img3.hkrtcdn.com/17017/prd_1701652-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-French-Vanilla-Crme_o.jpg`,
      imgSub2:`https://img5.hkrtcdn.com/17017/prd_1701654-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-French-Vanilla-Crme_o.jpg`,
      imgSub3:`https://img7.hkrtcdn.com/17017/prd_1701656-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-French-Vanilla-Crme_o.jpg`
      },
  
      {imgPrime:`https://img5.hkrtcdn.com/16719/prd_1671884-MuscleBlaze-Beginners-Protein-2.2-lb-Chocolate_o.jpg`,
      name:`MuscleBlaze Beginner's Protein, 2.2 lb, Chocolate`,
      oriPrice: 499,
      curPrice: 485,
      quantity: 1,
      imgSub1:`https://img4.hkrtcdn.com/14680/prd_1467923-MuscleBlaze-Beginners-Protein-2.2-lb-Chocolate_o.jpg`,
      imgSub2:`https://img7.hkrtcdn.com/16739/prd_1673896-MuscleBlaze-Beginners-Protein-2.2-lb-Chocolate_o.jpg`,
      imgSub3:`https://img9.hkrtcdn.com/16739/prd_1673898-MuscleBlaze-Beginners-Protein-2.2-lb-Chocolate_o.jpg`
      },
  
       {imgPrime:`https://img2.hkrtcdn.com/11963/prd_1196281-MuscleTech-NitroTech-Performance-Series-4-lb-Milk-Chocolate_o.jpg`,
      name:`MuscleTech NitroTech Performance Series, 4 lb, Milk Chocolate`,
      oriPrice: 6699,
      curPrice: 5580,
      quantity: 1,
      imgSub1:`https://img6.hkrtcdn.com/11963/prd_1196275-MuscleTech-NitroTech-Performance-Series-4-lb-Milk-Chocolate_o.jpg`,
      imgSub2:`https://img8.hkrtcdn.com/11963/prd_1196277-MuscleTech-NitroTech-Performance-Series-4-lb-Milk-Chocolate_o.jpg`,
      imgSub3:`https://img4.hkrtcdn.com/15510/prd_1550993-MuscleTech-NitroTech-Performance-Series-4-lb-Milk-Chocolate_o.jpg`
      },
  
       {imgPrime:`https://img1.hkrtcdn.com/16794/prd_1679330_o.jpg`,
      name:`HealthKart HK Vitals Multivitamin with Multimineral, Amino Acids, Taurine & Ginseng Extract, 60 tablet(s), Unflavoured`,
      oriPrice: 650,
      curPrice: 389,
      quantity: 1,
      imgSub1:`https://img5.hkrtcdn.com/16794/prd_1679344-HealthKart-HK-Vitals-Multivitamin-with-Multimineral-Amino-Acids-Taurine-Ginseng-Extract-60-tablets-Unflavoured_o.jpg`,
      imgSub2:`https://img1.hkrtcdn.com/16794/prd_1679350-HealthKart-HK-Vitals-Multivitamin-with-Multimineral-Amino-Acids-Taurine-Ginseng-Extract-60-tablets-Unflavoured_o.jpg`,
      imgSub3:`https://img9.hkrtcdn.com/16794/prd_1679348-HealthKart-HK-Vitals-Multivitamin-with-Multimineral-Amino-Acids-Taurine-Ginseng-Extract-60-tablets-Unflavoured_o.jpg`
      },
  
      {imgPrime:`https://img8.hkrtcdn.com/11795/prd_1179417-TrueBasics-Ultra-Omega3-Fatty-Acids-Triple-Strength-with-1250mg-Fish-oil-EPA-460-mg-DHA-380-mg-90-capsules_o.jpg`,
      name:`TrueBasics Ultra Omega-3 (EPA 525mg & DHA 400mg), 90 capsules`,
      oriPrice: 1699,
      curPrice: 1478,
      quantity: 1,
      imgSub1:`https://img10.hkrtcdn.com/14783/prd_1478299-TrueBasics-Ultra-Omega3-EPA-525mg-DHA-400mg-60-capsules-TrueBasics-Ultra-Omega3-EPA-525mg-DHA-400mg-90-capsules_o.jpg`,
      imgSub2:`https://img10.hkrtcdn.com/11795/prd_1179419-TrueBasics-Ultra-Omega3-Fatty-Acids-Triple-Strength-with-1250mg-Fish-oil-EPA-460-mg-DHA-380-mg-90-capsules_o.jpg`,
      imgSub3:`https://img2.hkrtcdn.com/14784/prd_1478301-TrueBasics-Ultra-Omega3-EPA-525mg-DHA-400mg-90-capsules_o.jpg`
      },
  
     {imgPrime:`https://img4.hkrtcdn.com/6865/prd_686463-TrueBasics-Multivit-Sport-90-tablets-Unflavoured_o.jpg`,
      name:`TrueBasics Multivit Sport One Daily Multivitamin, 90 tablet(s), Unflavoured`,
      oriPrice: 1699,
      curPrice: 1478,
      quantity: 1,
      imgSub1:`https://img10.hkrtcdn.com/6834/prd_683369-TrueBasics-Multivit-Sport-90-tablets-Unflavoured_o.jpg`,
      imgSub2:`https://img6.hkrtcdn.com/6834/prd_683375-TrueBasics-Multivit-Sport-90-tablets-Unflavoured_o.jpg`,
      imgSub3:`https://img4.hkrtcdn.com/6834/prd_683373-TrueBasics-Multivit-Sport-90-tablets-Unflavoured_o.jpg`
      },
  
     {imgPrime:`https://img6.hkrtcdn.com/15299/prd_1529825-MuscleBlaze-Steel-Pro-Shaker-Black-750-ml_o.jpg`,
      name:`MuscleBlaze Steel Pro Shaker, Black, 750 ml`,
      oriPrice: 1299,
      curPrice: 849,
      quantity: 1,
      imgSub1:`https://img4.hkrtcdn.com/15299/prd_1529813-MuscleBlaze-Steel-Pro-Shaker-Black-750-ml_o.jpg`,
      imgSub2:`https://img2.hkrtcdn.com/15299/prd_1529821-MuscleBlaze-Steel-Pro-Shaker-Black-750-ml_o.jpg`,
      imgSub3:`https://img6.hkrtcdn.com/15299/prd_1529815-MuscleBlaze-Steel-Pro-Shaker-Black-750-ml_o.jpg`
      },
  
      {imgPrime:`https://img4.hkrtcdn.com/12525/prd_1252433-Strauss-Foam-Hand-Grip-Blue_o.jpg`,
      name:`Strauss Foam Hand Grip, Blue`,
      oriPrice: 499,
      curPrice: 249,
      quantity: 1,
      imgSub1:`https://img8.hkrtcdn.com/12525/prd_1252427-Strauss-Foam-Hand-Grip-Blue_o.jpg`,
      imgSub2:`https://img4.hkrtcdn.com/7700/prd_769953-Strauss-Foam-Hand-Grip-Blue_o.jpg`,
      imgSub3:`https://img6.hkrtcdn.com/12525/prd_1252425-Strauss-Foam-Hand-Grip-Blue_o.jpg`
      },
  
      {imgPrime:`https://img2.hkrtcdn.com/2400/prd_239931_o.jpg`,
      name:`MuscleBlaze Gloves, Yellow Black & Silver, Small`,
      oriPrice: 1299,
      curPrice: 909,
      quantity: 1,
      imgSub1:`https://img6.hkrtcdn.com/2400/prd_239915_o.jpg`,
      imgSub2:`https://img2.hkrtcdn.com/2400/prd_239901_o.jpg`,
      imgSub3:`https://img2.hkrtcdn.com/2400/prd_239901_o.jpg`
      }
  ];
  
  function showproducts(d){
    parent.innerHTML=null;
     
  d.forEach(function(product){
   
     console.log(product);
      let div=document.createElement("div");
      let img=document.createElement("img");
      img.src=product.imgPrime;
      let prod_price=document.createElement("p");
      prod_price.textContent=product.name;
      
      let prod_name=document.createElement("p");
      prod_name.textContent=product.oriPrice;
      let addtocart_btn=document.createElement("button");
      addtocart_btn.textContent="ADD TO BAG";
      div.append(img,prod_name,prod_price,addtocart_btn);
      parent.append(div);
      div.style.cursor = "pointer";
      div.onclick=function (){
          addtocart(product);
      }
  
  
  });
  }
  showproducts(data);
   
  
  function addtocart(p){
   
     localStorage.setItem("product",JSON.stringify(p));
     window.location.href="productViewPage.html"

    
  }
  function lth(){
    let v=document.getElementById("filter").value;
   
   
    
    
    if(v=="high"){
      let arr=data.sort(function(a,b){
        return b. oriPrice-a.oriPrice;
        
      }
         
      )
      showproducts(arr);
     
    }
    if(v=="low"){
      let arr=data.sort(function(a,b){
        return a.oriPrice-b.oriPrice;
      
    }
      )
      showproducts(arr);
      
     
    
    
  }
  }