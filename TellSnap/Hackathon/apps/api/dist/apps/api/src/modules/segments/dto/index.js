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
exports.JobStatusDto = exports.SegmentResponseDto = exports.GenerateVideoDto = exports.SubmitSegmentDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class SubmitSegmentDto {
    sceneId;
    prompt;
    orderIndex;
}
exports.SubmitSegmentDto = SubmitSegmentDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The scene ID this segment belongs to',
        example: 'scene-stellar-odyssey',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SubmitSegmentDto.prototype, "sceneId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The user story prompt/script for this segment',
        example: 'Captain Maya Chen discovers an ancient artifact floating in the nebula.',
        maxLength: 5000,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(5000),
    __metadata("design:type", String)
], SubmitSegmentDto.prototype, "prompt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Optional order index. If not provided, will be appended to the end.',
        example: 3,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], SubmitSegmentDto.prototype, "orderIndex", void 0);
class GenerateVideoDto {
    segmentId;
    aspectRatio;
    durationSeconds;
}
exports.GenerateVideoDto = GenerateVideoDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The segment ID to generate video for',
        example: 'clxyz123...',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], GenerateVideoDto.prototype, "segmentId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Video aspect ratio',
        example: '16:9',
        default: '16:9',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GenerateVideoDto.prototype, "aspectRatio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Target video duration in seconds',
        example: 15,
        default: 8,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(5),
    __metadata("design:type", Number)
], GenerateVideoDto.prototype, "durationSeconds", void 0);
class SegmentResponseDto {
    id;
    sceneId;
    orderIndex;
    prompt;
    expandedScript;
    status;
    videoUrl;
    hlsUrl;
    thumbnailUrl;
    duration;
    createdAt;
    completedAt;
    createdBy;
}
exports.SegmentResponseDto = SegmentResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SegmentResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SegmentResponseDto.prototype, "sceneId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], SegmentResponseDto.prototype, "orderIndex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SegmentResponseDto.prototype, "prompt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], SegmentResponseDto.prototype, "expandedScript", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SegmentResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], SegmentResponseDto.prototype, "videoUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], SegmentResponseDto.prototype, "hlsUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], SegmentResponseDto.prototype, "thumbnailUrl", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], SegmentResponseDto.prototype, "duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], SegmentResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Date)
], SegmentResponseDto.prototype, "completedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Object)
], SegmentResponseDto.prototype, "createdBy", void 0);
class JobStatusDto {
    jobId;
    segmentId;
    status;
    progress;
    stage;
    error;
}
exports.JobStatusDto = JobStatusDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], JobStatusDto.prototype, "jobId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], JobStatusDto.prototype, "segmentId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], JobStatusDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], JobStatusDto.prototype, "progress", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], JobStatusDto.prototype, "stage", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], JobStatusDto.prototype, "error", void 0);
//# sourceMappingURL=index.js.map