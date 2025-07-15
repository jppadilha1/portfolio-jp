import nodemailer from "nodemailer";

export default async function (req, reply) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const options = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: "Olá, alguém entrou em contato com você, através do seu portfólio",
    text: `Informações:\nNome:${name}\nEmail:${email}\nMensagem:${message}`,
  };

  try {
    await transporter.sendMail(options);
    return reply.status(200).json({ message: "Email enviado com sucesso." });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return reply.status(500).json({ error: "Erro ao enviar o email." });
  }
}
