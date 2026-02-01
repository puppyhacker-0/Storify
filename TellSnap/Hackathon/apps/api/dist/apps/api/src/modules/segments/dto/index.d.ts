export declare class SubmitSegmentDto {
    sceneId: string;
    prompt: string;
    orderIndex?: number;
}
export declare class GenerateVideoDto {
    segmentId: string;
    aspectRatio?: string;
    durationSeconds?: number;
}
export declare class SegmentResponseDto {
    id: string;
    sceneId: string;
    orderIndex: number;
    prompt: string;
    expandedScript?: string;
    status: string;
    videoUrl?: string;
    hlsUrl?: string;
    thumbnailUrl?: string;
    duration?: number;
    createdAt: Date;
    completedAt?: Date;
    createdBy: {
        id: string;
        username: string;
        avatarUrl?: string;
    };
}
export declare class JobStatusDto {
    jobId: string;
    segmentId: string;
    status: string;
    progress: number;
    stage?: string;
    error?: string;
}
