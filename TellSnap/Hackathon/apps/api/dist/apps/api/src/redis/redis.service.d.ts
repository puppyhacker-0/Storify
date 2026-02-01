import { OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';
export declare class RedisService implements OnModuleDestroy {
    private client;
    constructor();
    onModuleDestroy(): Promise<void>;
    getClient(): Redis;
    get<T>(key: string): Promise<T | null>;
    set(key: string, value: unknown, ttlSeconds?: number): Promise<void>;
    del(key: string): Promise<void>;
    exists(key: string): Promise<boolean>;
    publish(channel: string, message: unknown): Promise<void>;
    checkRateLimit(key: string, limit: number, windowSeconds: number): Promise<{
        allowed: boolean;
        remaining: number;
    }>;
}
