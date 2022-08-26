// ---------------------- PRODUCTS ---------------------- //
// 카테고리 클릭 시 상품 리스트 교체
const productCategory = document.querySelectorAll("#sidenav .category > li");

console.log(productCategory);

// ---------------------- SCROLL REVEAL ---------------------- //
ScrollReveal().reveal(".title_section, #sidenav, .filter, .products_list", {
  origin: "bottom",
  distance: "60px",
});
