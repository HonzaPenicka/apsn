import { NextResponse } from 'next/server';

const nodemailer = require('nodemailer');

export async function POST(request: Request) {
	const username = process.env.NEXT_PUBLIC_BURNER_USERNAME;
	const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

	console.log('dealingwith request');
	const formData = await request.formData();
	const name = formData.get('name');
	const email = formData.get('email');
	const phone = formData.get('phone');
	const message = formData.get('message');

	const transporter = nodemailer.createTransport({
		service: 'gmail', //Gmail service
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	module.exports = transporter;

	try {
		await transporter.sendMail({
			from: username,
			to: myEmail,
			replyTo: email,
			subject: `Website activity from ${email}`,
			html: `
			<p>Jméno a příjmení: ${name} </p>
			<p>Email: ${email} </p>
			<p>Telefonní číslo: ${phone} </p>
			<p>Zpráva: ${message} </p>
			`,
		});

		return NextResponse.json({ message: 'Success: email was sent' });
	} catch (error) {
		console.log(error);
		return new Response('COULD NOT SEND MESSAGE', { status: 500 });
	}
}
