const bmiSpan = document.querySelector("#other-info span:nth-child(2)");
const targetSpan = document.querySelector("#other-info span:nth-child(4)");

const height = userInfo.height / 100;
const targetWeight = userInfo.targetWeight;
const goal = userInfo.goal;

function otherInfo() {
  recentWeight = getCurrentWeight();
  const bmi = recentWeight / height ** 2;
  bmiSpan.innerText = bmi.toFixed(2);
  targetSpan.innerText = targetWeight;
}

function checkGoal() {
  recentWeight = getCurrentWeight();
  if (
    (goal === "bulkup" && recentWeight >= targetWeight) ||
    (goal == "diet" && recentWeight <= targetWeight)
  ) {
    console.log("Congratulations!"); // 배경색 바꾸기
  }
}

otherInfo();
