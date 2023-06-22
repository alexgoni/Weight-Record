const updatedWeight = document.querySelector("#updated-weight");
const updateForm = updatedWeight.querySelector("#update-form");
const updateInput = updateForm.querySelector("input");
const currentWeight = updatedWeight.querySelector("h3");

const userInfo = JSON.parse(localStorage.getItem("userInfo"));
let weightList = [];

const savedName = userInfo.name;

function saveWeightList() {
  localStorage.setItem("weightList", JSON.stringify(weightList));
}

function getCurrentWeight() {
  return weightList[weightList.length - 1].weight;
}

function paintCurrentWeight() {
  currentWeight.innerText = getCurrentWeight();
}

function addWeight(e) {
  e.preventDefault();
  const newWeight = updateInput.value;
  updateInput.value = "";
  const newWeightObj = {
    day: Date.now(),
    weight: newWeight,
  };
  weightList.push(newWeightObj);
  paintCurrentWeight();
  saveWeightList();
}

updateForm.addEventListener("submit", (e) => {
  addWeight(e);

  otherInfo();
  checkGoal();
  updateChart();
});

const savedWeightList = localStorage.getItem("weightList");

if (savedWeightList) {
  const parsedWL = JSON.parse(savedWeightList);
  weightList = parsedWL;
} else {
  weightList.push({
    day: Date.now(),
    weight: userInfo.currentWeight,
  });
  saveWeightList();
}

paintCurrentWeight();

let recentWeight = getCurrentWeight();
