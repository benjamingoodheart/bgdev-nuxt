export default defineEventHandler(async (event) => {
  const { sendMail } = useNodeMailer();
  const body = await readBody(event);
  return sendMail({
    subject: "New inquiry via contact form.",
    text: `Sender: ${body.name} <${body.email}> \n\n\n ${body.message} `,
    to: "benjaminwgoodheart@gmail.com",
  });
});
