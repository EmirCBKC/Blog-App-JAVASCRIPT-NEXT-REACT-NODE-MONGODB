import Head from "next/head";
import ContactForm from "../components/ui/Contact-Page/ContactForm";

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Contact Me</title>
                <meta name="description" content="Send me your messages!" />
            </Head>
            <ContactForm />
        </>
    )
}
