import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

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
  styleUrls: ['./member.css'],
})
export class MemberComponent implements OnInit {

  nom = '';
  prenom = '';
  adresse = '';
  email = '';
  telephone = '';

  cardNumber = '';
  cardName = '';
  cardDate = '';
  cardCvv = '';

  memberId = '';
  photoPreview: string | ArrayBuffer | null = null;

  showBadge = false;
  paid = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.authService.isLogged()) {
      alert('Vous devez vous connecter pour accéder à cette page');
      this.router.navigate(['/login']);
      return;
    }

    if (this.authService.isMember()) {
      alert('Vous êtes déjà membre');
      this.router.navigate(['/profil']);
      return;
    }

    const currentUser = this.authService.getCurrentUser();

    if (currentUser) {
      this.nom = currentUser.nom;
      this.prenom = currentUser.prenom;
      this.email = currentUser.email;
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.photoPreview = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  payerCarte(): void {
    if (!this.cardNumber || !this.cardName || !this.cardDate || !this.cardCvv) {
      return;
    }

    alert('Paiement de 10$ accepté');
    this.paid = true;
  }

  devenirMembre(): void {
    if (!this.nom || !this.prenom || !this.adresse || !this.email || !this.telephone || !this.paid) {
      return;
    }

    this.memberId = Math.floor(Math.random() * 10000).toString();
    this.showBadge = true;
    this.authService.becomeMember();

    alert('Félicitations, vous êtes maintenant membre');
  }

  printBadge(): void {
    window.print();
  }
}
