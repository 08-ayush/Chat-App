import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()
const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user:process.env.EMAIL,
    pass:process.env.EMAIL_PASS,
  },
});

const sendMail=async (to,otp)=>{
await transporter.sendMail({
    from:`${process.env.EMAIL}`,
    to,
    subject: "Reset Your Password",
    html:`<p>Your OTP for password reset is <b>${otp}</b>. It expires in 5 minutes.</p>`
})
}

export default sendMail