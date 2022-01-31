import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './file-upload/upload/upload.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DownloadComponent } from './file-download/download/download.component';
import { OutputComponent } from './file-output/output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    DownloadComponent,
    OutputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
