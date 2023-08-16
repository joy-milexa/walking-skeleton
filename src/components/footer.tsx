import Link from "next/link";
import styles from '@/app/css/footer.module.css'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <p>This blog was made by Joy Ling</p>
        </footer>
    );
}