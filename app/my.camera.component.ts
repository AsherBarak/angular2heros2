import { ViewContainerRef,ComponentFactoryResolver ,ViewRef,
  TemplateRef,ContentChild, OnInit, ContentChildren,QueryList,
   ViewChildren,Component, AfterViewInit, Input } from '@angular/core';
import {My2Component} from './my.2.component'; 
import{MyDirective} from './my.directive';

@Component({
  selector: 'my-camera-component',
  template: `
  <h2>camera</h2>
  <input type="file" id="take-picture" accept="image/*">
  <img src="about:blank" alt="" id="show-picture">
   <p id="error"></p>
<video id="video" width="640" height="480" autoplay></video>
<button id="snap">Snap Photo</button>
<canvas id="canvas" width="640" height="480"></canvas>

`
})
export class MyCameraComponent implements AfterViewInit {
constructor()
{}

public ngAfterViewInit():void
{
    this.f();
    this.f2();
}

f2=(function(){
    // Grab elements, create settings, etc.
var video:any = document.getElementById('video');

// Get access to the camera!
let navigator2:any= (<any>navigator);
if((<any>navigator).mediaDevices && navigator2.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator2.mediaDevices.getUserMedia({ video: true }).then(function(stream:any) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
    });
}
// Elements for taking the snapshot
var canvas:any = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video:any = document.getElementById('video');

// Trigger photo take
document.getElementById("snap").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 640, 480);
});

})

f=(function () {
    var takePicture:any = document.querySelector("#take-picture"),
        showPicture:any = document.querySelector("#show-picture");

    if (takePicture && showPicture) {
        // Set events
        takePicture.onchange = function (event:any) {
            // Get a reference to the taken picture or chosen file
            var files = event.target.files,
                file:any;
            if (files && files.length > 0) {
                file = files[0];
                try {
                    // Create ObjectURL
                    var imgURL = window.URL.createObjectURL(file);

                    // Set img src to ObjectURL
                    showPicture.src = imgURL;

                    // Revoke ObjectURL
                    URL.revokeObjectURL(imgURL);
                }
                catch (e) {
                    try {
                        // Fallback if createObjectURL is not supported
                        var fileReader = new FileReader();
                        fileReader.onload = function (event) {
                            showPicture.src = (<any>event.target).result;
                        };
                        fileReader.readAsDataURL(file);
                    }
                    catch (e) {
                        //
                        var error = document.querySelector("#error");
                        if (error) {
                            error.innerHTML = "Neither createObjectURL or FileReader are supported";
                        }
                    }
                }
            }
        };
    }
});
}
