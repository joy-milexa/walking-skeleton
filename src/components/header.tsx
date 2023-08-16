import Link from "next/link"
import styles from '@/app/css/header.module.css'
import { mouse_memoirs } from "@/app/layout";

export default function Header() {
    return(
        <header className={styles.header}>
            <h1 className={mouse_memoirs.className}>Joy&apos;s Travelog</h1>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navListItem}><Link className={styles.navLink} href="/">Home</Link></li>
                    <li className={styles.navListItem}><Link className={styles.navLink} href="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header>
    );
}