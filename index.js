import express from 'express';
import nodemailer from 'nodemailer';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const app = express();
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: { user: EMAIL, pass: PASSWORD }
});

app.get('/send', async (req, res) => {
    try {
        await transporter.sendMail({
            to: 'destination@gmail.com',
            subject: 'Node.js test',
            text: 'E-mail sent via Nodemailer!'
        });
        res.send('E-mail sent!');
    } catch (error) {
        res.status(500).send('Erro ao enviar o email: ' + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
