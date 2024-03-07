import { createTransport } from "nodemailer";
import { config } from "dotenv";
config();

const sendEmail = (content, subject, userEmail) => {
  return new Promise((resolve, reject) => {
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USR, //you can chnage to your own and replace pass with your app password
        pass: process.env.EMAIL_PASS,
      },
    });

    // html contenet from emails folder
    const htmlContent = content;

    const mailOptions = {
      from: "jimmymathu28@gmail.com",
      to: userEmail,
      subject: subject,
      html: htmlContent,
    };
    // send as html
    mailOptions.headers = {
      "Content-Type": "text/html",
    };

    // send email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error);
      } else {
        console.log("Email sent: " + info.response);
        resolve("Email Sent");
      }
    });
  });
};

export default { sendEmail };
