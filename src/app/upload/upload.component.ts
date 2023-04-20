import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';
import { DocumentC, Image } from '../allinterface';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.sass'],
})
export class UploadComponent implements OnInit {
  uploadedFiles: any[] = [];
  public formdata = new FormData();
  public imagearr: Image[] = [];
  public postImages = new DocumentC();
  public isWorking: boolean;
  title = 'gfgangularwebcam';
  camera: boolean;

  public webcamImage: WebcamImage;
  private trigger: Subject<void> = new Subject<void>();

  constructor(private service: AppServiceService) {}

  ngOnInit(): void {
    this.camera = false;
  }
  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }
  save() {
    console.log(this.uploadedFiles)
    this.isWorking = true;
    this.uploadedFiles.forEach((res) => this.formdata.append('file', res));
    this.service.postImages(this.formdata).subscribe((res) => {
      this.imagearr = res.file;
      this.isWorking = false
    },
    (err)=>{
      console.log(err);
      this.isWorking = false
    });
  }
  saveCamera() {
    var blob = this.dataURItoBlob(this.webcamImage.imageAsDataUrl);
    var fd = new FormData(document.forms[0]);
    fd.append("file", blob);
    this.service.postImages(fd).subscribe((res) => {
      this.imagearr = res.file;
    });
  }
  dataURItoBlob(dataURI: any) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    //Old Code
    //write the ArrayBuffer to a blob, and you're done
    //var bb = new BlobBuilder();
    //bb.append(ab);
    //return bb.getBlob(mimeString);

    //New Code
    return new Blob([ab], {type: mimeString});


}
  saveConverted() {
    this.isWorking = true;
    this.postImages.images = this.imagearr;
    this.service.saveImages(this.postImages).subscribe((res) => {
      console.log(res);
      this.isWorking = false;
    },
    err=>{
      console.log(err);
      this.isWorking = false;
    });
  }

  // for camera
  triggerSnapshot(): void {
    this.trigger.next();
  }
  handleImage(webcamImage: WebcamImage): void {
    console.info('Saved webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  showCam() {
    this.camera = true;
  }
}
