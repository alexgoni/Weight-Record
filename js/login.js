const nextButton = document.getElementById("next-button");
const form = document.querySelector("form");
const goalRadios = document.getElementsByName("goal");
const currentWeight = document.querySelector("#current-weight");
const targetWeight = document.querySelector("#target-weight");

targetWeight.addEventListener("input", () => {
  if (getCurrentGoal() === "bulkup") {
    targetWeight.min = parseFloat(currentWeight.value);
    targetWeight.max = "";
  } else if (getCurrentGoal() === "diet") {
    targetWeight.max = parseFloat(currentWeight.value);
    targetWeight.min = "";
  }
});

nextButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (form.checkValidity()) {
    // 필드가 유효성 검사를 통과하면 데이터를 저장하고 plan.html로 이동
    const name = document.getElementById("name").value;
    const currentWeight = parseFloat(
      document.getElementById("current-weight").value
    );
    const targetWeight = parseFloat(
      document.getElementById("target-weight").value
    );
    const height = parseFloat(document.getElementById("height").value);
    const goal = getCurrentGoal();

    const userInfo = {
      name: name,
      goal: goal,
      currentWeight: currentWeight,
      targetWeight: targetWeight,
      height: height,
    };

    // JSON 형식으로 변환하여 로컬 스토리지에 저장
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    window.location.href = "index.html";
  } else {
    // 필드가 하나라도 비어있으면 알림 표시
    alert("모든 필드를 입력해주세요.");
  }
});

function getCurrentGoal() {
  // 선택된 라디오 버튼의 값을 가져옴
  for (let i = 0; i < goalRadios.length; i++) {
    if (goalRadios[i].checked) {
      return goalRadios[i].value;
    }
  }
  return null;
}
