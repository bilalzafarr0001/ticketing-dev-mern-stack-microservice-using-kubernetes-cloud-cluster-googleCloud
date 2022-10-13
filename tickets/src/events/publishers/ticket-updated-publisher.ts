import { Publisher, Subjects, TicketUpdatedEvent } from 'common-lib-myproject';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
