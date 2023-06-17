const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
//js에서 만들어서 html로 집어넣기 위해 생성한 것 img tag임
bgImage.src = `img/${chosenImage}`;
//img tag에 링크주소를 집어넣기

document.body.appendChild(bgImage);
//생성된 img tag를 body에 집어넣기 body 맨 아래로 간다
