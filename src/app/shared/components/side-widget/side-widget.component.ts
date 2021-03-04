import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-widget',
  templateUrl: './side-widget.component.html',
  styleUrls: ['./side-widget.component.scss']
})
export class SideWidgetComponent implements OnInit {

  constructor() { }
  description: string = 'Hey, I’m Anastasios. I’m a web developer living in Thessaloniki, Greece. I am a fan of web development and I am specialized in Frontend using technologies like Angular 2+, HTML5, CSS3, JavaScript, jQuery, Bootstrap, PrimeNG, Material etc. I am also dealing with some Backend stuff such as Node.js, Express, Mongoose, MongoDB.';
  ngOnInit() {
  }

}
