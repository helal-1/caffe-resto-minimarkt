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
    { name: "عصير بطيخ", type: "عصاير فريش", price: 50, image: "https://img.youm7.com/ArticleImgs/2019/6/25/131745-%D8%B9%D8%B5%D9%8A%D8%B1-%D8%A8%D8%B7%D9%8A%D8%AE-(5).jpg" },
    { name: "عصير مانجا", type: "عصاير فريش", price: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvosGP3NaA20LZ5r2bPwXn6odvAlZQCqmiw&s" },
    { name: "عصير فراولة", type: "عصاير فريش", price: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsamsc1rV6sah8k6jqrmCMaHJ1jeR32HNw_w&s" },
    { name: "عصير جوافة", type: "عصاير فريش", price: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXK1OILQi3_paCe1n1tgFX1xI38OSV6SkzQ&s" },
    { name: "عصير موز", type: "عصاير فريش", price: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2cPFXYdfP2w4754_xQP24LIisOIV2EdlHNQ&s" },
    { name: "عصير كيوي", type: "عصاير فريش", price: 50, image: "https://static.webteb.net/images/content/tbl_articles_article_29526_56900ea1b4c-7bbb-4944-8ea5-a06df1f4ab7e.jpg" },
    { name: "عصير ليمون", type: "عصاير فريش", price: 45, image: "https://kitchen.sayidaty.net/uploads/small/2d/2d3ca110e699ced93bfdd6f103ab930c_w750_h750.jpg" },
    { name: "عصير اناناس", type: "عصاير فريش", price: 55, image: "https://cdn.altibbi.com/cdn/cache/1000x500/image/2023/06/07/c38439f34b982f04ac34622c913ccb27.jpg.webp" },
    { name: "عصير افوكادو", type: "عصاير فريش", price: 55, image: "https://kitchen.sayidaty.net/uploads/small/d4/d488339775260323285031fec334db64_w750_h500.jpg" },
  
    // موخيتو
    { name: "موخيتو مانجا", type: "موخيتو", price: 60, image: "https://su24su.com/wp-content/uploads/2023/12/1701515896_641_%D9%83%D9%8A%D9%81-%D8%A7%D8%B3%D9%88%D9%8A-%D8%A7%D9%84%D9%85%D9%88%D9%87%D9%8A%D8%AA%D9%88-%D8%A8%D8%A7%D9%84%D8%B3%D9%81%D9%86-%D8%A7%D8%A8.jpeg" },
    { name: "موخيتو فراولة", type: "موخيتو", price: 60, image: "https://app.menusbee.com/storage/2024/10/f867b860-61a9-47b7-ab0b-dad586b99367.jpg" },
    { name: "موخيتو ليمون", type: "موخيتو", price: 55, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPsWOA7Ymje09IuX9NxAajIiJfeFegywGkw&s" },
    { name: "موخيتو نعناع", type: "موخيتو", price: 55, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRl0ctIlz8SORsJIQbpzelUb38UcrhynkyQ&s"},
    { name: "موخيتو توت", type: "موخيتو", price: 58, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSetIeD9CbkbqvfXXhqSoXdljZRuFVrpY8ItA&s" },
    { name: "موخيتو بلو بيري", type: "موخيتو", price: 57, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCc1C54TpTKw13-mkSnVSu_TQxF_dJpt3ODg&s" },
  
    // البن
    { name: "بن فاتح", type: "البن", price: 90, image: "https://media.gemini.media/img/large/2020/11/12/2020_11_12_18_11_52_572.jpg" },
    { name: "بن وسط", type: "البن", price: 95, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa5vjeXa4hG3_0BiuWKqQSRd6igxbWTr4Agw&s" },
    { name: "بن غامق", type: "البن", price: 110, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqPg2mEaObA86n4jxcivCGZn3bKrzs0y-FA&s"},
    { name: "بن برازيلي ", type: "البن", price: 85, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzIVwi6Mg1oL2-qaczn-SOX-nuxfZff08wMQ&s" },
    { name: "بن كولمبي", type: "البن", price: 100, image: "https://cdn.salla.sa/hDbo8JP2P2KKjzgzvhFstO0PTjHNROQbAvsytetT.jpg" },
    { name: "بن حبشي", type: "البن", price: 105, image: "https://cdn.salla.sa/Rbly/dfe41593-790a-41d1-93d9-4bfc04c2a931-1000x666.66666666667-zS1o9iK5Y5h3e17XpYuKiA0kKrvt7g2bvUCWMl60.png"},
    { name: "بن يمني", type: "البن", price: 80, image: "https://ozostore.net/wp-content/uploads/2024/09/1000152378.jpg" },
    { name: "بن هندي", type: "البن", price: 92, image: "https://www.madinatalqahwa.com/wp-content/uploads/2023/11/cooling-tray-with-brown-roasted-coffee-beans-2022-04-07-12-42-43-utc.jpg" },
    { name: "بن اسيريسوا", type: "البن", price: 98, image: "https://cdn.alweb.com/thumbs/alqhwah/article/fit710x532/%D8%AA%D8%B9%D8%B1%D9%81-%D8%B9%D9%84%D9%89-%D9%82%D9%87%D9%88%D8%A9-%D8%A5%D8%B3%D8%A8%D8%B1%D9%8A%D8%B3%D9%88-%D9%88%D8%B9%D9%84%D9%89-%D8%A3%D9%87%D9%85-%D9%85%D8%A7-%D9%8A%D9%85%D9%8A%D8%B2%D9%87%D8%A7.jpg" },
    { name: "بن اندونيسي", type: "البن", price: 87, image: "https://media.gemini.media/img/large/2015/10/1/2015_10_1_10_55_30_395.jpg" },
  
    // ميلك تشك
    { name: "ميلك شيك فراولة", type: "ميلك تشك", price: 55, image: "https://www.alwafd.news/Upload/libfiles/296/7/712.jpeg" },
    { name: "ميلك شيك شوكولاتة", type: "ميلك تشك", price: 60, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfC_7BL1GOugrHQLbpuv6z5kaL8N_6IgkxQ&s" },
    { name: "ميلك شيك فانيليا", type: "ميلك تشك", price: 55, image: "https://storage.de.cloud.ovh.net/v1/AUTH_822fb2b5f08942e5991f0bbd03a121b7/minidine-prod/zaytoun-sweets/items/thumbnail/5421690181382_lg.png" },
    { name: "ميلك شيك نوتيلا", type: "ميلك تشك", price: 65, image: "https://static.aljamila.com/styles/640x426/public/salted-pretzel-nutella-fudge-milkshake-with-malted-milk-whipped-cream-9.jpg?h=252f27fa" },
    { name: "ميلك شيك مانجا", type: "ميلك تشك", price: 63, image: "https://www.justfood.tv/UserFiles/MAN13122023.jpg" },
  
    // ديزرت
    // { name: "طاجن نوتيلا", type: "ديزرت", price: 45, image: "https://media.elwatannews.com/media/img/mediaarc/large/6447844151712158470.jpg" },
    // { name: "بان كيك", type: "ديزرت", price: 48, image: "https://images.unsplash.com/photo-1586782646544-d01a7a7000e8?auto=format&fit=crop&w=400&h=300" },
    // { name: "وافل", type: "ديزرت", price: 50, image: "https://images.unsplash.com/photo-1588817981397-54a7a7bfcf8d?auto=format&fit=crop&w=400&h=300" },

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
  loader.style.transition = 'opacity 0.5s ease';
  loader.style.opacity = '0';

  // Remove loader completely after fade
  setTimeout(() => {
    loader.style.display = 'none';
  }, 4000);
}

// Load images efficiently
function preloadImages(images) {
  const promises = images.map(img => {
    return new Promise((resolve) => {
      const image = new Image();
      image.onload = resolve;
      image.src = img;
    });
  });
  return Promise.all(promises);
}

// Get all product images
const productImages = products.map(product => product.image);

// Preload images before showing content
Promise.all([
    preloadImages(productImages),
    preloadImages([
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5'
    ])
  ]).then(() => {
    hideLoader();
    displayProducts(); // ✅ هنا فقط
  });
  
// Initial page load
window.addEventListener('load', () => {
  // Show loader immediately
  showLoader();
});

//   products display 
function displayProducts() {
    const productsContainer = document.querySelector('.products');
    let html = '';
    let phone = "+20 115 695 2825";
    products.forEach(product => {
      const whatsappMessage = encodeURIComponent(`مرحباً، أريد طلب:\n${product.name} بسعر ${product.price} جنيه\n\nالعنوان: [أدخل العنوان هنا]\n\nشكراً`);
      const whatsappLink = `https://wa.me/${phone}?text=${whatsappMessage}`;
      html += `
        <div class="product-card" data-type="${product.type}">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price} جنيه</p>
          <a href="${whatsappLink}" target="_blank">اطلب الآن</a>
        </div>
      `;
    });
    productsContainer.innerHTML = html;
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
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    const type = card.getAttribute('data-type');
    card.style.display = category === 'all' || type === category ? 'block' : 'none';
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

