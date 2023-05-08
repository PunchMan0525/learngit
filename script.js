const nav = document.querySelector(".nav");
const nva_li = document.querySelectorAll("li a");

const fixNav = () => {
    if(window.scrollY > nav.offsetHeight + 150) nav.classList.add("active");
    else nav.classList.remove("active");
};


nva_li.forEach(item =>{
    
    item.addEventListener("click",()=>{
        console.log(111);
        nva_li.forEach((li) => {
            li.classList.remove("current");
        });
        item.classList.add("current")
    })
})

window.addEventListener("scroll",fixNav)