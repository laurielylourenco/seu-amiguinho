
const imageUrls = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLoW4TFIFvPl26mFVQgjyWSnj8sgfBZ2OpQQ&s',
    'https://gartic.com.br/imgs/mural/de/desenhosdefnaf/dollynho.png'
];

const images = document.querySelectorAll('img');
images.forEach((img, index) => {
    const newImageUrl = imageUrls[index % imageUrls.length];
    setTimeout(() => {
        img.src = newImageUrl;
    }, index * 1000);
});
