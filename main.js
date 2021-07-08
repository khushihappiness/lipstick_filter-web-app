function preload()
{

}
function setup()
{
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO)
    video.hide();

}

function draw()
{

}

function take_snapshot()
{
    save("lipstick_filter.png")
}