import styles from './FixedSplit.module.scss'

export default function FixedSplit({ 
  backgroundLeft,
  copyLeft,
  backgroundRight,
  copyRight,
  fixedLeft,
  fixedRight,
  fixedWidth,
}) {
  return (
  	<div className={styles.cellWrapper} >
  		
	  <div className={ styles.cell + (fixedLeft ? ' '+styles.fixedWidth: 'styles.staticWidth') }>
	
	   <div className={styles.inner}>
	      <p className="headline">
	  	.-hm_layout_1
	      </p>
	      <p className="body">
	        This template element is your standard 2 div side-by-side layout, but with a few twists.
	  	<br/><br/>
	  	Like all Holy Mountain Framework elements, 
	  	it's been built with responsivity and developer ease of use in mind.
	      </p>
	    </div>
	
	  </div>

	  <div className={ styles.cell + (fixedRight ? ' '+styles.fixedWidth: 'styles.staticWidth') }>

	    <div className={styles.inner}>
	      <p className="headline">
	  	.-hm_layout_1
	      </p>
	      <p className="body">
	        This template element is your standard 2 div side-by-side layout, but with a few twists.
	  	<br/><br/>
	  	Like all Holy Mountain Framework elements, 
	  	it's been built with responsivity and developer ease of use in mind.
	      </p>
	    </div>

	  </div>

	</div>
  )
}
