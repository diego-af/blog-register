'use client';
import {Button} from '@/components/ui/button';
import {createData} from '@/utils/CreateItem';

export default function Home() {
	return (
		<div className='flex'>
			<Button onClick={createData}>Button</Button>
		</div>
	);
}
