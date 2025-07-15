import nodemailer from "nodemailer";

export default function (req, reply) {
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

  const info = transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Erro ao enviar o email");
    }
  });

  return reply.status(200).json({ message: "Email enviado com sucesso." });
}
