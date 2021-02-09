import styles from './Sandbox.module.scss'
import Container from '@components/Container/Container'

export default function Sandbox({ 
	children,
	title, 
}) {
  return (
    <section  className={styles.sandbox}>
      <Container>
        <div  className={styles.content}>
    	  {children}
        </div>
      </Container>
     
    </section>
  )
}
