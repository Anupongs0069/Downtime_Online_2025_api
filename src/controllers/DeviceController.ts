const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export const DeviceController = {
    create: async ({ body }: {
        body: {
            name: string;
            product: string;
            family: string;
            importDate: Date;
            remark: string;
        }
    }) => {
        try {
            await prisma.device.create({
                data: body
            });

            return { message: 'Device created successfully' };
        } catch (error) {
            return error;
        }
    },
    list: async () => {
        try {
            const devices = await prisma.device.findMany({
                where: {
                    status: 'active'
                },
                orderBy: {
                    id: 'desc'
                }
            });

            return devices;
        } catch (error) {
            return error;
        }   
    },
    update: async ({ body, params }: {
        body: {
            name: string;
            product: string;
            family: string;
            importDate: Date;
            remark: string;
        },
        params: {
            id: string;
        }
    }) => {
        try {
            await prisma.device.update({
                where: { id: parseInt(params.id) },
                data: body
            });

            return { message: 'Device updated successfully' };
        } catch (error) {
            return error;
        }
    },
    remove: async ({ params }: {
        params: {
            id: string;
        }
    }) => {
        try {
            await prisma.device.update({
                where: { id: parseInt(params.id) },
                data: { status: 'inactive' }
            });

            return { message: 'Device removed successfully' };
        } catch (error) {
            return error;
        }
    }
}