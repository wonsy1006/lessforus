// ---------------------- HEADER ---------------------- //
// 상단 배너 닫기
const navBanner = document.querySelector('.nav_banner_area');
const closeButton = document.querySelector('.close');

closeButton.addEventListener('click', closeNavBanner);

function closeNavBanner() {
        navBanner.style.display = 'none';
}

// ---------------------- INDEX ---------------------- //
// PRODUCTS 탭 전환
const newArrivalsTab = document.querySelector('.tab_title.newArrivals');
const bestsellersTab = document.querySelector('.tab_title.bestsellers');
const newArrivalsList = document.querySelector('#newArrivals');
const bestsellersList = document.querySelector('#bestsellers');

newArrivalsTab.addEventListener('click', showNewArrivalsList);
bestsellersTab.addEventListener('click', showBestsellersList);

newArrivalsTab.click();

function showNewArrivalsList() {
    newArrivalsList.style.display = 'flex';
    bestsellersList.style.display = 'none';
}

function showBestsellersList() {
    newArrivalsList.style.display = 'none';
    bestsellersList.style.display = 'flex';
}


// 상품 이미지 캐러셀
const arrowLeft = document.querySelector('.arrows > .arrow.left');
const arrowRight = document.querySelector('.arrows > .arrow.right');