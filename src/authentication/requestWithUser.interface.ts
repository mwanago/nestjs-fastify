import User from '../users/user.entity';
import { FastifyRequest } from 'fastify';

interface RequestWithUser extends FastifyRequest {
  user: User;
}

export default RequestWithUser;
