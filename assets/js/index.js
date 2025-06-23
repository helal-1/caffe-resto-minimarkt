const sauces = {
  "ديزرت": [
    { name: "نوتيلا", price: 35 },
    { name: "شوكولاتة", price: 35 },
    { name: "لوتس", price: 40 },
    { name: "شيكولاته وايت", price: 35 },
    { name: "بستاشيو", price: 45 },
    { name: "فراولة", price: 35 },
    { name: "كريمة", price: 30 }
  ]
};

// Initialize selected sauces storage
let selectedSauces = {};

// Load selected sauces from localStorage if exists
if (localStorage.getItem('selectedSauces')) {
  selectedSauces = JSON.parse(localStorage.getItem('selectedSauces'));
}

const products = [
    // قهوة
    { name: "دبل اسبريسوا", type: "قهوة", price: 35, image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&h=300" },
    { name: "بن فاتح", type: "قهوة", price: 20, image: "https://backend.abuauf.com/wp-content/uploads/2024/08/2000505000000-1.webp" },
    { name: "بن وسط", type: "قهوة", price: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbkiS-LOBqhGPnDPj9gEyuepjTAmgXPs2mWw&s"},
    { name: "بن غامق", type: "قهوة", price: 25, image: "https://pbs.twimg.com/media/ELVRoTCWwAEniwA.jpg:large" },
    { name: "كابتشينو", type: "قهوة", price: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGd6bzuc59tcTz-SKeAe8p7Man-CCUYSHOpQ&s" },
    { name: "لاتيه", type: "قهوة", price: 35, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcobwwurgZZtyG1FjNFmgSHo5pv61Y-BV12Q&s" },
    { name: "أميريكانو", type: "قهوة", price: 30, image: "https://shamlola.s3.amazonaws.com/Shamlola_Images/4/src/0d2ef8e725b6609ef32ea46032685fd6b93d275b.jpg" },
    { name: "موكا", type: "قهوة", price: 40, image: "https://www.justfood.tv/big/MOCCA_source_jf_1.JPG" },
    { name: "اسبريسو ميكاتو", type: "قهوة", price: 38, image: "https://pbs.twimg.com/media/EVwjNWPXgAIzEDJ.jpg" },
  
    // عصاير فريش
    { name: "عصير بطيخ", type: "عصاير فريش", price: 35, image: "https://img.youm7.com/ArticleImgs/2019/6/25/131745-%D8%B9%D8%B5%D9%8A%D8%B1-%D8%A8%D8%B7%D9%8A%D8%AE-(5).jpg" },
    { name: "عصير مانجا", type: "عصاير فريش", price: 40, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvosGP3NaA20LZ5r2bPwXn6odvAlZQCqmiw&s" },
    { name: "عصير فراولة", type: "عصاير فريش", price: 35, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsamsc1rV6sah8k6jqrmCMaHJ1jeR32HNw_w&s" },
    { name: "عصير جوافة", type: "عصاير فريش", price: 35, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXK1OILQi3_paCe1n1tgFX1xI38OSV6SkzQ&s" },
    { name: "عصير موز", type: "عصاير فريش", price: 35, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2cPFXYdfP2w4754_xQP24LIisOIV2EdlHNQ&s" },
    { name: "عصير كيوي", type: "عصاير فريش", price: 50, image: "https://static.webteb.net/images/content/tbl_articles_article_29526_56900ea1b4c-7bbb-4944-8ea5-a06df1f4ab7e.jpg" },
    { name: "عصير ليمون", type: "عصاير فريش", price: 30, image: "https://kitchen.sayidaty.net/uploads/small/2d/2d3ca110e699ced93bfdd6f103ab930c_w750_h750.jpg" },
    { name: "عصير اناناس", type: "عصاير فريش", price: 35, image: "https://cdn.altibbi.com/cdn/cache/1000x500/image/2023/06/07/c38439f34b982f04ac34622c913ccb27.jpg.webp" },
    { name: "عصير افوكادو", type: "عصاير فريش", price: 65, image: "https://kitchen.sayidaty.net/uploads/small/d4/d488339775260323285031fec334db64_w750_h500.jpg" },
  
    // موخيتو
    { name: "موخيتو مانجا", type: "موخيتو", price: 50, image: "https://su24su.com/wp-content/uploads/2023/12/1701515896_641_%D9%83%D9%8A%D9%81-%D8%A7%D8%B3%D9%88%D9%8A-%D8%A7%D9%84%D9%85%D9%88%D9%87%D9%8A%D8%AA%D9%88-%D8%A8%D8%A7%D9%84%D8%B3%D9%81%D9%86-%D8%A7%D8%A8.jpeg" },
    { name: "موخيتو فراولة", type: "موخيتو", price: 50, image: "https://app.menusbee.com/storage/2024/10/f867b860-61a9-47b7-ab0b-dad586b99367.jpg" },
    { name: "موخيتو ليمون نعناع", type: "موخيتو", price: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPsWOA7Ymje09IuX9NxAajIiJfeFegywGkw&s" },
    { name: "موخيتو مكس بيري", type: "موخيتو", price: 55, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRl0ctIlz8SORsJIQbpzelUb38UcrhynkyQ&s"},
    { name: "موخيتو توت", type: "موخيتو", price: 55, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetIeD9CbkbqvfXXhqSoXdljZRuFVrpY8ItA&s" },
    { name: "موخيتو بلو بيري", type: "موخيتو", price: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCc1C54TpTKw13-mkSnVSu_TQxF_dJpt3ODg&s" },
  
    // البن
    { name: "بن فاتح", type: "البن",  weight: "1000g", image: "https://media.gemini.media/img/large/2020/11/12/2020_11_12_18_11_52_572.jpg" },
    { name: "بن وسط", type: "البن",  weight: "1000g", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa5vjeXa4hG3_0BiuWKqQSRd6igxbWTr4Agw&s" },
    { name: "بن غامق", type: "البن",  weight: "1000g", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqPg2mEaObA86n4jxcivCGZn3bKrzs0y-FA&s"},
    { name: "بن برازيلي ", type: "البن",  weight: "1000g", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIVwi6Mg1oL2-qaczn-SOX-nuxfZff08wMQ&s" },
    { name: "بن كولمبي", type: "البن",  weight: "1000g", image: "https://cdn.salla.sa/hDbo8JP2P2KKjzgzvhFstO0PTjHNROQbAvsytetT.jpg" },
    { name: "بن حبشي", type: "البن",  weight: "1000g", image: "https://cdn.salla.sa/Rbly/dfe41593-790a-41d1-93d9-4bfc04c2a931-1000x666.66666666667-zS1o9iK5Y5h3e17XpYuKiA0kKrvt7g2bvUCWMl60.png"},
    { name: "بن يمني", type: "البن",  weight: "1000g", image: "https://ozostore.net/wp-content/uploads/2024/09/1000152378.jpg" },
    { name: "بن هندي", type: "البن", weight: "1000g", image: "https://www.madinatalqahwa.com/wp-content/uploads/2023/11/cooling-tray-with-brown-roasted-coffee-beans-2022-04-07-12-42-43-utc.jpg" },
    { name: "بن اسيريسوا", type: "البن",  weight: "1000g", image: "https://cdn.alweb.com/thumbs/alqhwah/article/fit710x532/%D8%AA%D8%B9%D8%B1%D9%81-%D8%B9%D9%84%D9%89-%D9%82%D9%87%D9%88%D8%A9-%D8%A5%D8%B3%D8%A8%D8%B1%D9%8A%D8%B3%D9%88-%D9%88%D8%B9%D9%84%D9%89-%D8%A3%D9%87%D9%85-%D9%85%D8%A7-%D9%8A%D9%85%D9%8A%D8%B2%D9%87%D8%A7.jpg" },
    { name: "بن اندونيسي", type: "البن",  weight: "1000g", image: "https://media.gemini.media/img/large/2015/10/1/2015_10_1_10_55_30_395.jpg" },
  
    // ميلك تشك
    { name: "ميلك شيك فراولة", type: "ميلك تشك", price: 55, image: "https://www.alwafd.news/Upload/libfiles/296/7/712.jpeg" },
    { name: "ميلك شيك شوكولاتة", type: "ميلك تشك", price: 60, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfC_7BL1GOugrHQLbpuv6z5kaL8N_6IgkxQ&s" },
    { name: "ميلك شيك فانيليا", type: "ميلك تشك", price: 55, image: "https://storage.de.cloud.ovh.net/v1/AUTH_822fb2b5f08942e5991f0bbd03a121b7/minidine-prod/zaytoun-sweets/items/thumbnail/5421690181382_lg.png" },
    { name: "ميلك شيك نوتيلا", type: "ميلك تشك", price: 65, image: "https://static.aljamila.com/styles/640x426/public/salted-pretzel-nutella-fudge-milkshake-with-malted-milk-whipped-cream-9.jpg?h=252f27fa" },
    { name: "ميلك شيك مانجا", type: "ميلك تشك", price: 63, image: "https://www.justfood.tv/UserFiles/MAN13122023.jpg" },
    { name: "ميلك شيك اوريو", type: "ميلك تشك", price: 55, image: "https://zerolounge.link/wpconten/uploads/2023/12/%D9%85%D9%8A%D9%84%D9%83-%D8%B4%D9%8A%D9%83-%D8%A7%D9%88%D8%B1%D9%8A%D9%883.000.jpg" },
    { name: "ميلك شيك ريد بيري", type: "ميلك تشك", price: 55, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0VSLIUSDD0v7zU-OgYPgyTu-bNl6q8_New&s" },
    { name: "ميلك شيك بلو بيري", type: "ميلك تشك", price: 55, image: "https://cdn.vatrin.app/pastarito/mylk-shyk-blw-byry-0-1726775635657.jpg?quality=75&width=1000" },
    { name: "ميلك شيك كيت كتات", type: "ميلك تشك", price: 70, image: "https://maincdn3.mnasaticdn.com/uploads/product_image/1321/product_01617799089_thumb.jpg" },
    { name: "ميلك شيك كيندر", type: "ميلك تشك", price: 70, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdgevjJNn0rLQE4XN83QPIPPKZkCdQDbJnNA&s"},
    { name: "ميلك شيك سنيكرز", type: "ميلك تشك", price: 70, image: "https://media.elbalad.news/2024/10/large/1060/8/92.jpg" },
  
    // ديزرت
    { name: "وافل", type: "ديزرت",  image: "https://d1w12by6syh8ys.cloudfront.net/media/catalog/product/cache/7fedf0e3853b01c200bc50c01bc9a2d2/f/r/fruitsalad_waffle_mix_1.jpg" },
    { name: "بان كيك", type: "ديزرت",  image: "https://mayarcoffee.com/wp-content/uploads/2019/06/D8297048-5DCB-4142-84CD-FD2BAB571589.jpeg" },
    { name: "كب كيك", type: "ديزرت",  image: "assets/img/كب كيك.jpg" },
    { name: "طاجن نوتيلا", type: "ديزرت",  image: "https://media.elwatannews.com/media/img/mediaarc/large/6447844151712158470.jpg" },
    
    // ذبادي فواكة 
    { name: "ذبادي فواكة", type: "ذبادي فواكة", price: 55, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6wkx_cy-TgEXEPZAXPCE90T-WUf317pSP3Q&s" },
    { name: "ذبادي فراولة", type: "ذبادي فواكة", price: 45, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJySY1JjKK43V67EJY0VqNmYNKbjomJJT4xVFq8JPvAFEswqKfHabFYA-1wALnl0p-0ZM&usqp=CAU" },
    { name: "ذبادي توت", type: "ذبادي فواكة", price: 55, image: "https://media.gemini.media/img/large/2015/6/8/2015_6_8_13_6_57_220.jpg" },
    { name: "ذبادي موز", type: "ذبادي فواكة", price: 45, image: "https://sonaistore.com/wp-content/uploads/2022/04/shutterstock_1589333425-scaled.jpg" },
    { name: "ذبادي مانجا",type: "ذبادي فواكة",price: 45 , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQHp3tCK3HXQHGjOnUY0ET3H9yeuSrM-tRA&s"}
    

  ];
// Initialize loader
const loader = document.getElementById('loader');

// Show loader immediately
function showLoader() {
  loader.style.display = 'flex';
  loader.style.opacity = '1';
}

// Hide loader with fade effect
function hideLoader() {
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);
}

// Load images efficiently
function preloadImages(images) {
  return new Promise((resolve) => {
    const loadedImages = [];
    let loadedCount = 0;
    
    images.forEach(img => {
      const image = new Image();
      image.onload = () => {
        loadedImages.push(img);
        loadedCount++;
        if (loadedCount === images.length) {
          resolve(loadedImages);
        }
      };
      image.onerror = () => {
        console.warn(`Failed to load image: ${img}`);
        loadedCount++;
        if (loadedCount === images.length) {
          resolve(loadedImages);
        }
      };
      image.src = img;
    });
  });
}

// Get all product images
const productImages = products.map(product => product.image);

// Display products when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  showLoader();
  preloadImages(productImages).then(() => {
    hideLoader();
    displayProducts();
    filterProducts('all');
  }).catch(error => {
    console.error('Error preloading images:', error);
    hideLoader();
    displayProducts();
  });
});

// Initial page load
window.addEventListener('load', () => {
  // Show loader immediately
  showLoader();
  // Preload images before showing content
  preloadImages(productImages).then(() => {
    hideLoader();
    displayProducts();
    filterProducts('all');
  }).catch(error => {
    console.error('Error preloading images:', error);
    hideLoader();
    displayProducts();
  });
});

// Filter Products
function filterProducts(category) {
  const productsContainer = document.querySelector('.products');
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(p => p.type === category);

  // Clear existing products
  productsContainer.innerHTML = '';
  
  // Display filtered products
  filteredProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.setAttribute('data-name', product.name);
    productCard.setAttribute('data-type', product.type);

    let weightInfo = '';
    if (product.type === 'البن' && product.weight) {
      weightInfo = `<p class="weight-info">${product.weight}</p>`;
    }

    let saucesButton = '';
    let saucesListHtml = '';
    if (sauces[product.type]) {
      saucesListHtml = `
        <div class="sauces-list" style="display: none;">
          ${sauces[product.type].map(sauce => `
            <button onclick="addSauceToOrder('${sauce.name}', ${sauce.price}, '${product.name}')">${sauce.name} (+${sauce.price} جنيه)</button>
          `).join('')}
        </div>
      `;
      saucesButton = `<button class="show-sauces">اختر الصوص</button>`;
    }

    const productSauces = selectedSauces[product.name] || [];
    const totalSaucePrice = productSauces.reduce((sum, s) => sum + s.price, 0);
    const sauceText = productSauces.length > 0 ? `
صوصات: ${productSauces.map(s => `${s.name} (+${s.price} جنيه)`).join(', ')}` : '';
    const totalPrice = product.price + totalSaucePrice;

    const whatsappMessage = encodeURIComponent(`مرحباً، أريد طلب:\n${product.name} بسعر ${product.price} جنيه${sauceText}\n\nالعنوان: [أدخل العنوان هنا]\n\nشكراً`);
    const whatsappLink = `https://wa.me/+201156952825?text=${whatsappMessage}`;

    // Create price element for all items except desserts and coffee beans
    const priceElement = !(product.type === 'ديزرت' || product.type === 'البن') ? `<p>${product.price} جنيه</p>` : '';

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      ${weightInfo}
      ${priceElement}
      ${saucesListHtml}
      ${saucesButton}
      <a href="${whatsappLink}" target="_blank" class="order-button" id="order-${product.name.replace(/\s+/g, '-')}">اطلب الآن</a>
    `;

    const showSaucesButton = productCard.querySelector('.show-sauces');
    const saucesList = productCard.querySelector('.sauces-list');

    if (showSaucesButton && saucesList) {
      showSaucesButton.addEventListener('click', (e) => {
        e.preventDefault();
        const visible = saucesList.style.display === 'block';
        saucesList.style.display = visible ? 'none' : 'block';
        showSaucesButton.textContent = visible ? 'اختر الصوص' : 'إخفاء الصوصات';
      });
    }

    productsContainer.appendChild(productCard);
  });
}

function displayProducts() {
  const productsContainer = document.querySelector('.products');
  productsContainer.innerHTML = '';

  const selectedSauces = JSON.parse(localStorage.getItem('selectedSauces') || '{}');

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.setAttribute('data-name', product.name);
    productCard.setAttribute('data-type', product.type);

    let weightInfo = '';
    if (product.type === 'البن' && product.weight) {
      weightInfo = `<p class="weight-info">${product.weight}</p>`;
    }

    let saucesButton = '';
    let saucesListHtml = '';
    if (sauces[product.type]) {
      saucesListHtml = `
        <div class="sauces-list" style="display: none;">
          ${sauces[product.type].map(sauce => `
            <button onclick="addSauceToOrder('${sauce.name}', ${sauce.price}, '${product.name}')">${sauce.name} (+${sauce.price} جنيه)</button>
          `).join('')}
        </div>
      `;
      saucesButton = `<button class="show-sauces">اختر الصوص</button>`;
    }

    const productSauces = selectedSauces[product.name] || [];
    let totalSaucePrice = productSauces.reduce((sum, sauce) => sum + sauce.price, 0);
    let sauceText = productSauces.length > 0 ? `\nصوصات: ${productSauces.map(s => `${s.name} (+${s.price} جنيه)`).join(', ')}` : '';
    let totalPrice = product.price + totalSaucePrice;

    const whatsappMessage = encodeURIComponent(`مرحباً، أريد طلب:\n${product.name} بسعر ${product.price} جنيه${sauceText}\n\nالعنوان: [أدخل العنوان هنا]\n\nشكراً`);
    const whatsappLink = `https://wa.me/+201156952825?text=${whatsappMessage}`;

    // Create price element for all items except desserts and coffee beans
    const priceElement = !(product.type === 'ديزرت' || product.type === 'البن') ? `<p>${product.price} جنيه</p>` : '';

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      ${weightInfo}
      ${priceElement}
      ${saucesListHtml}
      ${saucesButton}
      <a href="${whatsappLink}" target="_blank" class="order-button" id="order-${product.name.replace(/\s+/g, '-')}">اطلب الآن</a>
    `;

    const showSaucesButton = productCard.querySelector('.show-sauces');
    const saucesList = productCard.querySelector('.sauces-list');
    if (showSaucesButton && saucesList) {
      showSaucesButton.addEventListener('click', (e) => {
        e.preventDefault();
        const visible = saucesList.style.display === 'block';
        saucesList.style.display = visible ? 'none' : 'block';
        showSaucesButton.textContent = visible ? 'اختر الصوص' : 'إخفاء الصوصات';
      });
    }

    productsContainer.appendChild(productCard);
  });
}

function addSauceToOrder(sauceName, saucePrice, productName) {
  const selectedSauces = JSON.parse(localStorage.getItem('selectedSauces') || '{}');
  const productSauces = selectedSauces[productName] || [];

  const exists = productSauces.find(s => s.name === sauceName);
  if (exists) {
    alert('هذا الصوص تم اختياره بالفعل');
    return;
  }

  productSauces.push({ name: sauceName, price: saucePrice });
  selectedSauces[productName] = productSauces;
  localStorage.setItem('selectedSauces', JSON.stringify(selectedSauces));

  updateWhatsAppLink(productName);
}

function updateWhatsAppLink(productName) {
  const product = products.find(p => p.name === productName);
  const selectedSauces = JSON.parse(localStorage.getItem('selectedSauces') || '{}');
  const productSauces = selectedSauces[productName] || [];

  const totalSaucePrice = productSauces.reduce((sum, sauce) => sum + sauce.price, 0);
  const sauceText = productSauces.length > 0 ? `\nصوصات: ${productSauces.map(s => `${s.name} (+${s.price} جنيه)`).join(', ')}` : '';
  const totalPrice = product.price + totalSaucePrice;

  const whatsappMessage = encodeURIComponent(`مرحباً، أريد طلب:\n${product.name} بسعر ${product.price} جنيه${sauceText}\n\nالسعر الإجمالي: ${totalPrice} جنيه\nالعنوان: [أدخل العنوان هنا]\n\nشكراً`);
  const whatsappLink = `https://wa.me/+201156952825?text=${whatsappMessage}`;

  const button = document.querySelector(`#order-${product.name.replace(/\s+/g, '-')}`);
  if (button) {
    button.href = whatsappLink;
    button.textContent = `اطلب الآن (${totalPrice} جنيه)`;
  }
}

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dotsContainer = document.querySelector('.slider-dots');

slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
  dot.addEventListener('click', () => goToSlide(i));
});

function updateDots() {
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function goToSlide(index) {
  slides[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  updateDots();
}

nextBtn.addEventListener('click', () => {
  let nextIndex = (currentSlide + 1) % slides.length;
  goToSlide(nextIndex);
});
prevBtn.addEventListener('click', () => {
  let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
  goToSlide(prevIndex);
});

setInterval(() => {
  let nextIndex = (currentSlide + 1) % slides.length;
  goToSlide(nextIndex);
}, 10000);

// Filter Products
function filterProducts(category) {
  const productsContainer = document.querySelector('.products');
  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(p => p.type === category);

  // Clear existing products
  productsContainer.innerHTML = '';
  
  // Display filtered products
  filteredProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.setAttribute('data-name', product.name);
    productCard.setAttribute('data-type', product.type);

    let weightInfo = '';
    if (product.type === 'البن' && product.weight) {
      weightInfo = `<p class="weight-info">${product.weight}</p>`;
    }

    let saucesButton = '';
    let saucesListHtml = '';
    if (sauces[product.type]) {
      saucesListHtml = `
        <div class="sauces-list" style="display: none;">
          ${sauces[product.type].map(sauce => `
            <button onclick="addSauceToOrder('${sauce.name}', ${sauce.price}, '${product.name}')">${sauce.name} (+${sauce.price} جنيه)</button>
          `).join('')}
        </div>
      `;
      saucesButton = `<button class="show-sauces">اختر الصوص</button>`;
    }

    const productSauces = selectedSauces[product.name] || [];
    const totalSaucePrice = productSauces.reduce((sum, s) => sum + s.price, 0);
    const sauceText = productSauces.length > 0 ? `
صوصات: ${productSauces.map(s => `${s.name} (+${s.price} جنيه)`).join(', ')}` : '';
    const totalPrice = product.price + totalSaucePrice;

    const whatsappMessage = encodeURIComponent(`مرحباً، أريد طلب:\n${product.name} بسعر ${product.price} جنيه${sauceText}\n\nالعنوان: [أدخل العنوان هنا]\n\nشكراً`);
    const whatsappLink = `https://wa.me/+201156952825?text=${whatsappMessage}`;

    // Create price element for all items except desserts and coffee beans
    const priceElement = !(product.type === 'ديزرت' || product.type === 'البن') ? `<p>${product.price} جنيه</p>` : '';

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      ${weightInfo}
      ${priceElement}
      ${saucesListHtml}
      ${saucesButton}
      <a href="${whatsappLink}" target="_blank" class="order-button" id="order-${product.name.replace(/\s+/g, '-')}">اطلب الآن</a>
    `;

    const showSaucesButton = productCard.querySelector('.show-sauces');
    const saucesList = productCard.querySelector('.sauces-list');

    if (showSaucesButton && saucesList) {
      showSaucesButton.addEventListener('click', (e) => {
        e.preventDefault();
        const visible = saucesList.style.display === 'block';
        saucesList.style.display = visible ? 'none' : 'block';
        showSaucesButton.textContent = visible ? 'اختر الصوص' : 'إخفاء الصوصات';
      });
    }

    productsContainer.appendChild(productCard);
  });
}

// Scroll Gallery Auto Scroll
const scrollGallery = document.querySelector('.scroll-gallery');

if (scrollGallery) {
  const items = Array.from(scrollGallery.children);
  const cloneWrapper = document.createDocumentFragment();

  // نكرر العناصر مرة واحدة فقط لخلق تأثير اللانهاية
  items.forEach(item => {
    const clone = item.cloneNode(true);
    cloneWrapper.appendChild(clone);
  });

  scrollGallery.appendChild(cloneWrapper);

  let scrollSpeed = 1;

  function autoScrollGallery() {
    scrollGallery.scrollLeft += scrollSpeed;

    const maxScroll = scrollGallery.scrollWidth / 2;

    if (scrollGallery.scrollLeft >= maxScroll) {
      // بدل ما نرجع لـ 0، نرجع لنفس الموضع بالنصف - بدون أن يشعر المستخدم
      scrollGallery.scrollLeft = scrollGallery.scrollLeft - maxScroll;
    }
  }

  setInterval(autoScrollGallery, 20);
}

