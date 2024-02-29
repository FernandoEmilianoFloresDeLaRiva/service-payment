import { ConsumeChannelService } from "../../shared/broker/application/services/consumeChannel.service";
import { SendMessageService } from "../../shared/broker/application/services/sendMessage.service";
import { AmqpLibPort } from "../../shared/broker/infraestructure/ports/AmqpLib";
import { CreatePaymentService } from "../application/services/createPayment.service";

const amqplLib = new AmqpLibPort("");

const sendMessageService = new SendMessageService(amqplLib);
export const consumeChannelService = new ConsumeChannelService(amqplLib);

export const createPaymentService = new CreatePaymentService(
  sendMessageService
);
