import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); 
export const createAccessToken = (id) => {
  if (!process.env.ACCESS_TOKEN_SECRET) {
    throw new Error('ACCESS_TOKEN_SECRET not configured');
  }
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
};

export const createRefreshToken = (id) => {
  if (!process.env.REFRESH_TOKEN_SECRET) {
    throw new Error('REFRESH_TOKEN_SECRET not configured');
  }
  return jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '90d' });
};

// Send the access token in the response
export const sendAccessToken = (_req, res, { accessToken, ...userData }) => {
  res.json({
    success: true,
    accessToken,
    ...userData,
    message: 'Login successful'
  });
};

// Send the refresh token as an HTTP-only cookie
export const sendRefreshToken = (res, token) => {
  res.cookie('refreshtoken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Only secure cookies in production
    sameSite: 'strict',
    maxAge: 90 * 24 * 60 * 60 * 1000 // 90 days
  });
};
