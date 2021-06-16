import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-num',
  templateUrl: './show-num.component.html',
  styleUrls: ['./show-num.component.css']
})
export class ShowNumComponent implements OnInit {

  @Input() thenumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
