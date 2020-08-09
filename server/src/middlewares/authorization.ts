import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const secret = 'M@S7Er Ch1ef';

function createToken(user: string): string {
  return jwt.sign(user, secret);
}

function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction,
): Response<any> | void {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(401).json({ status: true, message: 'No token provided' });
  }

  const verify = jwt.verify(String(token), secret);
  console.log(verify);

  next();
}

export { createToken, verifyToken };
