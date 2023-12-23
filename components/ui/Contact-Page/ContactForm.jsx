import { useEffect, useRef, useState } from "react";
import Notification from "../Notifications/Notification";
import Style from "./contact-form.module.css";

async function sendContactData(newMessage) {
    const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(newMessage),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!res.ok) {
        throw new Error(data.message || "Someting went wrong...");
    }

    const data = await res.json();
}

export default function ContactForm() {

    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();

    const [requestStatus, setRequestStatus] = useState("");
    const [requestError, setRequestError] = useState("");

    useEffect(() => {
        if (requestStatus === "success" || requestStatus === "error") {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setRequestError(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [requestStatus]);

    async function sendMessageHandler(e) {
        e.preventDefault();

        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const message = messageRef.current.value;

        const newMessage = {
            email,
            name,
            message
        };

        setRequestStatus("pending");
        try {
            await sendContactData(newMessage);
            setRequestStatus("success");
            emailRef.current.value = "";
            nameRef.current.value = "";
            messageRef.current.value = "";
        } catch (error) {
            setRequestError(error.message);
            setRequestStatus("error");
        }

    }

    let notification;

    if (requestStatus === "pending") {
        notification = {
            status: "pending",
            title: "Sending message...",
            messsage: "Your message is on its way!"
        };
    }

    if (requestStatus === "success") {
        notification = {
            status: "success",
            title: "Success!",
            messsage: "Message sent successfully!"
        };
    }

    if (requestStatus === "error") {
        notification = {
            status: "error",
            title: "Error!",
            messsage: requestError
        };
    }

    return (
        <section className={Style.contact}>
            <h1>How can I help you?</h1>
            <form className={Style.form} onSubmit={sendMessageHandler}>
                <div className={Style.controls}>
                    <div className={Style.control}>
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" required ref={emailRef} />
                    </div>
                    <div className={Style.control}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" required ref={nameRef} />
                    </div>
                </div>
                <div className={Style.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" rows={5} ref={messageRef} required ></textarea>
                </div>

                <div className={Style.actions}>
                    <button>{notification?.status === "pending" ? "Pending..." : "Submit"}</button>
                </div>
            </form>
            {notification && <Notification status={notification.status} title={notification.title} message={notification.messsage} />}
        </section>
    )
}
