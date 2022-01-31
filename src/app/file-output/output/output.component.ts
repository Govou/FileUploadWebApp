import { Component, Input, OnInit } from '@angular/core';
import { ProcessedOutput } from 'src/app/models/processed-output';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @Input() item = new ProcessedOutput();

  constructor() { }

  ngOnInit(): void {
  }

}
