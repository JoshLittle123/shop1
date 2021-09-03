const products =[
    {
        img: './images/new-product.jpg',
        title: "Mì tôm hảo hảo",
        priceFrom:2000,
        priceTo:5000,
        sold:"Đã bán 30,3k",
    },
];

let productHTML="";
let productFavorite="";

if (localStorage.getItem("sanphamyeuthich")!==null){
    productFavorite=localStorage.getItem("sanphamyeuthich");
    productFavorite=JSON.parse(productFavorite);
} else{
    productFavorite=[];
}

for(product of pruduct){
    product += `
    <div class="product">
            <img class="product__img" src=${product.img} alt />
            <div class="product__title">${product.title}</div>
            <div class="product__price">
              <p class="product__price-vnd">đ</p>
              <p class="product__price-number">${product.priceFrom}</p>
              <p class="product__price--">-</p>
              <p class="product__price-vnd">đ</p>
              <p class="product__price-number">${product.priceTo}</p>
            </div>
            <div class="product__footer">
              <i
                class="product__footer-left far fa-heart"
                onclick="getName('${product.name}')"
              ></i>
              <div class="product__footer-right">
                <div class="product__footer-right-rate">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <div class="product__footer-right-sold">${product.sold}</div>
              </div>
            </div>
          </div>
          `;
}
console.log(productHTML);
document.getElementById("allProducts").innerHTML= productHTML;

function getName(name){
    console.log(name);
    productFavorite.push(name);
    console.log(productFavorite);

    localStorage.getItem('sanphamyeuthich',JSON.stringify(productFavourite));
}

function readName(){
    let productFavorite="";
    for(product of productFavorite){
        productFavorite+=`
        <p>${product}</p>
        `;
    }
}



