import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule,FormBuilder,FormGroup} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpServiceService} from 'src/app/services/http/http-service.service';
import {AuthenticationService} from 'src/app/services/authentication/authentication.service';
import {ToastService} from 'src/app/services/toas/toast.service';
import { IonicStorageModule  } from '@ionic/storage';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
//import { Base64ToGalleryOriginal } from '@ionic-native/base64-to-gallery';
import { Camera} from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), FormsModule,HttpClientModule,AppRoutingModule, IonicStorageModule.forRoot(),],
  providers: [
    StatusBar,
    SplashScreen,
    HttpServiceService,
    AuthenticationService,
    Camera,
    FileChooser,
    //Base64ToGalleryOriginal,
    ToastService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
