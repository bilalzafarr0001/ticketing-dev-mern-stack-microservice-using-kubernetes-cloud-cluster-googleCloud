import { Subjects, Publisher, PaymentCreatedEvent } from 'common-lib-myproject';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
