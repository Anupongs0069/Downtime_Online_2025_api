import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const UseController = {
    async signIn ({ body, jwt } : { body: { username: string, password: string }, jwt: any }) {
        try {
            const user = await prisma.user.findFirst({
                select: {
                    id: true,
                    username: true,
                    level: true,
                },
                where: {
                    username: body.username,
                    password: body.password,
                    status: 'active'
                },
            });
            if (!user) {
                return { message: 'User not found' };
            }

            const token = await jwt.sign(user);
            return { token };
        } catch (error) {
            return error;
        }
    }
}