import { Publisher, Subjects, TicketUpdatedEvent } from "@pf-tickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
