import { Request, Response } from 'express';
import db from '../database/connection';
import validateEmail from '../utils/validateEmail';

export default class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { first_name, last_name, email, password } = request.body;

    const verifyEmail = await db('users')
      .select('id')
      .where('email', '=', email);

    if (verifyEmail.length === 0) {
      if (!validateEmail(email)) {
        return response.status(406).json({ error: 'Invalid Email' });
      }

      if (password.length < 4) {
        return response.status(406).json({ error: 'Password is to short' });
      }

      try {
        await db('users').insert({
          first_name,
          last_name,
          email,
          password,
        });

        return response.status(201).json({ message: 'User has been created' });
      } catch (error) {
        return response.status(400).json({ error });
      }
    }
    return response.status(409).json({ error: 'Email Already exists' });
  }
}
