export type JwtPayload = {
  userId: string;
  email: string;
};
export type JwtRefreshTokenPayload = JwtPayload & { refreshToken: string };
