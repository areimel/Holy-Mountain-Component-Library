import styles from './Button1.module.scss'
import styled from "styled-components";

const Button = styled.a`
	
`;

export default function Button1({ 
	//page vars
	children,
	href,
	newTab,
	className,
	skew,
	modal,
	dataYoutubeId
}) {
  return (
  	<Button  
  		href={(href? href : "#")} 
  		className={styles.Button1+' '+className} 
  		target={(newTab? "_blank" : "")}
  		data-modal={(modal? modal : "")}
  		data-youtube-id={(dataYoutubeId? dataYoutubeId : "")}
  	>
  		<span className={styles.inner}>{children}</span>
  	</Button>
  	
  )
}
