import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  async getUsers(){
    const res = await fetch('https://fakestoreapi.com/users');
    return await res.json();
  }
}
