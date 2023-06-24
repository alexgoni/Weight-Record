// 나의 정보가 있는지 확인
window.onload = function () {
  if (!userInfo) {
    window.location.href = "mypage.html";
  } else {
    const greeting = document.querySelector("#greeting");
    greeting.innerText = `Hello ${savedName}!`;
  }
};
