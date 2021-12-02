import { Publisher, Subjects, TicketCreatedEvent } from "@pf-tickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
