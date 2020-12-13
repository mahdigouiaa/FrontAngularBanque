import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../client-service.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.sass']
})
export class ClientListComponent implements OnInit {

  displayedColumns: string[] = ['Nom', 'Prenom', 'Adresse','Actions'];
  dataSource ;

  constructor(private clientService:ClientServiceService) { }

  ngOnInit(): void {
    this.fillTable()
  }

  fillTable(){
    this.clientService.getAllClients().subscribe(data =>{
      this.dataSource = data;
    })
  }

  doView(client){

  }

  doEdit(client){
    
  }

  doDelete(client){
    this.clientService.deleteClient(client.id).subscribe(res =>{
      res ? this.fillTable():'';
    })
    
  }

}
