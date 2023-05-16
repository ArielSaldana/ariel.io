import styles from "./navigation-bar.module.scss"

export default function NavigationBar() {
    return (
        <div className={styles.navigationBar}>
            <div className={styles.navigationBarContents}>
                <div className={styles.logo}>
                    <a>
                        <img src="/ariel-logo.svg" alt="Ariel Logo" />
                    </a>

                </div>
                <nav>
                    <ol>
                        <li><a href="/blogs">Blogs</a></li>
                        <li><a href="/about">About</a></li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}
