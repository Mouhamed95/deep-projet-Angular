import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerComponent } from './server/server.component';
import { TrafficComponent } from './traffic/traffic.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';
import { DashboardItemComponent } from "./dashboard-item/dashboard-item.component";




@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ServerComponent,
    TrafficComponent,
    SupportTicketsComponent,
    DashboardItemComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  
}
