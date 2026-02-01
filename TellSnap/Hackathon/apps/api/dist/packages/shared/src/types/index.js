"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobType = exports.UserRole = exports.ContentType = exports.ModerationStatus = exports.JobStatus = void 0;
var JobStatus;
(function (JobStatus) {
    JobStatus["QUEUED"] = "queued";
    JobStatus["SCRIPT_EXPANDING"] = "script_expanding";
    JobStatus["SCRIPT_READY"] = "script_ready";
    JobStatus["CONTINUITY_CHECKING"] = "continuity_checking";
    JobStatus["CONTINUITY_CHECKED"] = "continuity_checked";
    JobStatus["GENERATING_PREVIEW"] = "generating_preview";
    JobStatus["PREVIEW_READY"] = "preview_ready";
    JobStatus["GENERATING_FINAL"] = "generating_final";
    JobStatus["FINAL_READY"] = "final_ready";
    JobStatus["FAILED"] = "failed";
    JobStatus["CANCELLED"] = "cancelled";
})(JobStatus || (exports.JobStatus = JobStatus = {}));
var ModerationStatus;
(function (ModerationStatus) {
    ModerationStatus["PENDING"] = "pending";
    ModerationStatus["APPROVED"] = "approved";
    ModerationStatus["REJECTED"] = "rejected";
    ModerationStatus["FLAGGED"] = "flagged";
})(ModerationStatus || (exports.ModerationStatus = ModerationStatus = {}));
var ContentType;
(function (ContentType) {
    ContentType["TOPIC"] = "topic";
    ContentType["IDEA"] = "idea";
    ContentType["SCENE"] = "scene";
    ContentType["SEGMENT"] = "segment";
    ContentType["SCRIPT"] = "script";
})(ContentType || (exports.ContentType = ContentType = {}));
var UserRole;
(function (UserRole) {
    UserRole["USER"] = "user";
    UserRole["MODERATOR"] = "moderator";
    UserRole["ADMIN"] = "admin";
})(UserRole || (exports.UserRole = UserRole = {}));
var JobType;
(function (JobType) {
    JobType["SCRIPT_EXPANSION"] = "script_expansion";
    JobType["CONTINUITY_CHECK"] = "continuity_check";
    JobType["VIDEO_PREVIEW"] = "video_preview";
    JobType["VIDEO_FINAL"] = "video_final";
    JobType["THUMBNAIL_GENERATION"] = "thumbnail_generation";
    JobType["HLS_PACKAGING"] = "hls_packaging";
    JobType["SUMMARY_UPDATE"] = "summary_update";
})(JobType || (exports.JobType = JobType = {}));
//# sourceMappingURL=index.js.map