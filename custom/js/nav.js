let navData=[{
    navList:"About",
},
{
    navList:"Solution",
},
{
    navList:"Contact",
}, 
]


const nav = document.querySelector(".mainNav");
function init(){
    let str = ""
    navData.forEach(function(item,index){
console.log(item.navList);
let content = `<li class="px-3 navLink ">
                                <a href="#" style="display: flex;width: 100%;">${item,navList}</a>
                            </li>`
                            str+='content';
    })
    list.innerHTML = str ;
}
init();
// console.log(nav)

nav.addEventListener("click",function(e){
    // console.log(e.target.value);
    if(e.target.value == undefined){
        console.log("點歪");
    }
})