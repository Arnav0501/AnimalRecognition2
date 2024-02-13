function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6co-YQIjF/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
