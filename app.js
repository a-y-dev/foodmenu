const menu = [
  {
    id: 1,
    title: "Mantı",
    category: "Kayseri",
    price: 30.00,
    img:
      "https://ykv.s3.eu-central-1.amazonaws.com/img/w/tarif/ogt/kayseri-mantisi-1.webp",
    desc: `Meşhur kayseri mantısı`,
  },
  {
    id: 2,
    title: "Kayseri Yağlaması",
    category: "Kayseri",
    price: 47.00,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `En lezzetli kayseri yağlaması burada`,
  },
  {
    id: 3,
    title: "Nevzine",
    category: "Kayseri",
    price: 15.00,
    img:
      "https://cdn.ye-mek.net/App_UI/Img/out/650/2017/06/nevzine-tatlisi-resimli-yemek-tarifi(19).jpg",
    desc: `Meşhur kayseri nevzine tatlısı`,
  },
  {
    id: 4,
    title: "Yumurta Öccesi",
    category: "Hatay",
    price: 15.00,
    img:
      "https://i.lezzet.com.tr/images-xxlarge-recipe/antakya-usulu-yumurta-occesi-fd4e1633-15e7-4a5f-995d-5aab4b3de51b.jpg",
    desc: `Hatayın meşhur Yumurta öccesi `,
  },
  {
    id: 5,
    title: "Kağıt Kebabı",
    category: "Hatay",
    price: 32.00,
    img:
      "https://cdn.ye-mek.net/App_UI/Img/out/650/2022/04/hatay-kagit-kebabi-resimli-yemek-tarifi(16).jpg",
    desc: `Mutlaka tatmanız gereken lezzet. `,
  },
  {
    id: 6,
    title: "Künefe",
    category: "Hatay",
    price: 9.00,
    img:
      "https://www.mariyetanne.com/img/products/kunefe_14.07.2019_2c5ff2a.jpg",
    desc: `Afiyet olsun.`,
  },
  {
    id: 7,
    title: "Banduma",
    category: "Kastamonu",
    price: 20.00,
    img:
      "https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//TurkMutfagi/20181129143039030_banduma2.jpg?format=jpg&quality=50",
    desc: `Banduma Kastamonu mutfağının en ünlü lezzetlerindendir.`,
  },
  {
    id: 8,
    title: "Etli Ekmek",
    category: "Kastamonu",
    price: 32.00,
    img:
      "https://cdn.ye-mek.net/App_UI/Img/out/650/2012/12/etli-ekmek-resimli-yemek-tarifi-111.jpg",
    desc: `Meşhur Kastamonu Etli Ekmeği`,
  },
  {
    id: 9,
    title: "Çekme Helva",
    category: "Kastamonu",
    price: 20.00,
    img:
      "https://cdnuploads.aa.com.tr/uploads/Contents/2019/08/11/thumbs_b_c_4d2942e318d62209f2c9e0fc4d23f3d8.jpg",
    desc: `Kastamonu'da bayramın tadı çekme helva.`,
  },
];

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce((values, item) => {
  if (!values.includes(item.category)) {
    values.push(item.category);
  }
  return values;
}, ["All"]);

const categoryList = () => {
  const categoryBtns = categories.map(category => {
    return `<button class="btn btn-dark btn-item" data-id=${category}>${category}</button>`;
  }).join("");
  
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".btn-item");

  //filter menu
  filterBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(menuItem => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
}

const menuList = (menuItems) => {
  let displayMenu = menuItems.map(item => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
            </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
}

menuList(menu);
categoryList();