import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router, RouterModule} from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  nom = '';
  prenom = '';
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  register(){

    const user = {
      nom:this.nom,
      prenom:this.prenom,
      email:this.email,
      password:this.password
    }

    this.authService.register(user);

    alert("Compte créé avec succès");

    this.router.navigate(['/login']);

  }

}
