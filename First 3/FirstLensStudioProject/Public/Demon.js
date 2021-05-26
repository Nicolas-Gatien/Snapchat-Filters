// -----JS CODE-----
//@input Component.FaceStretchVisual faceStretch
//@input Component.LiquifyVisual faceLiquify

script.createEvent("UpdateEvent").bind(Update);
script.createEvent("MouthOpenedEvent").bind(MouthOpened);
script.createEvent("MouthClosedEvent").bind(MouthClosed);

function MouthOpened(){
    script.faceStretch.setFeatureWeight("Feature0",1);
    script.faceLiquify.radius = 5;
}

function MouthClosed(){
    script.faceStretch.setFeatureWeight("Feature0",0);
    script.faceLiquify.radius = 0;
}

function Update(){
    
}