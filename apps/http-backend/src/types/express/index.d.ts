declare namespace Express {
  export interface Request {
    userId?: string;
  }
}

// This is specifically to teach Express:
// "req.userId exists"
// Because Express default Request type does not know it.