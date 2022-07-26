import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {FileChooser} from '@ionic-native/file-chooser/ngx';
declare var faceapi;
const MODEL_URL = "http://localhost:8080/face_api_models";
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public form = {
    name:null,
    email:null,
    password:null
  }
  constructor(public actionSheetController: ActionSheetController, public camera: Camera, public filechooser:FileChooser) { }

  ngOnInit() {
  }
  register(){
    console.log("registro cuando se ha cliqueado")
  }
  async loadActionSheet(){
      const actionSheet = await this.actionSheetController.create({
        header: 'Selecciona una imagen',
        buttons:[{
          text: 'Camara',
          icon: 'camera',
          handler:()=>{
            this.loadCamera();
          }
        },{
          text: 'Imagenes',
          icon: 'images',
          handler:()=>{
            this.loadFileChooser();
          }
        },{
          text:'Cancel',
          icon:'close',
          role:'cancel',
          handler:()=>{
            console.log('Cancelado')
          }
        }]
      });
   await actionSheet.present();   
  }
  loadFileChooser(){
    let cameraOptions = this.cameraOptions(this.camera.PictureSourceType.PHOTOLIBRARY);
    this.camera.getPicture(cameraOptions).then(async (ImageData)=>{

    })
  }
  cameraOptions(sourceType){
    let option:CameraOptions ={
      quality:100,
      sourceType:sourceType,
      saveToPhotoAlbum:false,
      correctOrientation:true,
      allowEdit:false,
      destinationType:this.camera.DestinationType.DATA_URL,
      mediaType:this.camera.MediaType.PICTURE,
      encodingType:this.camera.EncodingType.JPEG,
      targetHeight:500,
      targetWidth:500,
    }
    return option
  }
  loadCamera(){
    let cameraOptions = this.cameraOptions(this.camera.PictureSourceType.CAMERA);
    this.camera.getPicture(cameraOptions).then(async(imageData)=>{
      console.log(imageData);
    })
  }
}
