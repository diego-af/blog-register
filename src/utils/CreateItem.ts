import {prismaClient} from '@/prisma/prisma';

export async function createData() {
	const data = await prismaClient.user.create({
		data: {
			email: '8m7dU@example.com',
			name: 'test'
		}
	});
}
