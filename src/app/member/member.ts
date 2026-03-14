import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './member.html',
  styleUrl: './member.css',
})
export class MemberComponent implements OnInit {

  nom: string = '';
  prenom: string = '';
  adresse: string = '';
  email: string = '';
  telephone: string = '';

  cardNumber: string = '';
  cardName: string = '';
  cardDate: string = '';
  cardCvv: string = '';

  memberId: string = '';
  photoPreview: any;

  showBadge: boolean = false;
  paid: boolean = false;

  constructor(private authService: AuthService ,private router:Router) {}

  ngOnInit(){

    if(!this.authService.isLogged()){

      alert("Vous devez vous connecter pour accéder à cette page");

      this.router.navigate(['/login']);

    }

  }

  onFileSelected(event:any){

    const file = event.target.files[0];

    if(file){

      const reader = new FileReader();

      reader.onload = () => {
        this.photoPreview = reader.result;
      }

      reader.readAsDataURL(file);

    }

  }

  payerCarte(){

    if(
      this.cardNumber.trim() === '' ||
      this.cardName.trim() === '' ||
      this.cardDate.trim() === '' ||
      this.cardCvv.trim() === ''
    ){

      alert("Veuillez remplir les informations de carte");

      return;

    }

    alert("Paiement de 10$ accepté");

    this.paid = true;

  }

  devenirMembre(){

    if(!this.paid){

      alert("Vous devez payer 10$ pour devenir membre");

      return;

    }

    this.memberId = Math.floor(Math.random()*10000).toString();

    this.showBadge = true;

  }

  printBadge(){

    if(!this.paid){

      alert("Vous devez payer 10$ avant d'imprimer le badge");

      return;

    }

    window.print();

  }

}
