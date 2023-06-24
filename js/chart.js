const chartCanvas = document.getElementById("weight-chart");
let weightChart = null;

function formatDate(milliseconds) {
  const momentDate = moment(milliseconds);
  return momentDate.format("MM-DD HH:mm");
}

function updateChart() {
  if (weightChart) {
    weightChart.destroy();
  }

  weightChart = new Chart(chartCanvas, {
    type: "line",
    data: {
      labels: weightList.map((data) => formatDate(data.day)), // 날짜를 월일시 형태로 변환하여 labels에 설정
      datasets: [
        {
          label: "Weight",
          data: weightList.map((data) => data.weight),
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: false,
      scales: {
        y: {
          suggestedMin: Math.min(...weightList.map((data) => data.weight)) - 7, // 최소값에 7의 여유 공간을 둠
          suggestedMax: Math.max(...weightList.map((data) => data.weight)) + 7, // 최대값에 7의 여유 공간을 둠
        },
      },
    },
  });
}

updateChart();
