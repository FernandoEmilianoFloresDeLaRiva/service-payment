import { QueueResponse } from "../entities/QueueResponse";
import { QueueName, QueueRequest } from "../entities/index";

export interface BrokerRepository {
  connectionBroker(): Promise<any>;
  createChannel(): Promise<any>;
  sendMessageToChannel(req: QueueRequest): Promise<void>;
  deleteMessage(queueName: QueueName, data: any): Promise<void>;
  consumeChannel(queueName: QueueName): Promise<QueueResponse>;
}
