const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const RepairRecordController = {
    list: async () => {
        try {
            const repairRecords = await prisma.repairRecord.findMany({
                where: {
                    status: 'active'
                },
                include: {
                    device: true,
                    user: true
                },
                orderBy: {
                    id: 'desc'
                }
            });
            return repairRecords;
        } catch (error) {
            return error;
        }
    },
    create: async ({ body, request, jwt }: { 
        body: {
        customerName: string;
        deviceName: string;
        deviceId?: number;
        deviceProduct: string;
        deviceFamily: string;
        problem: string;
        sovle?: string;
        },
        request: any,
        jwt: any
    }) => {
        try {
            const row = await prisma.repairRecord.create({
                data: body
            });

            return { message: "success", row: row };
        } catch (error) {
            return error;
        }
    }

}