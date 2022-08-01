// ---------------------- COMMON ---------------------- //
// TOP 버튼
window.addEventListener('scroll', scrollTop);

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 350) {
        scrollTop.classList.add('show-scroll');
    } else {
        scrollTop.classList.remove('show-scroll');
    }
  }

// 스크롤 시 헤더 상단 고정
window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
    const header = document.querySelector('#header');
    // When the scroll is greater thant 200 viewport height, add the scroll-header to the header tag
    if(this.scrollY >= 200) {
        header.classList.add('scroll_header');
    } else {
        header.classList.remove('scroll_header');
    }
}

// 푸터 구독 이메일 주소 입력 시 동의 텍스트 나타내기
const emailInput = document.querySelector('.subscribe_form > #email');
const consentText = document.querySelector('.subscribe_form > .consent');

emailInput.addEventListener('click', showConsentText);

function showConsentText() {
    consentText.classList.toggle('active');
}

// ---------------------- SCROLL REVEAL ---------------------- //
ScrollReveal().reveal('.products_section, .aboutUs_section, .ourMission_section, .blog_section, .news_section, .instagram_section, .contact_section, #footer', {origin: 'bottom', distance: '60px'});