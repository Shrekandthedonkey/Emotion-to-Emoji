camera = document.getElementById("camera");

Webcam.set({
width:350,
height:250,
image_format:'jpeg',
jpeg_quality:90
});

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML= '<img id="captured_image" src = "'+data_uri+'">'
    
    
    })
    
    }

    console.log('ml5 version:' , ml5.version);

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);
    function modelLoaded() {

        console.log('Model is Loaded!!!!!!!');
    }
    function speak() {

        var synth = window.speechSynthesis ;
        speak_data_1 = "The first perdiction is " + prediction_1;
        speak_data_2 = "And the second perdiction is " + prediction_2;
        var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
        synth.speak(utterThis)
    }
    function check() {
img = document.getElementById('captured_image');
classifier.classify(img, gotResults);

     
    }

    function gotResults(error, results) {
        if (error) {
            console.error(error);
        } else {
            console.log(results);
            document.getElementById('result_emotion_name1').innerHTML = results[0].label;
            document.getElementById('result_emotion_name2').innerHTML = results[1].label;
            prediction_1 = results[0].label;
            prediction_2 = results[1].label;
            speak();
            if(results[0].label == "happy")
            {
                document.getElementById("update_emojie_1").innerHTML = "&#128512;";
                
            }
            if(results[0].label == "sad")
                {
                    document.getElementById("update_emojie_1").innerHTML = "&#128532;";
    
                }
                if(results[0].label == "angry")
                    {
                        document.getElementById("update_emojie_1").innerHTML = "&#128548;";
        
                    }
                    if(results[1].label == "happy")
                        {
                            document.getElementById("update_emojie_2").innerHTML = "&#128512;";
                            
                        }
                        if(results[1].label == "sad")
                            {
                                document.getElementById("update_emojie_2").innerHTML = "&#128532;";
                
                            }
                            if(results[1].label == "angry")
                                {
                                    document.getElementById("update_emojie_2").innerHTML = "&#128548;";
                    
                                }
                    
        }

    }