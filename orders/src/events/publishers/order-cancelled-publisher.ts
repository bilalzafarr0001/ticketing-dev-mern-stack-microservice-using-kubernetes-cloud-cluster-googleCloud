import { Subjects, Publisher, OrderCancelledEvent } from 'common-lib-myproject';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
