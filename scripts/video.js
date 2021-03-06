const appId = require('./appID')
console.log("I am the appId", appId)

if (!AgoraRTC.checkSystemRequirements()) {
    alert("browser is no support webRTC");
}

/* simulated data to proof setLogLevel() */
AgoraRTC.Logger.error('this is error');
AgoraRTC.Logger.warning('this is warning');
AgoraRTC.Logger.info('this is info');
AgoraRTC.Logger.debug('this is debug');

var client, localStream, camera, microphone;

var audioSelect = document.querySelector('select#audioSource');
var videoSelect = document.querySelector('select#videoSource');

function join() {
    var channel_key = null;

    console.log("Init AgoraRTC client with vendor key: " + appId.value);
    client = AgoraRTC.createClient({
        mode: 'interop'
    });
    client.init(appId, function () {
        console.log("AgoraRTC client initialized");
        client.join(channel_key, 'test', null, function (uid) {
            console.log("User " + uid + " join channel successfully");

            camera = videoSource.value;
            microphone = audioSource.value;
            localStream = AgoraRTC.createStream({
                streamID: uid,
                audio: true,
                cameraId: camera,
                microphoneId: microphone,
                video: true,
                screen: false
            });
            //localStream = AgoraRTC.createStream({streamID: uid, audio: false, cameraId: camera, microphoneId: microphone, video: false, screen: true, extensionId: 'minllpmhdgpndnkomcoccfekfegnlikg'});
            if (document.getElementById("video").checked) {
                localStream.setVideoProfile('720p_3');
            }

            // The user has granted access to the camera and mic.
            localStream.on("accessAllowed", function () {
                console.log("accessAllowed");
            });

            // The user has denied access to the camera and mic.
            localStream.on("accessDenied", function () {
                console.log("accessDenied");
            });

            localStream.init(function () {
                console.log("getUserMedia successfully");
                localStream.play('agora_local');

                client.publish(localStream, function (err) {
                    console.log("Publish local stream error: " + err);
                });

                client.on('stream-published', function (evt) {
                    console.log("Publish local stream successfully");
                });
            }, function (err) {
                console.log("getUserMedia failed", err);
            });
        }, function (err) {
            console.log("Join channel failed", err);
        });
    }, function (err) {
        console.log("AgoraRTC client init failed", err);
    });

    channelKey = "";
    client.on('error', function (err) {
        console.log("Got error msg:", err.reason);
        if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
            client.renewChannelKey(channelKey, function () {
                console.log("Renew channel key successfully");
            }, function (err) {
                console.log("Renew channel key failed: ", err);
            });
        }
    });


    client.on('stream-added', function (evt) {
        var stream = evt.stream;
        console.log("New stream added: " + stream.getId());
        console.log("Subscribe ", stream);
        client.subscribe(stream, function (err) {
            console.log("Subscribe stream failed", err);
        });
    });

    client.on('stream-subscribed', function (evt) {
        var stream = evt.stream;
        console.log("Subscribe remote stream successfully: " + stream.getId());
        if ($('div#video #agora_remote' + stream.getId()).length === 0) {
            $('div#video').append('<div id="agora_remote' + stream.getId() +
                '" style="float:left; width:810px;height:607px;display:inline-block;"></div>');
        }
        stream.play('agora_remote' + stream.getId());
    });

    client.on('stream-removed', function (evt) {
        var stream = evt.stream;
        stream.stop();
        $('#agora_remote' + stream.getId()).remove();
        console.log("Remote stream is removed " + stream.getId());
    });

    client.on('peer-leave', function (evt) {
        var stream = evt.stream;
        if (stream) {
            stream.stop();
            $('#agora_remote' + stream.getId()).remove();
            console.log(evt.uid + " leaved from this channel");
        }
    });
}

function leave() {
    client.leave(function () {
        console.log("Leavel channel successfully");
    }, function (err) {
        console.log("Leave channel failed");
    });
}


// function muteAudio() {
//     localStream.disableAudio();
// }

// function unmuteAudio() {
//     localStream.enableAudio();
// }

// function enableVideo() {
//     localStream.enableVideo();
// }

// function disableVideo() {
//     localStream.disableVideo();
// }

function getDevices() {
    AgoraRTC.getDevices(function (devices) {
        for (var i = 0; i !== devices.length; ++i) {
            var device = devices[i];
            var option = document.createElement('option');
            option.value = device.deviceId;
            if (device.kind === 'audioinput') {
                option.text = device.label || 'microphone ' + (audioSelect.length + 1);
                audioSelect.appendChild(option);
            } else if (device.kind === 'videoinput') {
                option.text = device.label || 'camera ' + (videoSelect.length + 1);
                videoSelect.appendChild(option);
            } else {
                console.log('Some other kind of source/device: ', device);
            }
        }
    });
}

getDevices();


// DOM Manipulation 

$(document).ready(join)

// toggle audio
document.getElementById('audio-toggle').addEventListener('click', function (event) {
    const audio = document.getElementById('audio-toggle')
    if (audio.getAttribute('src') === './assets/Icons/Audio.png') {
        audio.setAttribute('src', './assets/Icons/dis-audio.png')
        localStream.disableAudio();
        console.log("Disabling audio successfully")
    } else {
        audio.setAttribute('src', './assets/Icons/Audio.png')
        console.log("Enabling audio successfully")
        localStream.enableAudio();
    }
})


// toggle video 
$('#video-toggle').click(function () {
    const video = document.getElementById('video-toggle')
    if (video.getAttribute('src') === './assets/Icons/Video.png') {
        video.setAttribute('src', './assets/Icons/disabled-video.png')
        localStream.disableVideo();
        console.log("Disabling video successfully")
    } else {
        video.setAttribute('src', './assets/Icons/Video.png')
        console.log("Enabling video successfully")
        localStream.enableVideo();
    }
})

// end call 
$('#end-call').click(function () {
    console.log('leaving the call')
    leave()
})

// Grab the big video, change margin. 
$('[id^=`agora_remote`]').css('margin-left', '150px')