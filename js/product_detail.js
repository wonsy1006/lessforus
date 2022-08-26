// ---------------------- PRODUCT DETAIL ---------------------- //
// 섬네일 클릭 시 이미지 교체

// 후기 모달

// 용량 선택

// 색상 선택

// 수량
function count(type) {
  // 결과 표시
  const quantitySpan = document.querySelector("#quantity");

  // 현재 화면에 표시되는 값
  let quantity = quantitySpan.innerText;

  // 더하기 / 빼기
  if (type === "plus") {
    quantity = parseInt(quantity) + 1;
    quantitySpan.innerText = quantity;
  } else if (type === "minus") {
    quantity = parseInt(quantity) - 1;
  }

  if (quantity <= 0) {
    quantity = 0;
  }

  quantitySpan.innerText = quantity;
}

// 용량 / 색상 / 수량 확인 텍스트
