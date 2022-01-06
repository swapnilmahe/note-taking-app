let tdData = document.getElementsByClassName("tables");
let display = document.getElementById("display");
let nee = document.getElementsByClassName("nee");
let information;
let objLength = tdData.length;
let data = [];
store = () => {
  for (let i = 0; i < objLength; i++) {
    data.push(tdData[i].innerHTML);
  }
  localStorage.setItem("firstkey", data);
};
show = () => {
  information = localStorage.getItem("firstkey");
  display.innerHTML = information;
};
