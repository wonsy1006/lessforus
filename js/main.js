// 배너 닫기
const nav_banner = document.querySelector('.nav_banner_area');
const closeButton = document.querySelector('.close');

function closeNavBanner() {
    closeButton.addEventListener('click', function() {
        nav_banner.style.display = 'none';
    });
}