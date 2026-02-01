export declare class CreateSceneDto {
    title: string;
    description: string;
    topicId?: string;
    initialPrompt: string;
}
export declare class ContinueSceneDto {
    parentSegmentId: string;
    prompt: string;
}
export declare class ListScenesQueryDto {
    page?: number;
    limit?: number;
    topicId?: string;
    categoryId?: string;
    genre?: string;
    sort?: 'recent' | 'popular' | 'trending';
}
