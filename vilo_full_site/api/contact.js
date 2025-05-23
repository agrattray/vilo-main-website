
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  // Simulate sending email - in real-world, integrate with nodemailer, Resend, or Mailgun
  console.log("Contact form submitted:", { name, email, message });

  // Replace this with actual email logic
  return res.status(200).json({
    success: true,
    message: "Thank you for contacting us, your message has been sent to arthur@vilowebdevelopment.com."
  });
}
