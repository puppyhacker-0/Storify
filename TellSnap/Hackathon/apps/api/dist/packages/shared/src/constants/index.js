"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODERATION_CONFIG = exports.ERROR_CODES = exports.QUEUE_NAMES = exports.CACHE_TTL = exports.CACHE_KEYS = exports.getHlsPath = exports.getThumbnailPath = exports.getVideoPath = exports.STORAGE_PATHS = exports.VIDEO_CONFIG = exports.CONTINUITY_CONFIG = exports.JOB_CONFIG = exports.RATE_LIMITS = void 0;
exports.RATE_LIMITS = {
    API_GENERAL: 100,
    API_AUTHENTICATED: 200,
    SCENE_CREATE_PER_HOUR: 5,
    SEGMENT_CREATE_PER_HOUR: 10,
    IDEA_CREATE_PER_DAY: 20,
    TOPIC_CREATE_PER_DAY: 3,
    REPORT_PER_HOUR: 10,
};
exports.JOB_CONFIG = {
    MAX_ATTEMPTS: 3,
    RETRY_DELAYS_MS: [1000, 5000, 30000],
    SCRIPT_EXPANSION_TIMEOUT_MS: 30000,
    VIDEO_GENERATION_TIMEOUT_MS: 600000,
    THUMBNAIL_GENERATION_TIMEOUT_MS: 60000,
    PRIORITY: {
        URGENT: 1,
        HIGH: 2,
        NORMAL: 5,
        LOW: 10,
    },
};
exports.CONTINUITY_CONFIG = {
    RECENT_SEGMENTS_VERBATIM: 3,
    SUMMARY_MAX_LENGTH: 2000,
    SEGMENTS_PER_SUMMARY: 10,
    BIBLE_LOCK_TIMEOUT_MS: 30000,
    AUTO_FIX_CONFIDENCE_THRESHOLD: 0.85,
};
exports.VIDEO_CONFIG = {
    MIN_SEGMENT_DURATION_MS: 5000,
    MAX_SEGMENT_DURATION_MS: 120000,
    DEFAULT_SEGMENT_DURATION_MS: 30000,
    PREVIEW_RESOLUTION: '720p',
    FINAL_RESOLUTION: '1080p',
    HLS_SEGMENT_DURATION_S: 6,
    HLS_PLAYLIST_TYPE: 'VOD',
    THUMBNAIL_WIDTH: 640,
    THUMBNAIL_HEIGHT: 360,
    THUMBNAIL_FORMAT: 'webp',
};
exports.STORAGE_PATHS = {
    VIDEOS: 'videos',
    THUMBNAILS: 'thumbnails',
    HLS: 'hls',
    REFERENCE_IMAGES: 'references/images',
    VOICE_ANCHORS: 'references/voices',
    TEMP: 'temp',
};
const getVideoPath = (sceneId, segmentId, quality) => `${exports.STORAGE_PATHS.VIDEOS}/${sceneId}/${segmentId}/${quality}.mp4`;
exports.getVideoPath = getVideoPath;
const getThumbnailPath = (sceneId, segmentId) => `${exports.STORAGE_PATHS.THUMBNAILS}/${sceneId}/${segmentId}.webp`;
exports.getThumbnailPath = getThumbnailPath;
const getHlsPath = (sceneId, segmentId) => `${exports.STORAGE_PATHS.HLS}/${sceneId}/${segmentId}/manifest.m3u8`;
exports.getHlsPath = getHlsPath;
exports.CACHE_KEYS = {
    TOPIC_LIST: 'topics:all',
    TOPIC_BY_SLUG: (slug) => `topics:slug:${slug}`,
    CATEGORY_BY_TOPIC: (topicId) => `categories:topic:${topicId}`,
    SCENE_DETAIL: (sceneId) => `scenes:${sceneId}`,
    SCENE_BIBLE: (sceneId) => `bibles:${sceneId}`,
    SCENE_SEGMENTS: (sceneId) => `segments:scene:${sceneId}`,
    JOB_STATUS: (jobId) => `jobs:${jobId}`,
    USER_PROFILE: (userId) => `users:${userId}`,
    FEATURED_SCENES: 'scenes:featured',
    TRENDING_SCENES: 'scenes:trending',
};
exports.CACHE_TTL = {
    SHORT: 60,
    MEDIUM: 300,
    LONG: 3600,
    VERY_LONG: 86400,
};
exports.QUEUE_NAMES = {
    SCRIPT_EXPANSION: 'script-expansion',
    CONTINUITY_CHECK: 'continuity-check',
    VIDEO_GENERATION: 'video-generation',
    THUMBNAIL_GENERATION: 'thumbnail-generation',
    HLS_PACKAGING: 'hls-packaging',
    SUMMARY_UPDATE: 'summary-update',
    MODERATION: 'moderation',
    NOTIFICATIONS: 'notifications',
    DEAD_LETTER: 'dead-letter',
};
exports.ERROR_CODES = {
    AUTH_INVALID_TOKEN: 'AUTH_INVALID_TOKEN',
    AUTH_EXPIRED_TOKEN: 'AUTH_EXPIRED_TOKEN',
    AUTH_UNAUTHORIZED: 'AUTH_UNAUTHORIZED',
    VALIDATION_FAILED: 'VALIDATION_FAILED',
    INVALID_INPUT: 'INVALID_INPUT',
    NOT_FOUND: 'NOT_FOUND',
    ALREADY_EXISTS: 'ALREADY_EXISTS',
    BIBLE_VERSION_CONFLICT: 'BIBLE_VERSION_CONFLICT',
    CONTINUITY_VALIDATION_FAILED: 'CONTINUITY_VALIDATION_FAILED',
    JOB_FAILED: 'JOB_FAILED',
    JOB_TIMEOUT: 'JOB_TIMEOUT',
    RATE_LIMITED: 'RATE_LIMITED',
    CONTENT_REJECTED: 'CONTENT_REJECTED',
    CONTENT_PENDING_REVIEW: 'CONTENT_PENDING_REVIEW',
    INTERNAL_ERROR: 'INTERNAL_ERROR',
    SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
};
exports.MODERATION_CONFIG = {
    BLOCKED_PATTERNS: [],
    AUTO_APPROVE_THRESHOLD: 0.95,
    AUTO_REJECT_THRESHOLD: 0.1,
    REPORT_THRESHOLD_FOR_REVIEW: 3,
};
//# sourceMappingURL=index.js.map