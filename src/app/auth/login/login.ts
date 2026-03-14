import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import {Router, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(
    private authService:AuthService,
    private router:Router
  ){}

  login(){

    const ok = this.authService.login(this.email,this.password);

    if(ok){

      alert("Connexion réussie");

      this.router.navigate(['/member']);

    }else{

      alert("Email ou mot de passe incorrect");

    }

  }

}
