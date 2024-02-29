import { QueueName, QueueResponse } from "../../domain/entities";
import { BrokerRepository } from "../../domain/repository/BrokerRepository";

export class ConsumeChannelService {
  constructor(private readonly brokerRepository: BrokerRepository) {}
  async run(queueName: QueueName, callbackToDo: (msg: QueueResponse) => void) {
    try {
      const msg = await this.brokerRepository.consumeChannel(queueName);
      console.log(msg);
      await callbackToDo(msg);
      this.brokerRepository.deleteMessage(queueName, msg);
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
