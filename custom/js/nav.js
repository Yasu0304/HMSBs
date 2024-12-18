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

const navList = document.querySelector(`.navList`);
// console.log(navList)
let str = "";
showList.forEach(function (item, index) {
  if ((0 <= showList.length, showList.length <= 3, i++)) {
    console.log(showList[0].listTitle);
  }
});
