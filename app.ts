import {
  consumeChannelService,
  createPaymentService,
} from "./src/payment/infraestructure/dependencies";
import { QueueName } from "./src/shared/broker/domain/entities";

consumeChannelService.run(QueueName.INITIAL, createPaymentService.run);
