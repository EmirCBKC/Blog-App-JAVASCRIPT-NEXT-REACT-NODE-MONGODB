import Link from 'next/link';
import Logo from './Logo';
import Style from "./navbar.module.css";

export default function Navbar() {
    return (
        <header className={Style.header}>
            <Link href="/"><Logo /></Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
