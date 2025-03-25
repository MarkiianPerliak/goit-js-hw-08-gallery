const galleryItems = [
    {
        href: "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg",
        src: "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg",
        source: "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg",
        alt: "Tulips",
    },
    {
        href: "https://cdn.pixabay.com/photo/2025/03/21/21/22/roche-9485693_1280.jpg",
        src: "https://cdn.pixabay.com/photo/2025/03/21/21/22/roche-9485693_1280.jpg",
        source: "https://cdn.pixabay.com/photo/2025/03/21/21/22/roche-9485693_1280.jpg",
        alt: "Stone",
    },
    {
        href: "https://cdn.pixabay.com/photo/2025/02/17/16/04/dog-9413394_1280.jpg",
        src: "https://cdn.pixabay.com/photo/2025/02/17/16/04/dog-9413394_1280.jpg",
        source: "https://cdn.pixabay.com/photo/2025/02/17/16/04/dog-9413394_1280.jpg",
        alt: "Dog",
    },
    {
        href: "https://cdn.pixabay.com/photo/2019/04/10/23/51/animal-4118585_1280.jpg",
        src: "https://cdn.pixabay.com/photo/2019/04/10/23/51/animal-4118585_1280.jpg",
        source: "https://cdn.pixabay.com/photo/2019/04/10/23/51/animal-4118585_1280.jpg",
        alt: "Dog",
    },
    {
        href: "https://cdn.pixabay.com/photo/2020/04/24/15/34/namibia-5087365_1280.jpg",
        src: "https://cdn.pixabay.com/photo/2020/04/24/15/34/namibia-5087365_1280.jpg",
        source: "https://cdn.pixabay.com/photo/2020/04/24/15/34/namibia-5087365_1280.jpg",
        alt: "Dessert",
    },
    {
        href: "https://cdn.pixabay.com/photo/2021/11/11/09/58/desert-6785856_1280.jpg",
        src: "https://cdn.pixabay.com/photo/2021/11/11/09/58/desert-6785856_1280.jpg",
        source: "https://cdn.pixabay.com/photo/2021/11/11/09/58/desert-6785856_1280.jpg",
        alt: "Dunes",
    },
    {
        href: "https://cdn.pixabay.com/photo/2019/01/02/18/38/namibia-3909397_1280.jpg",
        src: "https://cdn.pixabay.com/photo/2019/01/02/18/38/namibia-3909397_1280.jpg",
        source: "https://cdn.pixabay.com/photo/2019/01/02/18/38/namibia-3909397_1280.jpg",
        alt: "Sea",
    },
    {
        href: "https://cdn.pixabay.com/photo/2020/04/08/06/57/zebras-5015976_1280.jpg",
        src: "https://cdn.pixabay.com/photo/2020/04/08/06/57/zebras-5015976_1280.jpg",
        source: "https://cdn.pixabay.com/photo/2020/04/08/06/57/zebras-5015976_1280.jpg",
        alt: "Zebra",
    },
    {
        href: "https://cdn.pixabay.com/photo/2016/01/30/17/58/zebra-1170177_1280.jpg",
        src: "https://cdn.pixabay.com/photo/2016/01/30/17/58/zebra-1170177_1280.jpg",
        source: "https://cdn.pixabay.com/photo/2016/01/30/17/58/zebra-1170177_1280.jpg",
        alt: "Animals",
    },
];

const galleryItemsUl = document.createElement("ul");
const galleryFinal = galleryItems.map(galleryItem => {
    return `
        <li class="gallery__item">
            <a class="gallery__link" href="${galleryItem.href}">
                <img class="gallery__image" src="${galleryItem.src}" data-source="${galleryItem.source}" alt="${galleryItem.alt}" />
            </a>
        </li>
    `;
}).join("");

const galleryLinkElement = document.querySelector(".gallery__link");

const modal = document.querySelector("[data-modal]");
const closeButton = document.querySelector("[data-modal-close]");
const backdrop = document.querySelector("[data-backdrop]");

galleryLinkElement.addEventListener("click", (event) => {
    modal.classList.remove("is-hidden");
    backdrop.classList.add("active");
});
closeButton.addEventListener("click", () => {
    modal.classList.add("is-hidden");
    backdrop.classList.remove("active");
});

const modalHomework = galleryItems.map(galleryItem => {
    return `

<div data-backdrop class="footer-backdrop">
    <div data-modal class="footer-modal">
        <button data-modal-close type="button" class="footer-modal__button"><img class="modal__cross" src="https://static-00.iconduck.com/assets.00/cross-mark-emoji-512x512-9lmr75ja.png" alt="cross"></button>
        <img src="${galleryItem.src}" alt="${galleryItem.alt}" class="gallery__modal-img">
    </div>
</div>`
}).join("");

document.body.append(modalHomework)




document.addEventListener("DOMContentLoaded", function () {
    const ul = document.querySelector("ul");
    ul.style.listStyle = "none";
    ul.style.display = "flex";
    ul.style.flexWrap = "wrap";
    ul.style.gap = "50px";
    ul.style.justifyContent = "center";

    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.style.width = "400px";
        img.style.height = "300px";
    });
});



galleryItemsUl.innerHTML = galleryFinal;

document.body.append(galleryItemsUl);