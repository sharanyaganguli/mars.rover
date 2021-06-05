canvas = document.getElementById("myCanvas")
ctx= canvas.getContext("2d");
rover_width= 100;
rover_height= 90;

array_images=["1.jpg","2.jpg","3.jpg","4.jpg","mars.jpg"];
random_number= Math.floor(Math.random()* 5);
console.log(random_number);

rover_x= 10;
rover_y= 10;

background_image= array_image[random_number];
rover_image= "rover.png";


function add(){
   background_image_tag= new Image();
   background_image_tag.onload= upload_background;
   background_image_tag.src= background_image;

   rover_image_tag= new Image();
   rover_image_tag.onload= upload_rover;
   rover_image_tag.src= rover_image;

}

function upload_background(){
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}

function upload_rover(){
    ctx.drawImage(rover_image_tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    key_pressed= e.keycode;
    console.log(key_pressed);

    if ( key_pressed=="38")
    { up();
        console.log("up");
    }

    if ( key_pressed=="40")
    { down();
        console.log("down");
    }

    if ( key_pressed=="37")
    { left();
        console.log("left");
    }

    if ( key_pressed=="39")
    { right();
        console.log("right");
    }

}

function up(){
    if (rover_y>=0);
    {
        rover_y=rover_y-10;
        upload_background();
        console.log("when up arrow is pressed, x= " +rover_x +" y= " + rover_y);
        upload_rover();
    }
}

function down(){
    if (rover_y>=500);
    {
        rover_y=rover_y+10;
        upload_background();
        console.log("when up arrow is pressed, x= " +rover_x +" y= " + rover_y);
        upload_rover();
    }
}

function left(){
    if (rover_y>=0);
    {
        rover_y=rover_y-10;
        upload_background();
        console.log("when up arrow is pressed, x= " +rover_x +" y= " + rover_y);
        upload_rover();
    }
}

function right(){
    if (rover_y<=700);
    {
        rover_y=rover_y+10;
        upload_background();
        console.log("when up arrow is pressed, x= " +rover_x +" y= " + rover_y);
        upload_rover();
    }
}