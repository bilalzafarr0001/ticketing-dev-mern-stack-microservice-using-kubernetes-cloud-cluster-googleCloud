import { Publisher, Subjects, TicketUpdatedEvent } from 'common-lib-myproject';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
