// const dynamic = document.getElementById("dynamic");
// let

// function randomColor() {
//   let numbers = "123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += numbers[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
// dynamic.addEventListener("click", () => {
//   document.body.style.backgroundColor = randomColor;
// });

document.getElementById("child-2").addEventListener("click", function () {
  window.location.href = "question.html";
});

document.getElementById("date").valueAsDate = new Date();

// let clickTime=[];
function abc(){}
function cardTitle1 (title){
  alert("Board Update Successfully");
  const value = getInnerTextById("nav-count");
  const minesTask = getInnerTextById("mines");

  if (value > 0) {
    const sum = value + 1;
    setInnerText("nav-count", sum);
    const mines = minesTask - 1;
    setInnerText("mines", mines);
  }

  let newTime = new Date().toLocaleTimeString();

  const activity = document.getElementById("activity-log");
  const div = document.createElement("div");
  div.classList.add("bg-[#F4F7FF]");
  div.classList.add("text-centre");
  div.classList.add("mb-4");

  div.innerHTML = `
  title ${newTime}
  `;
  activity.appendChild(div);

  // this.disabled = true;
};

// const button1 = document
//   .getElementById("card-1-btn")
//   .addEventListener("click", function () {
//     alert("Board Update Successfully");
//     const value = getInnerTextById("nav-count");
//     const minesTask = getInnerTextById("mines");

//     if (value > 0) {
//       const sum = value + 1;
//       setInnerText("nav-count", sum);
//       const mines = minesTask - 1;
//       setInnerText("mines", mines);
//     }

//     let newTime = new Date().toLocaleTimeString();

//     const activity = document.getElementById("activity-log");
//     const div = document.createElement("div");
//     div.classList.add("bg-[#F4F7FF]");
//     div.classList.add("text-centre");
//     div.classList.add("mb-4");

//     div.innerHTML = `
//     <h2>'You have Complete The Task Add Dark Mode at ${newTime}'</h2>
//     `;
//     activity.appendChild(div);

//     this.disabled = true;
//   });

// const button2 = document
//   .getElementById("card-2-btn")
//   .addEventListener("click", function () {
//     alert("Board Update Successfully");
//     const value = getInnerTextById("nav-count");
//     const minesTask = getInnerTextById("mines");

//     if (value > 0) {
//       const sum = value + 1;
//       setInnerText("nav-count", sum);
//       const mines = minesTask - 1;
//       setInnerText("mines", mines);
//     }
//     const activity = document.getElementById("activity-log");
//     const div = document.createElement("div");
//     div.classList.add("bg-[#F4F7FF]");
//     div.classList.add("text-centre");
//     div.classList.add("mb-4");

//     div.innerHTML = `
//     <h2>'You have Complete The Task Add Dark Mode at 12:48:15 PM'</h2>
//     `;
//     activity.appendChild(div);

//     this.disabled = true;
//   });

// const button3 = document
//   .getElementById("card-3-btn")
//   .addEventListener("click", function () {
//     alert("Board Update Successfully");
//     const value = getInnerTextById("nav-count");
//     const minesTask = getInnerTextById("mines");

//     if (value > 0) {
//       const sum = value + 1;
//       setInnerText("nav-count", sum);
//       const mines = minesTask - 1;
//       setInnerText("mines", mines);
//     }
//     const activity = document.getElementById("activity-log");
//     const div = document.createElement("div");
//     div.classList.add("bg-[#F4F7FF]");
//     div.classList.add("text-centre");
//     div.classList.add("mb-4");

//     div.innerHTML = `
//     <h2>'You have Complete The Task Add Dark Mode at 12:48:15 PM'</h2>
//     `;
//     activity.appendChild(div);

//     this.disabled = true;
//   });

// const button4 = document
//   .getElementById("card-4-btn")
//   .addEventListener("click", function () {
//     alert("Board Update Successfully");
//     const value = getInnerTextById("nav-count");
//     const minesTask = getInnerTextById("mines");

//     if (value > 0) {
//       const sum = value + 1;
//       setInnerText("nav-count", sum);
//       const mines = minesTask - 1;
//       setInnerText("mines", mines);
//     }
//     const activity = document.getElementById("activity-log");
//     const div = document.createElement("div");
//     div.classList.add("bg-[#F4F7FF]");
//     div.classList.add("text-centre");
//     div.classList.add("mb-4");

//     div.innerHTML = `
//     <h2>'You have Complete The Task Add Dark Mode at 12:48:15 PM'</h2>
//     `;
//     activity.appendChild(div);

//     this.disabled = true;
//   });

// const button5 = document
//   .getElementById("card-5-btn")
//   .addEventListener("click", function () {
//     alert("Board Update Successfully");
//     const value = getInnerTextById("nav-count");
//     const minesTask = getInnerTextById("mines");

//     if (value > 0) {
//       const sum = value + 1;
//       setInnerText("nav-count", sum);
//       const mines = minesTask - 1;
//       setInnerText("mines", mines);
//     }
//     const activity = document.getElementById("activity-log");
//     const div = document.createElement("div");
//     div.classList.add("bg-[#F4F7FF]");
//     div.classList.add("text-centre");
//     div.classList.add("mb-4");

//     div.innerHTML = `
//     <h2>'You have Complete The Task Add Dark Mode at 12:48:15 PM'</h2>
//     `;
//     activity.appendChild(div);

//     this.disabled = true;
//   });

// const button6 = document
//   .getElementById("card-6-btn")
//   .addEventListener("click", function () {
//     alert("Board Update Successfully");
//     alert("second alert");
//     const value = getInnerTextById("nav-count");
//     const minesTask = getInnerTextById("mines");

//     if (value > 0) {
//       const sum = value + 1;
//       setInnerText("nav-count", sum);
//       const mines = minesTask - 1;
//       setInnerText("mines", mines);
//     }
//     const activity = document.getElementById("activity-log");
//     const div = document.createElement("div");
//     div.classList.add("bg-[#F4F7FF]");
//     div.classList.add("text-centre");
//     div.classList.add("mb-4");

//     div.innerHTML = `
//     <h2>'You have Complete The Task Add Dark Mode at 12:48:15 PM'</h2>
//     `;
//     activity.appendChild(div);

//     this.disabled = true;
//   });

document.getElementById("clear-history").addEventListener("click", function () {
  location.reload();
});
