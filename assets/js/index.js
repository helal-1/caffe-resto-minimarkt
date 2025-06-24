const sauces = {
  "ديزرت": [
    { name: "نوتيلا", price: 35 },
    { name: "شوكولاتة", price: 35 },
    { name: "لوتس", price: 40 },
    { name: "شيكولاته وايت", price: 35 },
    { name: "بستاشيو", price: 45 },
    { name: "فراولة", price: 35 },
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
    { name: "دبل اسبريسوا", type: "قهوة", price: 35, image: "assets/img/بل اسبريسوا.avif" },
    { name: "بن فاتح", type: "قهوة", price: 20, image: "assets/img/بن فاتح فنجان.webp" },
    { name: "بن وسط", type: "قهوة", price: 20, image: "assets/img/بن وسط فنجان.webp"},
    { name: "بن غامق", type: "قهوة", price: 20, image: "assets/img/بن غامق.jpg" },
    { name: " قهوة فرنساوي ", type: "قهوة", price: 30, image: "assets/img/فرنساوي.jpg" },
    { name: "قهوة بندق", type: "قهوة", price: 30, image: "assets/img/قهوة بندق.webp" },
    { name: "قهوة شيكولاته", type: "قهوة", price: 30, image: "assets/img/قهوة شيكولاته.jpeg" },
    { name: "أميريكانو", type: "قهوة", price: 30, image: "assets/img/امريكانو.jpg" },
    { name: "موكا", type: "قهوة", price: 40, image: "assets/img/موكا_1.jpeg" },
    { name: "اسبريسو ميكاتو", type: "قهوة", price: 38, image: "assets/img/اسبريسوا ميكاتو.jpg" },

    // كابتشينو
    { name: "نسكافيه بلاك", type: "كابتشينو", price: 30, image: "assets/img/بن اسبريسوا.jpg" },
    { name: "كابتشينو موكا", type: "كابتشينو", price: 35, image: "assets/img/موكا_1.jpeg" },
    { name: "كابتشينو فانيليا", type: "كابتشينو", price: 35, image: "assets/img/ميلك اتشك فانيليا.png" },
    { name: "كابتشينو لاتيه", type: "كابتشينو", price: 35, image: "assets/img/لاتيه.jpeg" },
    { name: "ميكاتو فيليفر", type: "كابتشينو", price: 40, image: "assets/img/اسبريسوا ميكاتو.jpg" },
    { name: "لاتيه", type: "كابتشينو", price: 35, image: "assets/img/لاتيه.jpeg" },
    { name: "هوت شوكلت", type: "كابتشينو", price: 35, image: "assets/img/ميلك اتشك شيكولاته.jpeg" },
    { name: "كابتشينو سينجل", type: "كابتشينو", price: 35, image: "assets/img/كابتشينو.jpeg" },
    { name: "كابتشينو دبل", type: "كابتشينو", price: 50, image: "assets/img/كابتشينو دبل.jpeg" },

    // ايس كوفي
    { name: "ايس كوفي", type: "ايس كوفي", price: 40, image: "assets/img/ايس اسبريسو.jpg" },
    { name: "ايس كابتشينو", type: "ايس كوفي", price: 40, image: "assets/img/ايس كابتشينو.webp" },
    { name: "ايس اسبريسو", type: "ايس كوفي", price: 55, image: "assets/img/ايس كوفي.webp" },
    { name: "ايس موكا", type: "ايس كوفي", price: 40, image: "assets/img/ايس موكا.webp" },
    { name: "ايس لاتيه", type: "ايس كوفي", price: 40, image: "assets/img/ايس لاتيه.webp" },
    { name: "ايس فانيليا", type: "ايس كوفي", price: 40, image: "assets/img/ايس فانيليا.jpeg" },
    { name: "ايس شوكولاتة", type: "ايس كوفي", price: 40, image: "assets/img/ايس شوكولاتة.jpg" },
    { name: "ايس نوتيلا", type: "ايس كوفي", price: 40, image: "assets/img/ايس نوتيلا.webp" },
    { name: "ايس كراميل", type: "ايس كوفي", price: 40, image: "assets/img/ايس كراميل.jpeg" },

    // عصاير فريش
    { name: "عصير بطيخ", type: "عصاير فريش", price: 35, image: "assets/img/131745-عصير-بطيخ-(5).webp" },
    { name: "عصير مانجا", type: "عصاير فريش", price: 40, image: "assets/img/مانجا.jpeg" },
    { name: "عصير فراولة", type: "عصاير فريش", price: 35, image: "assets/img/فراولة.jpeg" },
    { name: "عصير جوافة", type: "عصاير فريش", price: 35, image: "assets/img/جوافة.jpeg" },
    { name: "عصير موز", type: "عصاير فريش", price: 35, image: "assets/img/موز.jpeg" },
    { name: "عصير كيوي", type: "عصاير فريش", price: 50, image: "assets/img/كيوي.jpg" },
    { name: "عصير ليمون", type: "عصاير فريش", price: 30, image: "assets/img/ليمون.jpg" },
    { name: "عصير اناناس", type: "عصاير فريش", price: 35, image: "assets/img/اناناس.jpg.webp" },
    { name: "عصير افوكادو", type: "عصاير فريش", price: 65, image: "assets/img/افوكادو.jpg" },
  
    // موخيتو
    { name: "موخيتو مانجا", type: "موخيتو", price: 50, image: "assets/img/1موخيتو مانجا.jpeg" },
    { name: "موخيتو فراولة", type: "موخيتو", price: 50, image: "assets/img/موخيتو فراولة.jpg" },
    { name: "موخيتو ليمون نعناع", type: "موخيتو", price: 50, image: "assets/img/موخيتو ليمون نعناع.jpeg" },
    { name: "موخيتو مكس بيري", type: "موخيتو", price: 55, image: "assets/img/موخيتو مكس بيري.jpg" },
    { name: "موخيتو توت", type: "موخيتو", price: 55, image: "assets/img/موخيتو توت.jpeg" },
    { name: "موخيتو بلو بيري", type: "موخيتو", price: 50, image: "assets/img/موخيتو بلو بيري.jpeg" },
  
    // البن
    { name: "بن فاتح", type: "البن",  weight: "1k", image: "assets/img/بن فاتح.webp" },
    { name: "بن وسط", type: "البن",  weight: "1k", image: "assets/img/بن وسط.jpeg" },
    { name: "بن غامق", type: "البن",  weight: "1k", image: "assets/img/بن غامق.jpeg" },
    { name: "بن برازيلي ", type: "البن",  weight: "1k", image: "assets/img/بن برازيلي.jpeg" },
    { name: "بن كولمبي", type: "البن",  weight: "1k", image: "assets/img/كولمبي.webp" },
    { name: "بن حبشي", type: "البن",  weight: "1k", image: "assets/img/بن حبشي.webp" },
    { name: "بن يمني", type: "البن",  weight: "1k", image: "assets/img/بن يمني.jpg" },
    { name: "بن هندي", type: "البن", weight: "1k", image: "assets/img/هندي بن.jpeg" },
    { name: "بن اسيريسوا", type: "البن",  weight: "1k", image: "assets/img/بن اسبريسوا.jpg" },
    { name: "بن اندونيسي", type: "البن",  weight: "1k", image: "assets/img/بن اندونسي.jpg" },
  
    // ميلك تشك
    { name: "ميلك شيك فراولة", type: "ميلك تشك", price: 55, image: "assets/img/ميلك شك فراولة.jpeg" },
    { name: "ميلك شيك شوكولاتة", type: "ميلك تشك", price: 60, image: "assets/img/ميلك اتشك شيكولاته.jpeg" },
    { name: "ميلك شيك فانيليا", type: "ميلك تشك", price: 55, image: "assets/img/ميلك اتشك فانيليا.png" },
    { name: "ميلك شيك نوتيلا", type: "ميلك تشك", price: 65, image: "assets/img/ميلك اتشك نوتيلا.jpg" },
    { name: "ميلك شيك مانجا", type: "ميلك تشك", price: 63, image: "assets/img/ميلك اتشك مانجا.webp" },
    { name: "ميلك شيك اوريو", type: "ميلك تشك", price: 55, image: "assets/img/ميلك-شيك-اوريو3.000.jpg" },
    { name: "ميلك شيك ريد بيري", type: "ميلك تشك", price: 55, image: "assets/img/ميلك اتشك ريد بيري.jpeg" },
    { name: "ميلك شيك بلو بيري", type: "ميلك تشك", price: 55, image: "assets/img/ميلك اتشك بلو بيري.webp" },
    { name: "ميلك شيك كيت كتات", type: "ميلك تشك", price: 70, image: "assets/img/ميلك اتشك كيت كات.jpg" },
    { name: "ميلك شيك كيندر", type: "ميلك تشك", price: 70, image: "assets/img/ميلك اتشك كيندر.jpeg" },
    { name: "ميلك شيك سنيكرز", type: "ميلك تشك", price: 70, image: "assets/img/ميلك اتشك اسنيكرز.jpg" },
  
    // ديزرت
    { name: "وافل", type: "ديزرت",  image: "assets/img/وافل.jpg" },
    { name: "بان كيك", type: "ديزرت",  image: "assets/img/بان كيك.jpeg" },
    { name: "كب كيك", type: "ديزرت",  image: "assets/img/كب كيك.jpg" },
    { name: "طاجن نوتيلا", type: "ديزرت",  image: "assets/img/طاجن نوتيلا.jpg" },
    
    // ذبادي فواكة 
    { name: "ذبادي فواكة", type: "ذبادي فواكة", price: 55, image: "assets/img/ذبادي فواكهة.jpeg" },
    { name: "ذبادي فراولة", type: "ذبادي فواكة", price: 45, image: "assets/img/ذبادي فراولة.jpeg" },
    { name: "ذبادي توت", type: "ذبادي فواكة", price: 55, image: "assets/img/ذبادي توت.jpg" },
    { name: "ذبادي موز", type: "ذبادي فواكة", price: 45, image: "assets/img/ذبادي موز.jpg" },
    { name: "ذبادي مانجا",type: "ذبادي فواكة",price: 45 , image:"assets/img/ذبادي مانجا.jpeg"}
    

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

  // Add selected class to the button
  const button = document.querySelector(`button[onclick="addSauceToOrder('${sauceName}', ${saucePrice}, '${productName}')"]`);
  if (button) {
    button.classList.add('selected');
  }

  updateWhatsAppLink(productName);
}

function updateWhatsAppLink(productName) {
  const product = products.find(p => p.name === productName);
  const selectedSauces = JSON.parse(localStorage.getItem('selectedSauces') || '{}');
  const productSauces = selectedSauces[productName] || [];

  const totalSaucePrice = productSauces.reduce((sum, sauce) => sum + sauce.price, 0);
  const sauceText = productSauces.length > 0 ? `\nصوصات: ${productSauces.map(s => `${s.name} (+${s.price} جنيه)`).join(', ')}` : '';
  const totalPrice = product.type === 'ديزرت' ? totalSaucePrice : product.price + totalSaucePrice;

  const whatsappMessage = encodeURIComponent(`مرحباً، أريد طلب:\n${product.name}${sauceText}\n\nالسعر الإجمالي: ${totalPrice} جنيه\nالعنوان: [أدخل العنوان هنا]\n\nشكراً`);
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

  let scrollSpeed = 200;

  function autoScrollGallery() {
    scrollGallery.scrollLeft += scrollSpeed;

    const maxScroll = scrollGallery.scrollWidth / 2;

    if (scrollGallery.scrollLeft == maxScroll) {
      // بدل ما نرجع لـ 0، نرجع لنفس الموضع بالنصف - بدون أن يشعر المستخدم
      scrollGallery.scrollLeft = 0
    }
  }

  setInterval(autoScrollGallery, 1000); // Change to 1 second interval
}
