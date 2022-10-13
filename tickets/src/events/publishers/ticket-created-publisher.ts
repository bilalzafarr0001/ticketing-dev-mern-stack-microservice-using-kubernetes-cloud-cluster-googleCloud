import { Publisher, Subjects, TicketCreatedEvent } from 'common-lib-myproject';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
