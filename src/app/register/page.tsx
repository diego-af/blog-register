'use client';
import axios from 'axios';
import {useState} from 'react';
import {Input} from '@/components/ui/input';

export default function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const result = await axios.post('/api/add-service', {
			name: name,
			email: email,
			password: password
		});

		if (!result.data) {
			alert('Erro ao cadastrar');
			return;
		}
		setEmail('');
		setName('');
		setPassword('');
		alert('Cadastrado com sucesso');
	};
	return (
		<div className=' flex h-screen w-full bg-black justify-center items-center rounded-md'>
			<form
				className='flex flex-col gap-4  w-[400px] bg-white p-8 rounded-md'
				onSubmit={handleSubmit}
			>
				<label>Digite seu nome</label>
				<Input
					type='text'
					value={name}
					className='w-full '
					placeholder='Nome'
					onChange={(e) => setName(e.target.value)}
				/>

				<label>Digite seu email</label>
				<Input
					type='text'
					value={email}
					className=''
					placeholder='Email'
					onChange={(e) => setEmail(e.target.value)}
				/>

				<label>Digite sua senha</label>
				<Input
					type='text'
					value={password}
					className='w-full outline-none border-none focus:border-green-200'
					placeholder='Senha'
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button
					type='submit'
					className='w-full border rounded-md h-10 bg-green-500 text-white hover:bg-green-600'
				>
					Cadastrar
				</button>
			</form>
		</div>
	);
}
