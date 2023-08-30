var imageArray=[
     'boat.jpg',
     'ele.jpg',
     'onam.jpg',
     'temp.webp',
     'chr.jpg',
     'chenda.jpg',
     'auto.jpg',

];
function callfun(){
     randome_index=Math.floor(Math.random()*imageArray.length);
     console.log(randome_index);
     selected_images= imageArray[randome_index];
     console.log(selected_images);
    document.getElementById("car").src='images/'+selected_images;
     console.log(document.getElementById("car"));
}