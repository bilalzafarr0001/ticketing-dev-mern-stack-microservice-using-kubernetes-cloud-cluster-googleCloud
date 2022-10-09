import { Publisher, Subjects, TicketCreatedEvent } from 'common-lib-myproject';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
