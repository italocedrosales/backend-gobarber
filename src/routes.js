import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Italo Cedro',
    email: 'italo.cedro.sales@gmail.com',
    password_hash: '1234567890',
  });

  return res.json(user);
});

export default routes;
