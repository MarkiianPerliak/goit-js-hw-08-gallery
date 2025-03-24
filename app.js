const galleryItems = [
    {
        href: "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg",
        src: "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg",
        source: "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg",
        alt: "Tulips",
    },
    {
        href: "s",
        src: "",
        source: "",
        alt: "",
    },
    {
        href: "s",
        src: "",
        source: "",
        alt: "",
    },
    {
        href: "s",
        src: "",
        source: "",
        alt: "",
    },
    {
        href: "s",
        src: "",
        source: "",
        alt: "",
    },
    {
        href: "s",
        src: "",
        source: "",
        alt: "",
    },
    {
        href: "s",
        src: "",
        source: "",
        alt: "",
    },
    {
        href: "s",
        src: "",
        source: "",
        alt: "",
    },
    {
        href: "s",
        src: "",
        source: "",
        alt: "",
    },
];

//  const galleryItemData = galleryItems.map(galleryItem => {
//     const galleryItemHref = galleryItem.href;
//     const galleryItemSrc = galleryItem.src;
//     const galleryItemSource = galleryItem.Source;
//     const galleryItemAlt = galleryItem.Alt;
// })

const galleryItemHref = galleryItems.map(galleryItem => galleryItem.href);
const galleryItemSrc = galleryItems.map(galleryItem => galleryItem.src);
const galleryItemSource = galleryItems.map(galleryItem => galleryItem.source);
const galleryItemAlt = galleryItems.map(galleryItem => galleryItem.alt);

console.log(galleryItemHref);
console.log(galleryItemSrc);
console.log(galleryItemSource);
console.log(galleryItemAlt);

console.log("hi")