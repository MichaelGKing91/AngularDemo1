import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-word',
  templateUrl: './show-word.component.html',
  styleUrls: ['./show-word.component.css']
})
export class ShowWordComponent implements OnInit {

  @Input() theword: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
