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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const redis_service_1 = require("../../redis/redis.service");
let JobsGateway = class JobsGateway {
    redis;
    server;
    subscriptions = new Map();
    constructor(redis) {
        this.redis = redis;
        this.setupRedisSubscriber();
    }
    async setupRedisSubscriber() {
        const subscriber = this.redis.getClient().duplicate();
        await subscriber.subscribe('job:progress', 'job:complete');
        subscriber.on('message', (channel, message) => {
            const data = JSON.parse(message);
            const socketIds = this.subscriptions.get(data.jobId);
            if (socketIds) {
                socketIds.forEach((socketId) => {
                    this.server.to(socketId).emit(channel, data);
                });
            }
        });
    }
    handleConnection(client) {
        console.log(`Client connected: ${client.id}`);
    }
    handleDisconnect(client) {
        console.log(`Client disconnected: ${client.id}`);
        this.subscriptions.forEach((socketIds, jobId) => {
            socketIds.delete(client.id);
            if (socketIds.size === 0) {
                this.subscriptions.delete(jobId);
            }
        });
    }
    handleSubscribe(client, jobId) {
        if (!this.subscriptions.has(jobId)) {
            this.subscriptions.set(jobId, new Set());
        }
        this.subscriptions.get(jobId).add(client.id);
        return { success: true, jobId };
    }
    handleUnsubscribe(client, jobId) {
        const socketIds = this.subscriptions.get(jobId);
        if (socketIds) {
            socketIds.delete(client.id);
            if (socketIds.size === 0) {
                this.subscriptions.delete(jobId);
            }
        }
        return { success: true, jobId };
    }
};
exports.JobsGateway = JobsGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], JobsGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('subscribe:job'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], JobsGateway.prototype, "handleSubscribe", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('unsubscribe:job'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", void 0)
], JobsGateway.prototype, "handleUnsubscribe", null);
exports.JobsGateway = JobsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: process.env.WEB_URL || 'http://localhost:3000',
            credentials: true,
        },
    }),
    __metadata("design:paramtypes", [redis_service_1.RedisService])
], JobsGateway);
//# sourceMappingURL=jobs.gateway.js.map