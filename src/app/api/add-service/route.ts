import {prismaClient} from '@/prisma/prisma';
import {NextRequest, NextResponse} from 'next/server';

export async function POST(request: NextRequest, res: NextResponse) {
	try {
		const body = await request.json();
		const {email, name, password} = body;

		console.log(email, name, password);

		const result = await prismaClient.user.create({
			data: {
				name: name,
				passwrod: password,
				email: email
			}
		});

		console.log(result);

		return NextResponse.json(result);
	} catch (error) {
		console.error(error);
		return NextResponse.json({message: 'Internal server error'}, {status: 500});
	}
}
