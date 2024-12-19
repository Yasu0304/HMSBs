let showList = [
  {
    listTitle: "Our Story ",
    section: [
      {
        sectionName: "HMS Brief intro.",
        sectionList: ["Smart Healthcare Solution Partner", "History"],
      },
      {
        sectionName: "Core Competency",
        sectionList: ["Intelligent Healthcare Solution-as-a-Service", "Medical Device Solution-as-a-Service"],
      },
      {
        sectionName: "Our Support",
        sectionList: ["服務項目"],
      },
    ],
  },
  {
    listTitle: "News",
    section: [
      {
        sectionName: "參展消息",
        sectionList: ["獲獎NEWS"],
      },
      {
        sectionName: "Gallery",
        sectionList: ["展場類"],
      },
    ],
  },
  {
    listTitle: "Why Choose HMS",
    section: [
      {
        sectionName: "會場問卷",
        sectionList: ["RSNA", "HIMSS"],
      },
      {
        sectionName: "New product lanuch",
        sectionList: ["Air Mode"],
      },
    ],
  },
];

// const nav = document.querySelector(`.mainNav`);

// function init() {
//   let str = "";
//   navData.forEach(function (item, index) {
//     let content = `<li class="px-3" >
//                                 <a href="#" style="display: flex;width: 100%">${item.navTitle}</a>
//                             </li>`;
//     str += content;
//   });
//   nav.innerHTML = str;
// }
// init();

// const showContainer = document.querySelector(".show");

// showList.forEach((item) => {
//   const navList = document.createElement("div");
//   navList.className = "navList";

//   // Render listTitle
//   const title = document.createElement("p");
//   title.textContent = item.listTitle;
//   navList.appendChild(title);

//   // Render sections
//   item.section.forEach((sec) => {
//     const sectionName = document.createElement("p");
//     sectionName.textContent = sec.sectionName;
//     navList.appendChild(sectionName);

//     const ul = document.createElement("ul");
//     sec.sectionList.forEach((listItem) => {
//       const li = document.createElement("li");
//       li.textContent = listItem;
//       ul.appendChild(li);
//     });
//     navList.appendChild(ul);
//   });

//   showContainer.appendChild(navList);
// });
// console.log(showList);
// console.log(showList[0].section[0]);
// console.log(showList[0].section[0].sectionName)

// const mainNav = document.querySelector(".mainNav");
// mainNav.addEventListener("click", (e) => {
//   console.log(e.target.value);
//   if (e.target.value == undefined) {
//     console.log("點歪");
//     return;
//   } else if (e.target.value == `About`) {
//     console.log(e.target.value);
//   }
// });

// }
// console.log(mainNav);
// console.log(mainNav.target.value);


document.addEventListener("DOMContentLoaded", () => {
  const navLinkAbout = document.querySelector(".navLink_about");
  const navLinkSolution = document.querySelector(".navLink_solution");
  const showAbout = document.querySelector(".show_about");
  const showSolution = document.querySelector(".show_solution");

  const showDropdown = (dropdown) => {
    dropdown.style.display = "flex";
    setTimeout(() => {
      dropdown.style.top = "100%";
      dropdown.style.opacity = "1";
    }, 10);
  };

  const hideDropdown = (dropdown) => {
    dropdown.style.top = "-50px";
    dropdown.style.opacity = "0";
    setTimeout(() => {
      dropdown.style.display = "none";
    }, 300);
  };

  // About hover
  navLinkAbout.addEventListener("mouseenter", () => showDropdown(showAbout));
  navLinkAbout.addEventListener("mouseleave", () => hideDropdown(showAbout));

  // Solution hover
  navLinkSolution.addEventListener("mouseenter", () => showDropdown(showSolution));
  navLinkSolution.addEventListener("mouseleave", () => hideDropdown(showSolution));
});
