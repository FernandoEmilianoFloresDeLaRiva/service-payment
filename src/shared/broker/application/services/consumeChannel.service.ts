import { QueueName } from "../../domain/entities";
import { BrokerRepository } from "../../domain/repository/BrokerRepository";

export class ConsumeChannelService {
  constructor(private readonly brokerRepository: BrokerRepository) {}
  async run(queueName: QueueName): Promise<any> {
    try {
      const msg = await this.brokerRepository.consumeChannel(queueName);
      const content = msg?.content;
      const parsedContent = JSON.parse(content.toString());
      const objectToSent = {
        msg,
        parsedContent,
      };
      return objectToSent;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}
