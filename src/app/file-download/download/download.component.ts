import { Component, OnInit } from '@angular/core';
import { DownloadService } from '../download.service'


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  data:any;
   constructor(private excelService: DownloadService) {
     this.data = [
    [1, '50', '20', '25', '20'],
    [2, '80', '20', '25', '20'],
    [3, '120', '20', '25', '20'],  
    [4, '75', '20', '25', '20'],  
    [5, '60', '20', '25', '20'],  
    [6, '80', '20', '25', '20'],  
    [7, '95', '20', '25', '20'],  
    [8, '55', '20', '25', '20'],  
    [9, '45', '20', '25', '20'],  
    [10, '80', '20', '25', '20'],  
    [11, '90', '20', '25', '20'],  
    [12, '110', '20', '25', '20'],      
  ];

  }

  generateExcel() {

   // console.log('called');
    this.excelService.generateExcel();
  }
  ngOnInit(): void {
  }

  

}
