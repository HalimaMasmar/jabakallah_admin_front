import { TokenStorageService } from '../../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(
    private router: Router, private tokenStorage:TokenStorageService
  ) { }

  ngOnInit(): void {
  }

  logOutClicked(){
    this.router.navigate(['adminLogIn']);
    this.tokenStorage.signOut();
  }
  
}
