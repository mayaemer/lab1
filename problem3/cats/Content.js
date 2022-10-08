//array of images
let catsImages = [
    "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    "https://e3.365dm.com/21/03/768x432/skynews-cats-missing-microchip_5315182.jpg?20210323142004",
    "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc3836660-7846-11eb-80c3-8cc375faed89.jpg?crop=5729%2C3222%2C187%2C805&resize=1200",
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1296x728-header.jpg?w=1155&h=1528",
	"https://lh3.googleusercontent.com/pw/AL9nZEXYJlrVkYoKIkpx07_3F4HOiTiOheaoaiRAcwrUg3C613-jkzEubJ3k8Z9fDjG5IfVqCzorphZ00vp6mIyB79GtCsoyV69xXe9cqrA0zglgrcvYhH2UP4cDR88WTm1AmuyCxQHAWCB5JzKD7eD94dtNZA=w690-h920-no"
];

//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Cats are awesome.";
    
}

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * catsImages.length)
    imgs[i].src = catsImages[randomImg];
    
}

// Change h2 elements to say meow meow meow
const h2 = document.getElementsByTagName("h2");
for (let i = 0; i < h2.length; i++){
    h2[i].innerText = "Meow meow meow";
}

//change all divs to a light blue background colour
// create a button in the third div in the array
let div = document.getElementsByTagName("div");
for (let i = 0; i < div.length; i++){
    div[i].style.backgroundColor = 'lightblue';
    div[2].innerHTML = `<button id='surprise'>Surprise</button>`
}

//when button is clicked, add image to div
document.getElementById('surprise').addEventListener('click', function(){
    let imgEl = document.createElement('img');
    imgEl.src = 'https://c8.alamy.com/comp/2BP5YEN/surprised-cat-expression-as-a-scared-kitten-or-astonished-feline-animal-2BP5YEN.jpg'
    div[2].appendChild(imgEl);
    imgEl.height = 70;
    imgEl.width = 200;
});

// change button elements to pink colour
const btns = document.getElementsByTagName('button');
for(let i = 0; i < btns.length; i++) {
    btns[i].style.background = 'pink';
    
}

//change link elements to orange colour
// change to link text to cats
const links = document.getElementsByTagName('a');
for(let i = 0; i < links.length; i++) {
    links[i].style.color = 'orange';
    links[i].innerHTML = 'Links to cats!!!'
    
}

// change input elements background to pink
// change the value to search for cats..
const input = document.getElementsByTagName('input');
for(let i = 0; i < input.length; i++) {
    input[i].style.background = 'pink';
    input[i].value = 'Search for cats..';
    
}

// change h3 elements to say look at this
// change font colour to red
// change font weight to bold
const h3 = document.getElementsByTagName("h3");
for (let i = 0; i < h3.length; i++){
    h3[i].innerText = "Look at this!";
    h3[i].style.color = 'red';
    h3[i].style.fontWeight = 'bold';
}

// same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "This website is now about cats.";
}





