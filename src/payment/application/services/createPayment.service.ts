import { SendMessageService } from "../../../shared/broker/application/services/sendMessage.service";
import { QueueName } from "../../../shared/broker/domain/entities";
import { OrderInterface } from "../../domain/entities/order";

export class CreatePaymentService {
  constructor(private readonly sendMessageService: SendMessageService) {}
  async run(order: OrderInterface): Promise<void> {
    try {
      const payment = {
        title: `payment with order ${order.name} was created, total: ${order.price}`,
        ...order,
      };
      await this.sendMessageService.run(payment, QueueName.PAYMENT);
      //socket.io logica
      
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  }
}
