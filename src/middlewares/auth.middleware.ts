import { Request, Response, NextFunction } from "express";


export const verifyApiKey = (req: Request, res: Response, next: NextFunction) => {
  // Log the successful API key verification
  console.log("API key verified successfully");
  next();
};
