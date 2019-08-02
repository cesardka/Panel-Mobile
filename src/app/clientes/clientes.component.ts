import { Component, OnInit } from '@angular/core';
import { ItemClienteComponent } from '../item-cliente/item-cliente.component';
import { PassportService } from '../passport.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ItemClienteComponent, PassportService],
})
export class ClientesComponent implements OnInit {

  constructor(private passport: PassportService) { }

  ngOnInit() {
      
  }

  selectClient = (id: number) => {
    console.log("get " + id + " = " + this.passport.Get(id));
  }

  staticListItems = () => {
    return [
      {
        "id" : 1,
        "title": "EmktPro",
        "itemUrl": "",
      },
      {
        "id" : 2,
        "title": "Intranet",
        "itemUrl": "https://panel.cesar.dev.com/img/logo/300000.svg",
      },
      {
        "id" : 6,
        "title": "",
        "itemUrl": "",
      },
    ];
  }
}