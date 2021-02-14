import styles from './Description.module.scss'

export default function Description({ 
  title,
  author,
  description,
}) {
  return (
  <div className={styles.descriptionWrapper}>
    <ul>
       <li className={styles.title}><span>Component:</span> {title}</li>
       <li className={styles.author}><span>Developer:</span> {author}</li>
       <li className={styles.description}><span>Description:</span> {description}</li>
    </ul>
    
  </div>
  )
}
