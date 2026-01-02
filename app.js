const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "tteokbokki.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "chicken ramen.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg.`,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "DWELL.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "Dan-dan-mian.jpg",
    desc: `Dan dan noodle, serving with green onion`,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "Yangzhou-Fried-Rice.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles`,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "Onigiri.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "Jajangmyeon.jpg",
    desc: `Black bean sauce noodle, with pork and vegetables.`,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "maYiShangShu.avif",
    desc: `Hot and spicy glass noodles with minced pork.`,
  },
  {
    id: 9,
    title: "Dorayaki",
    category: "Japan",
    price: 3.99,
    img: "Dorayaki.jpg",
    desc: `Red bean paste dessert, duo pancakes.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// Sayfa yüklendiğinde butonları ve tüm menüyü getir
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuButtons();
});

// Menü Elemanlarını Listeleme (MAP Metodu)
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img src="${item.img}" alt="${item.title}" class="photo" />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

// Dinamik Buton Oluşturma (REDUCE Metodu)
function displayMenuButtons() {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );

  const categoryBtns = categories
    .map((category) => {
      return `<button type="button" class="btn btn-outline-dark btn-item" data-id="${category}">
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;

  const filterBtns = btnContainer.querySelectorAll(".btn-item");

  // Filtreleme Fonksiyonu
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}