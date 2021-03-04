import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss']
})
export class PostContentComponent implements OnInit {

  constructor() { }
  @Input() content:string="<h1>Hello World!</h1>";

  ngOnInit() {
  }

}
