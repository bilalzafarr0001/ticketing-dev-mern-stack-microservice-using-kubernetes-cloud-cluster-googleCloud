import { Publisher, OrderCreatedEvent, Subjects } from 'common-lib-myproject';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
