import styles from './Header.module.scss'
import Container from '@components/Container/Container'

export default function Header({ title }) {
  return (
  	<Container>
          <h1 className="title computerfont">{title}</h1>
  	</Container>
  )
}
