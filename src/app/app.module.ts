import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadComponent } from './upload/upload.component';
import { ApproveComponent } from './approve/approve.component';
import { SearchComponent } from './search/search.component';
import { CameraComponent } from './camera/camera.component';
import {FileUploadModule} from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {MenubarModule} from 'primeng/menubar';
import {SidebarModule} from 'primeng/sidebar';
import { HistoryComponent } from './history/history.component';
import { ValidateComponent } from './validate/validate.component';
import { RejectedComponent } from './rejected/rejected.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { WebcamModule } from 'ngx-webcam';
import { UsersComponent } from './users/users.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    UploadComponent,
    ApproveComponent,
    SearchComponent,
    CameraComponent,
    HistoryComponent,
    ValidateComponent,
    RejectedComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextareaModule,
    MenubarModule,
    SidebarModule,
    TableModule,
    InputTextModule,
    WebcamModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
