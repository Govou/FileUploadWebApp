import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash'
import { ProcessedOutput } from 'src/app/models/processed-output';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
 // providers: [LoadingService]
})

export class UploadComponent implements OnInit {

  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef = new ElementRef(null);
  fileUploadForm: FormGroup = new FormGroup({});
  fileInputLabel: string = "";
  outputItem: ProcessedOutput  = new ProcessedOutput();
  noOfCol: string = "0";
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fileUploadForm = this.formBuilder.group({
      myfile: ['']
    });
  }

  onFileSelect(event: any) {
    let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // console.log(file);

      if (!_.includes(af, file.type)) {
        alert('Only EXCEL Docs Allowed!');
      } else {
        this.fileInputLabel = file.name;
        this.fileUploadForm.get('myfile')!.setValue(file);
      }
    }
  }


  onFormSubmit() {

    if (!this.fileUploadForm.get('myfile')!.value) {
      alert('Please upload a file!');
   //   return false;
    }

    const formData = new FormData();
    formData.append('formFile', this.fileUploadForm.get('myfile')!.value);

    console.log(this.fileUploadForm.get('myfile')!.value);

    this.http
      .post<any>(environment.apiEndpoint, formData).subscribe(response => {
       
        console.log(response);
        this.uploadFileInput.nativeElement.value = "";
        this.fileInputLabel = "";
        let resultStr = JSON.stringify(response)
        this.outputItem = JSON.parse(resultStr);
        this.noOfCol = this.outputItem.noOfColBy9;
      }, error => {
        console.log(error);
      });
  }

}
