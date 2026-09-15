import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post("/contact", async (req, res) => {
  try {
    const {
      name,
      email,
      location,
      phone,
      message,
    } = req.body;

    // -----------------------------
    // VALIDATION
    // -----------------------------

    if (
      !name ||
      !email ||
      !location ||
      !phone ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled.",
      });
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (!/^\d{10}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        message:
          "Phone number must contain exactly 10 digits.",
      });
    }

    // -----------------------------
    // EMAIL CONFIGURATION
    // -----------------------------

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // -----------------------------
    // SEND EMAIL
    // -----------------------------

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,

      subject: `New Contact Inquiry from ${name}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 650px;
            margin: 0 auto;
            color: #222;
            line-height: 1.6;
          "
        >

          <h2
            style="
              margin-bottom: 20px;
              padding-bottom: 12px;
              border-bottom: 1px solid #ddd;
            "
          >
            New Contact Inquiry
          </h2>

          <p>
            <strong>Name:</strong>
            ${name}
          </p>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>

          <p>
            <strong>Location:</strong>
            ${location}
          </p>

          <p>
            <strong>Phone:</strong>
            +91 ${phone}
          </p>

          <p>
            <strong>Comment/Message:</strong>
          </p>

          <div
            style="
              background: #f5f5f5;
              padding: 16px;
              border-radius: 8px;
              white-space: pre-wrap;
            "
          >
            ${message}
          </div>

          <hr style="margin-top: 25px;" />

          <p
            style="
              color: #777;
              font-size: 12px;
            "
          >
            This inquiry was submitted through
            the Space Education Journey contact form.
          </p>

        </div>
      `,
    });

    // -----------------------------
    // SUCCESS
    // -----------------------------

    return res.status(200).json({
      success: true,
      message: "Your inquiry has been sent successfully.",
    });

  } catch (error) {
    console.error(
      "Contact form error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Unable to send your inquiry. Please try again later.",
    });
  }
});

export default router;