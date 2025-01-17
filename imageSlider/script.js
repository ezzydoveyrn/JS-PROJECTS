const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
];

let left = document.getElementById("left");
let right = document.getElementById("right");
const progress = document.getElementById("progress");

let img = document.getElementById("img");
let imageUsed = "";
let i = 0;
let proP = 1;
progress.max = images.length;
progress.value = proP;


right.onclick = () => {

  if(i < images.length - 1){
    i++;
    proP++;
  }
  else{
    i = 0;
    proP = 1;
  }
  imageUsed = images[i];
  console.log(i);
  img.src = imageUsed;
  progress.value = proP;
}
left.onclick = () => {

  if(i === 0){
    i = images.length;
    proP = images.length + 1;
  }
  if (i) {
    i--;
    proP--;
  }
  //else{
   // i = 0;
  //}
  imageUsed = images[i];
  console.log(i);
  img.src = imageUsed;
  progress.value = proP;
}