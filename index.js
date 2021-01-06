const selectMonth = document.getElementById("month");
const list = document.querySelector(".grid");
const heading = document.querySelector(".heading");

function changeMonth() {
  let days = 0;
  const choice = selectMonth.value;
  if (choice == "FEBRUARY") {
    days = 28;
  } else if (
    choice === "JANUARY" ||
    choice === "MARCH" ||
    choice === "MAY" ||
    choice === "JULY" ||
    choice === "AUGUST" ||
    choice === "OCTOBER" ||
    choice === "DECEMBER"
  ) {
    days = 31;
  } else {
    days = 30;
  }
    makeCalender(days, choice);

    function makeCalender(days, choice) {
        list.innerHTML = "";
        heading.innerHTML = choice;
        for (let i = 1; i <= days; i++) {
        const listItem = document.createElement("div");
        listItem.className = "item";
        listItem.textContent = "Day " + i;
        list.appendChild(listItem);
        // console.log(listItem);
        }
  }
}