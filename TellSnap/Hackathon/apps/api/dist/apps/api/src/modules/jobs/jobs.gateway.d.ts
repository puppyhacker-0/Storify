import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { RedisService } from '../../redis/redis.service';
export declare class JobsGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private redis;
    server: Server;
    private subscriptions;
    constructor(redis: RedisService);
    private setupRedisSubscriber;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    handleSubscribe(client: Socket, jobId: string): {
        success: boolean;
        jobId: string;
    };
    handleUnsubscribe(client: Socket, jobId: string): {
        success: boolean;
        jobId: string;
    };
}
