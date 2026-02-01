"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationSchema = exports.createIdeaSchema = exports.createTopicSchema = exports.continueSceneSchema = exports.createSceneSchema = exports.signupSchema = exports.loginSchema = void 0;
const zod_1 = require("zod");
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email address'),
    password: zod_1.z.string().min(8, 'Password must be at least 8 characters'),
});
exports.signupSchema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email address'),
    password: zod_1.z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(/[A-Z]/, 'Password must contain an uppercase letter')
        .regex(/[a-z]/, 'Password must contain a lowercase letter')
        .regex(/[0-9]/, 'Password must contain a number'),
    username: zod_1.z
        .string()
        .min(3, 'Username must be at least 3 characters')
        .max(30, 'Username must be at most 30 characters')
        .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, underscores, and hyphens'),
});
exports.createSceneSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .min(3, 'Title must be at least 3 characters')
        .max(200, 'Title must be at most 200 characters'),
    description: zod_1.z
        .string()
        .min(10, 'Description must be at least 10 characters')
        .max(2000, 'Description must be at most 2000 characters'),
    topicId: zod_1.z.string().uuid('Invalid topic ID'),
    categoryId: zod_1.z.string().uuid('Invalid category ID').optional(),
    initialPrompt: zod_1.z
        .string()
        .min(20, 'Prompt must be at least 20 characters')
        .max(5000, 'Prompt must be at most 5000 characters'),
});
exports.continueSceneSchema = zod_1.z.object({
    parentSegmentId: zod_1.z.string().uuid('Invalid segment ID'),
    prompt: zod_1.z
        .string()
        .min(10, 'Prompt must be at least 10 characters')
        .max(5000, 'Prompt must be at most 5000 characters'),
});
exports.createTopicSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must be at most 100 characters'),
    description: zod_1.z
        .string()
        .min(10, 'Description must be at least 10 characters')
        .max(500, 'Description must be at most 500 characters'),
});
exports.createIdeaSchema = zod_1.z.object({
    topicId: zod_1.z.string().uuid('Invalid topic ID'),
    title: zod_1.z
        .string()
        .min(5, 'Title must be at least 5 characters')
        .max(200, 'Title must be at most 200 characters'),
    description: zod_1.z
        .string()
        .min(20, 'Description must be at least 20 characters')
        .max(2000, 'Description must be at most 2000 characters'),
});
exports.paginationSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().int().min(1).default(1),
    limit: zod_1.z.coerce.number().int().min(1).max(100).default(20),
    cursor: zod_1.z.string().optional(),
});
//# sourceMappingURL=index.js.map