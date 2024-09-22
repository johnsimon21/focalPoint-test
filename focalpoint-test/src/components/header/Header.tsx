import LogomarkIcon from "@/public/Logomark"
import styles from "./Header.module.scss"
import LogotypeIcon from "@/public/Logotype"

export function Header() {
    return (
        <header className={`${styles.header} m-auto`}>
            <div className={`${styles.menu_items} d-flex`}>
                <div className={`${styles.logo} d-flex justify-content-center align-items-center`}>
                    <LogomarkIcon logomark={styles.logomark}/>
                    <LogotypeIcon logotype={styles.logotype}/>
                </div>

                <div className={styles.title}>Bem-vindo de volta, Marcus</div>
                <div className={`${styles.date} d-flex`}>Segunda, 01 de dezembro de 2025</div>
            </div>
        </header>
    )
}