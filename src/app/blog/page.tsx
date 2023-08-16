import { Metadata } from "next";
import styles from "@/app/css/blog.module.css";

export const metadata:Metadata = {
    title: "Joy's Travel Log",
    description: "A blog about Joy's travels",
}

export default function BlogPage() {
    return (
        <main className="container">
            <div className={styles.blog}>
                <h2>Blog</h2>
            </div>
        </main>
    );
}