"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const common_1 = require("@nestjs/common");
const ioredis_1 = __importDefault(require("ioredis"));
let RedisService = class RedisService {
    client;
    constructor() {
        this.client = new ioredis_1.default(process.env.REDIS_URL || 'redis://localhost:6379');
    }
    async onModuleDestroy() {
        await this.client.quit();
    }
    getClient() {
        return this.client;
    }
    async get(key) {
        const data = await this.client.get(key);
        return data ? JSON.parse(data) : null;
    }
    async set(key, value, ttlSeconds) {
        const data = JSON.stringify(value);
        if (ttlSeconds) {
            await this.client.setex(key, ttlSeconds, data);
        }
        else {
            await this.client.set(key, data);
        }
    }
    async del(key) {
        await this.client.del(key);
    }
    async exists(key) {
        return (await this.client.exists(key)) === 1;
    }
    async publish(channel, message) {
        await this.client.publish(channel, JSON.stringify(message));
    }
    async checkRateLimit(key, limit, windowSeconds) {
        const current = await this.client.incr(key);
        if (current === 1) {
            await this.client.expire(key, windowSeconds);
        }
        return {
            allowed: current <= limit,
            remaining: Math.max(0, limit - current),
        };
    }
};
exports.RedisService = RedisService;
exports.RedisService = RedisService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], RedisService);
//# sourceMappingURL=redis.service.js.map