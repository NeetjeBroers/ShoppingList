import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {
  image: any;

  constructor(
    private camera: Camera
    )  {}

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((ImageData) => {
      this.image = 'data:image/jpeg;base64,' + ImageData;
      console.log(this.image);

    }, (err) => {
      console.log('Camera issue:' + err);
    });
  }


  ngOnInit() {
  }

}
