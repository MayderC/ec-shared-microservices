import { JwtPayload } from "jsonwebtoken";

export interface IToken extends JwtPayload {
  id: string;
  iat : number;
}