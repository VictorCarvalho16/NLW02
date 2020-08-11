import { Request, Response } from 'express';

import db from '../database/connection';
import validateEmail from '../utils/validateEmail';
import { cryptPassword, verifyPassword } from '../utils/PasswordCrypt';
import { createToken } from '../middlewares/authorization';

interface IUser {
  userId?: number;
  first_name?: string;
  last_name?: string;
  email: string;
  password: string;
  avatar?: string;
  whatsapp?: string;
  bio?: string;
}

export default class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { first_name, last_name, email, password }: IUser = request.body;

    const verifyEmail = await db('users').select('id').where({ email });

    if (verifyEmail.length === 0) {
      if (!validateEmail(email)) {
        return response.status(406).json({ error: 'Invalid Email' });
      }

      if (password.length < 4) {
        return response.status(406).json({ error: 'Password is too short' });
      }

      try {
        await db('users').insert({
          first_name,
          last_name,
          email,
          password: cryptPassword(password),
        });

        return response.status(201).json({ message: 'User has been created' });
      } catch (error) {
        return response.status(400).json({ error });
      }
    }
    return response.status(409).json({ error: 'Email Already exists' });
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      const deleteUser = await db('users').del().where({ id });
      if (deleteUser === 0) {
        return response.status(404).json({ error: "User Can't find" });
      }
      return response
        .status(200)
        .json({ message: `User ${deleteUser} has been deleted` });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }

  async login(request: Request, response: Response): Promise<Response> {
    const { email, password }: IUser = request.body;

    if (!validateEmail(email)) {
      return response.status(406).json({ error: 'Invalid Email' });
    }

    const dataUser = await db('users')
      .select('password', 'id')
      .where({ email });

    if (dataUser.length === 0) {
      return response.status(404).json({ error: "User don't found" });
    }

    const userId = dataUser[0].id;
    const hash = dataUser[0].password;

    if (verifyPassword(password, hash)) {
      const token = createToken(userId);
      return response
        .status(200)
        .json({ message: 'User logged', token, userId });
    }

    return response.status(401).json({ message: 'Wrong password' });
  }

  async update(request: Request, response: Response): Promise<Response> {
    const {
      userId,
      first_name,
      last_name,
      email,
      avatar,
      whatsapp,
      bio,
    }: IUser = request.body;

    if (!validateEmail(email)) {
      return response.status(406).json({ error: 'Invalid Email' });
    }

    try {
      await db('users')
        .update({
          first_name,
          last_name,
          email,
          avatar,
          whatsapp,
          bio,
        })
        .where({ id: userId });

      return response
        .status(200)
        .json({ message: `User ${userId} has been updated` });
    } catch (error) {
      return response.status(400).json({ error });
    }
  }
}
