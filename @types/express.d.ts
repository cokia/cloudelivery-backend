declare module Express {
    namespace Express {
        export interface Request {
			session: {
				key: string,
				secret: string
			};
        }
    }
}