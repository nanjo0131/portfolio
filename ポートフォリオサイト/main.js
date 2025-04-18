let imagesItems = [...document.querySelectorAll(".img-wrap")];
console.log(imagesItems);
let titles = [...document.querySelectorAll("h2")];
let titleMessage = document.querySelector(".title");

// 監視対象になった瞬間activeを負荷する関数
let setItemActive = (entries) => {
    // console.log(entries);
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
};

let options = {
    rootMargin: "0px",
    threshold:0.5,
};

let observer = new IntersectionObserver(setItemActive, options);


observer.observe(titleMessage);

// imf-wrapは偶数と奇数で出現する場所が違う
imagesItems.map((item,index) => {
    item.children[0].style.backgroundImage = `url(./img/${index + 1}.jpg)`;
    index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
    observer.observe(item);
});

titles.map((title, index) =>  {
    index % 2 == 0 ? title.style.left = "50%" : title.style.left = "5%";
    observer.observe(title);
});

