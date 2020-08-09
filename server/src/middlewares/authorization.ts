import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const secret = 'M@S7Er Ch1ef';

function createToken(user: string): string {
  return jwt.sign(user, secret);
}

function verifyToken(
  request: Request,
  response: Response,
  next: NextFunction,
): Response<any> | void {
  const token = request.headers['x-access-token'];

  if (!token) {
    return response
      .status(401)
      .json({ status: true, message: 'No token provided' });
  }

  try {
    request.body.userId = jwt.verify(String(token), secret);
  } catch (error) {
    return response
      .status(500)
      .json({ message: 'Failed to authenticate token.' });
  }

  next();
}

export { createToken, verifyToken };
