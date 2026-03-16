(function () {
  'use strict';

  
  function normalizeKey(s) {
    return String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  // TOAST NOTIFICATION 
  function ensureToastElement() {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    return toast;
  }

  function showToast(message, type = 'default') {
    const toast = ensureToastElement();
    toast.textContent = message;

    if (type === 'success') toast.style.backgroundColor = '#28a745';
    else if (type === 'error') toast.style.backgroundColor = '#dc3545';
    else if (type === 'info') toast.style.backgroundColor = '#007bff';
    else toast.style.backgroundColor = '#333';

    toast.classList.remove('show');
    toast.offsetWidth;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast("Thank you for your message! We'll get back to you soon.", 'success');
      contactForm.reset();
    });
  }

  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('Thank you! Your visit has been booked at CatCaff.', 'success');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 3200);
    });
  }

  // MENU TABS
  const tabButtons = document.querySelectorAll('.menu-categories button');
  const categories = document.querySelectorAll('.menu-category-items');
  if (tabButtons && tabButtons.length) {
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');

        categories.forEach(cat => cat.classList.remove('active'));
        const target = button.dataset.category;
        if (target) {
          const el = document.getElementById(target);
          if (el) el.classList.add('active');
        }
      });
    });
  }

  // CAT INFO MODAL
  const cats = {
    mochi: { name: 'Mochi', img: 'Pictures/Mochi.jpg', info: 'Mochi is playful and curious.' },
    luna: { name: 'Luna', img: 'Pictures/Luna.jpg', info: 'Luna is calm and affectionate.' },
    oliver: { name: 'Oliver', img: 'Pictures/Oliver.jpg', info: 'Oliver is adventurous and friendly.' }
  };

  const catModal = document.getElementById('catModal');
  const catImg = document.getElementById('catImg');
  const catName = document.getElementById('catName');
  const catInfo = document.getElementById('catInfo');
  const catClose = catModal ? catModal.querySelector('.close') : null;

  if (document.querySelectorAll('.cats .card').length && catModal) {
    document.querySelectorAll('.cats .card').forEach(card => {
      card.addEventListener('click', () => {
        const catKeyRaw = card.dataset.cat;
        const catKey = normalizeKey(catKeyRaw);
        const cat = cats[catKey] || cats[catKeyRaw]; 
        if (!cat) {
          showToast('Cat info not found.', 'info');
          return;
        }
        if (catImg) catImg.src = cat.img;
        if (catName) catName.textContent = cat.name;
        if (catInfo) catInfo.textContent = cat.info;
        catModal.style.display = 'flex';
      });
    });

    if (catClose) {
      catClose.addEventListener('click', () => {
        catModal.style.display = 'none';
      });
    }

    window.addEventListener('click', e => {
      if (e.target === catModal) catModal.style.display = 'none';
    });
  }

  //MENU ITEM MODAL
  const rawItems = {
    espresso: { name: 'Espresso', img: 'Pictures/Espresso.jpg', info: 'Strong and rich espresso. $3' },
    latte: { name: 'Latte', img: 'Pictures/latte.jpg', info: 'Creamy latte with steamed milk. $4' },
    cappuccino: { name: 'Cappuccino', img: 'Pictures/cappuccino.jpg', info: 'Foamy cappuccino. $4' },
    americano: { name: 'Americano', img: 'Pictures/americano.jpg', info: 'Classic Americano. $3.5' },
    icedmatchalatte: { name: 'Iced Matcha Latte', img: 'Pictures/ice macha.jpg', info: 'Refreshing iced matcha latte. $4.5' },
    yerbamate: { name: 'Yerba Mate', img: 'Pictures/Yerba_Mate.jpg', info: 'Traditional yerba mate brew. $3.5' },
    croissant: { name: 'Croissant', img: 'Pictures/croissant.jpg', info: 'Buttery French croissant. $2' },
    cheesecake: { name: 'Cheesecake', img: 'Pictures/cheesecake.jpg', info: 'Rich cheesecake slice. $3.5' },
    sandwich: { name: 'Sandwich', img: 'Pictures/sandwich.jpg', info: 'Freshly made sandwich. $5' },
    catcookie: { name: 'Cat-Shaped Cookie', img: 'Pictures/cat shaped cookie.jpg', info: 'Cute cat-shaped cookie. $2' },
    cattreats: { name: 'Cat Treats', img: 'Pictures/Cat Treats.jpg', info: 'Special cat-shaped treats. $2.5' },
    pumpkinlatte: { name: 'Pumpkin Latte', img: 'Pictures/pumpkin latte.jpg', info: 'Seasonal pumpkin latte. $5' }
  };

  const items = {};
  Object.keys(rawItems).forEach(key => {
    items[normalizeKey(key)] = rawItems[key];
  });

  const itemModal = document.getElementById('itemModal');
  const itemImg = document.getElementById('itemImg');
  const itemName = document.getElementById('itemName');
  const itemInfo = document.getElementById('itemInfo');
  const itemClose = document.getElementById('itemClose') || (itemModal ? itemModal.querySelector('.close') : null);

  const menuCards = document.querySelectorAll('.menu-category-items .card');
  if (menuCards && menuCards.length && itemModal) {
    menuCards.forEach(card => {
      card.addEventListener('click', () => {
        const rawKey = card.dataset.item;
        const key = normalizeKey(rawKey);
        const item = items[key];
        if (!item) {
          showToast('Item details not available.', 'info');
          return;
        }
        if (itemImg) itemImg.src = item.img;
        if (itemName) itemName.textContent = item.name;
        if (itemInfo) itemInfo.textContent = item.info;
        itemModal.style.display = 'flex';
      });
    });

    if (itemClose) {
      itemClose.addEventListener('click', () => {
        itemModal.style.display = 'none';
      });
    }

    window.addEventListener('click', e => {
      if (e.target === itemModal) itemModal.style.display = 'none';
    });
  }
  
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (catModal && catModal.style.display === 'flex') catModal.style.display = 'none';
      if (itemModal && itemModal.style.display === 'flex') itemModal.style.display = 'none';
    }
  });
})();