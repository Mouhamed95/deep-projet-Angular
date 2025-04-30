import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { NewTicket } from './new-ticket/new-ticket.model';
// import { Ticket } from './ticket/ticket.model';
import { TicketsComponent } from "./tickets/tickets.component";
import { Ticket } from './support.model';

@Component({
  selector: 'app-support-tickets',
  imports: [NewTicketComponent, TicketsComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {
  tickets: Ticket[] = []


  onAdd(ticketData:NewTicket) {
    const ticket: Ticket = {
      title: ticketData.title,
      request:ticketData.text,
      id:Math.random().toString(),
      status:'open',
    }
    this.tickets.push(ticket)
    console.log(ticket)
  }


  onCloseTickets(id:string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return {...ticket, status:"closed"}
      } return ticket
    })
  }

}
