import Image from "next/image";
import Style from "./hero.module.css";

export default function Hero() {
    return (
        <section className={Style.hero}>
            <div className={Style.image}>
                <Image src="/images/site/emircan.jpg" alt="An image showing Emircan" width={300} height={300} />
            </div>
            <h1>Hi, I'm Emircan</h1>
            <p>
                I blog about web development - especially frontend frameworks line Angular or React.
            </p>
        </section>
    )
}
