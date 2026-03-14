import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users:any[] = [];

  login(email:string,password:string){

    const user = this.users.find(u =>
      u.email === email && u.password === password
    );

    if(user){
      localStorage.setItem("user",JSON.stringify(user));
      return true;
    }

    return false;

  }

  register(user:any){
    this.users.push(user);
  }

  isLogged(){
    return localStorage.getItem("user") != null;
  }

  logout(){
    localStorage.removeItem("user");
  }

}
