import styles from './Container.module.scss'

export default function Container({ containerSize, children }) {
  return (
    <>
      <div className={styles.container}>
        {children}
      </div>
    </>
  )
}
