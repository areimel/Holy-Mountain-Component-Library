import styles from './Footer.module.css'

export default function Footer({ footerMessage }) {
  return (
    <>
      <footer className={styles.footer}>
        {footerMessage}
      </footer>
    </>
  )
}
