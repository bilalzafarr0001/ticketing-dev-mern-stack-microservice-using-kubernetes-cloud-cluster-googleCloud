import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from 'common-lib-myproject';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
