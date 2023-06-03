import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from 'src/app/Interfaces(Modules)/Agent';
import { AdminService } from '../_services/admin.service';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  agents: Agent[];
  errorMessage: any;
  numberOfLines: number;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken() == null) {
      this.router.navigate(['adminLogIn']);
    } else {
      this.adminService.findAllAgents().subscribe({
        next: data => {
          this.agents = data;
          console.log(data);
          this.numberOfLines = this.agents.length; // Calculate the number of lines
        },
        error: err => {
          this.errorMessage = err.error.message;
        }
      });
    }
  }

  goToAgentDetails(agent: Agent) {
    // Your code for navigating to agent details page
  }
}
