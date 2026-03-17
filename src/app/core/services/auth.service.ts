import { Injectable } from '@angular/core';

export interface AppUser {
  nom: string;
  prenom: string;
  email: string;
  password: string;
  role: 'USER' | 'ADMIN';
  isMember: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: AppUser[] = [
    {
      nom: 'Admin',
      prenom: 'Fouta',
      email: 'admin@fouta.com',
      password: 'admin123',
      role: 'ADMIN',
      isMember: false
    }
  ];

  private currentUser: AppUser | null = null;

  constructor() {
    const savedUsers = localStorage.getItem('users');
    const savedCurrentUser = localStorage.getItem('currentUser');

    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }

    if (savedCurrentUser) {
      this.currentUser = JSON.parse(savedCurrentUser);
    }
  }

  register(user: Omit<AppUser, 'role' | 'isMember'>): boolean {
    const exists = this.users.some(u => u.email === user.email);

    if (exists) {
      return false;
    }

    const newUser: AppUser = {
      ...user,
      role: 'USER',
      isMember: false
    };

    this.users.push(newUser);
    this.saveUsers();
    return true;
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(
      u => u.email === email && u.password === password
    );

    if (!user) {
      return false;
    }

    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    return true;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  isLogged(): boolean {
    return this.currentUser !== null;
  }

  isAdmin(): boolean {
    return this.currentUser?.role === 'ADMIN';
  }

  isMember(): boolean {
    return this.currentUser?.isMember === true;
  }

  getCurrentUser(): AppUser | null {
    return this.currentUser;
  }

  becomeMember(): void {
    if (!this.currentUser) return;

    this.currentUser.isMember = true;

    this.users = this.users.map(u =>
      u.email === this.currentUser!.email ? this.currentUser! : u
    );

    this.saveUsers();
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

  unsubscribeMember(): void {
    if (!this.currentUser) return;

    this.currentUser.isMember = false;

    this.users = this.users.map(u =>
      u.email === this.currentUser!.email ? this.currentUser! : u
    );

    this.saveUsers();
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

  private saveUsers(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
