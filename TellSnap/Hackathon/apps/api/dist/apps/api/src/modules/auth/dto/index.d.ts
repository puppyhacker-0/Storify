export declare class LoginDto {
    email: string;
    password: string;
}
export declare class SignupDto {
    email: string;
    password: string;
    username: string;
}
export declare class RefreshTokenDto {
    refreshToken: string;
}
export declare class ForgotPasswordDto {
    email: string;
}
export declare class ResetPasswordDto {
    token: string;
    newPassword: string;
}
