import { AuthService } from './auth.service';
import { LoginDto, SignupDto, RefreshTokenDto, ForgotPasswordDto, ResetPasswordDto } from './dto';
import { JwtPayload } from '@storyforge/shared';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(dto: SignupDto): Promise<{
        accessToken: string;
        refreshToken: string;
        expiresAt: number;
        user: {
            id: string;
            email: string;
            role: string;
        };
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
        expiresAt: number;
        user: {
            id: string;
            email: string;
            role: string;
        };
    }>;
    refresh(dto: RefreshTokenDto): Promise<{
        accessToken: string;
        refreshToken: string;
        expiresAt: number;
        user: {
            id: string;
            email: string;
            role: string;
        };
    }>;
    forgotPassword(dto: ForgotPasswordDto): Promise<{
        resetToken?: string | undefined;
        resetUrl?: string | undefined;
        success: boolean;
        message: string;
    }>;
    resetPassword(dto: ResetPasswordDto): Promise<{
        success: boolean;
        message: string;
    }>;
    logout(user: JwtPayload): Promise<{
        success: boolean;
    }>;
    getMe(user: JwtPayload): Promise<{
        id: string;
        email: string;
        username: string;
        displayName: string | undefined;
        avatarUrl: string | undefined;
        role: string;
        createdAt: Date;
    }>;
}
