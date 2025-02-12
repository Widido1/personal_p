"use server"
import { Resend } from "resend"
import { validateString } from "./utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    "use server"
    const email = formData.get("email");
    const message = formData.get("message");

    if(!validateString(message, 5000)){
        return{
            error: "Invalid Message"
        }
    }
    if(!validateString(email, 5000)){
        return{
            error: "Invalid Email"
        }
    }

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "sdg-1995@protonmail.com",
        subject: "LABURO: " + (email as string),
        text: message as string,
        replyTo: email as string,
    });
}