earx =0
eary =0

function preload(){
    earring_nose=loadImage('');
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
video.size(300, 300);
video.hide();


poseNet=ml5.PoseNet(video,modelLoaded);
poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log('PoseNet is Initailized');
}