canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rwidth=100;
rheight=100;
roverx=10;
rovery=10;

nasaarray=["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg","mars5.jpg"];
random=Math.floor(Math.random() * 5);
background_img=nasaarray[random];
rover_img="rover.png";

function add()
{
    bg_img=new Image();
    bg_img.onload=uploadBackground;
    bg_img.src=background_img;

    r_img=new Image();
    r_img.onload=uploadrover;
    r_img.src=rover_img;
}
function uploadBackground()
{
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}
function uploadrover()
{
    ctx.drawImage(r_img,roverx,rovery,rwidth,rheight);
}


window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypress=e.keyCode;
    console.log(keypress);

    if(keypress=="37")
    {
     left();
     console.log("left");
    }

    if(keypress=="38")
    {
     up();
     console.log("up");
    }

    if(keypress=="39")
    {
     right();
     console.log("right");
    }

    if(keypress=="40")
    {
     down();
     console.log("down");
    }
}


function up()
{
    if (rovery>=0)
    {
        rovery=rovery-10;
        uploadBackground();
        uploadrover();
    }
}

function down()
{
    if (rovery<=600)
    {
        rovery=rovery+10;
        uploadBackground();
        uploadrover();
    }
}

function left()
{
    if (roverx>=0)
    {
        roverx=roverx-10;
        uploadBackground();
        uploadrover();
    }
}

function right()
{
    if (roverx<=800)
    {
        roverx=roverx+10;
        uploadBackground();
        uploadrover();
    }
}

