import { Component, inject } from '@angular/core';
import { CardComponent } from '../../componets/card/card.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export  default class HomeComponent {

  users:any = [];
  UsersService = inject(UsersService);

  ngOnInit(){
     this.getUsers();
     }
  
 async getUsers (){
  this.users = await this.UsersService.getUsers();
 }

}
