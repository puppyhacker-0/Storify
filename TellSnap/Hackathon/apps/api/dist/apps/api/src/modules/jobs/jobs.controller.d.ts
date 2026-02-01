import { JobsService } from './jobs.service';
export declare class JobsController {
    private readonly jobsService;
    constructor(jobsService: JobsService);
    getStatus(id: string): Promise<{}>;
    retry(id: string): Promise<{
        success: boolean;
    }>;
    cancel(id: string): Promise<{
        success: boolean;
    }>;
}
