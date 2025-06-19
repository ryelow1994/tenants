var arr = []; 
var horizontal = "Tenants_09.png";
var vertical = "Tenants_01.jpg";
var live = "IMG_5728.jpeg";
var michi = "IMG_4705.jpg";
var nate = "IMG_4754 (1).jpg";
var ryan = "TENANTS033.jpg";

arr.push(horizontal, live, michi, nate, ryan);

var imageGallery = document.getElementById("image-gallery")

for (var i = 0; i < arr.length; i++) {
    var li = document.createElement("li");
    var img = document.createElement("img");
    img.src = arr[i];
    img.alt = "Image " + (i + 1);
    img.className = "image";
    li.appendChild(img);
    imageGallery.appendChild(li);
}

