import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'item-cliente',
  templateUrl: './item-cliente.component.html',
  styleUrls: ['./item-cliente.component.css']
})
export class ItemClienteComponent implements OnInit {

  @Input() public title:    string;
  @Input() public imageUrl: string;
  @Input() public index:    number;

  constructor() {}

  ngOnInit() {}

}
