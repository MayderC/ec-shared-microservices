import JWT from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import {  IToken, UnauthorizedError  } from './index';

const tokens = ['auth', 'seller', 'gig', 'order', 'review', 'search', 'buyer', 'message'];


export const verifyGatewayRequest = (req: Request, res: Response, next: NextFunction) => {

    if(!req.headers.gatewaytoken) throw new UnauthorizedError('Unauthorized', 'verifyGatewayRequest');

    const token = req.headers.gatewaytoken as string;
    if (!token) throw new UnauthorizedError('Unauthorized', 'verifyGatewayRequest');
      
    try {
      const decoded = JWT.verify(token, process.env.JWT_SECRET as string) as IToken;
      if(!tokens.includes(decoded.id)) throw new UnauthorizedError('Unauthorized', 'verifyGatewayRequest')
    } catch (error) {
      throw new UnauthorizedError('Unauthorized', 'verifyGatewayRequest');
    }
    
    next();
  }
