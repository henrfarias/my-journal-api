declare module Express {
  interface Request {
    user?: { nickname: string; id: string }
  }
}
