   // Here each food group has an array of 3 values, the percent value for 2017, 2018, and 2019
   const data = {
    chinese: [30, 20, 15],
    american: [17, 33, 50],
    thai: [50, 40, 10],
    "new-american": [10, 50, 10],
  };


  const setProgressBars = (foodGroup) => {
    const foodData = data[foodGroup];
    const barDivs = [
      document.getElementById("bar-2017"),
      document.getElementById("bar-2018"),
      document.getElementById("bar-2019"),
    ];

    barDivs.forEach((bar, i) => {
      bar.style.height = foodData[i] + "%";
      bar.innerHTML = foodData[i] + "%";
    });
  };