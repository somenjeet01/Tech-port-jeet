const nodemailer = require("nodemailer");

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Input validation function
function validateInput(name, email, message) {
  const errors = [];

  if (!name || name.trim().length < 2) {
    errors.push("Name must be at least 2 characters long");
  }

  if (!email || !emailRegex.test(email)) {
    errors.push("Please provide a valid email address");
  }

  if (!message || message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long");
  }

  return errors;
}

// Create Nodemailer transporter
function createTransporter() {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// Main handler function
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    // Validate required environment variables
    const requiredEnvVars = [
      "SMTP_HOST",
      "SMTP_USER",
      "SMTP_PASS",
      "TO_EMAIL",
      "FROM_EMAIL",
    ];
    const missingEnvVars = requiredEnvVars.filter(
      (varName) => !process.env[varName]
    );

    if (missingEnvVars.length > 0) {
      console.error("Missing environment variables:", missingEnvVars);
      return res.status(500).json({ error: "Server configuration error" });
    }

    // Validate input
    const validationErrors = validateInput(name, email, message);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        error: "Validation failed",
        details: validationErrors,
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #e1e1e1; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: white; padding: 15px; border-left: 4px solid #007cba; margin-top: 10px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 30px;">
          This email was sent from your portfolio contact form.
        </p>
      </div>
    `;

    const textContent = `
      New Contact Form Submission
      
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
      
      ---
      This email was sent from your portfolio contact form.
    `;

    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: Message from ${name}`,
      text: textContent,
      html: htmlContent,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    // Handle specific Nodemailer errors
    if (error.code === "EAUTH") {
      return res.status(500).json({ error: "Email authentication failed" });
    } else if (error.code === "ECONNECTION") {
      return res
        .status(500)
        .json({ error: "Failed to connect to email server" });
    } else {
      return res.status(500).json({ error: "Failed to send email" });
    }
  }
}
