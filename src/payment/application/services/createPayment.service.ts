import { ConsumeChannelService } from "../../../shared/broker/application/services/consumeChannel.service";
import { SendMessageService } from "../../../shared/broker/application/services/sendMessage.service";
import { QueueName } from "../../../shared/broker/domain/entities";

export class CreatePaymentService {
  constructor(
    private readonly sendMessageService: SendMessageService,
    private readonly consumeChannelService: ConsumeChannelService
  ) {}
  async run(): Promise<void> {
    try {
      const order = await this.consumeChannelService.run(QueueName.INITIAL);
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
