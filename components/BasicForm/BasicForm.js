import React, { useState } from "react";
import styles from './BasicForm.module.scss';
import styled from "styled-components";
import DatePicker, { subMonths } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const FormOuter = styled.div`
	background: ${props => props.background};
	width: 100%;
	max-width: ${props => props.maxWidth || "600px"};
	margin: auto;
`;



export default function BasicForm({ 
  //page vars
  maxWidth,
  background,
  shadow,
}) {

	const [startDate, setStartDate] = useState(new Date());
	//const [startDate, setStartDate] = useState(null);

  return (
  	<FormOuter 
  		className={styles.formOuter} 
  		maxWidth={maxWidth}
  		background={background}
  	>
  		<form 
	  		className={styles.formInner + (shadow ? " "+styles.shadow : "")} 
	  		id="contact_form" 
	  		method="post" 
	  		autoComplete="on" 
	  		data-netlify="true"
	  		netlify-honeypot="bot-field" 
	  		data-netlify-recaptcha="true"
	  	>
	  	
	  		{/* FormMeta */}
	  		<div className={styles.formMeta} >
	  			<input type="hidden" name="data[form]" value="Contact Form" />
				<p className="hidden">
					<label>Don’t fill this out if you're human: <input name="bot-field" type="hidden" /></label>
				</p>
	  		</div>
	  		
	  		{/* First Name */}
	  		<label className={styles.inputWrapper + ' ' + styles.half}>
	  			<span className={styles.visualLabel}>First Name*</span>
	  			<input type="text" name="data[f_name]" placeholder="" required aria-label="First Name" />
	  		</label>	

	  		{/* Last Name */}
	  		<label className={styles.inputWrapper + ' ' + styles.half}>
	  			<span className={styles.visualLabel}>Last Name*</span>
	  			<input type="text" name="data[l_name]" placeholder="" required aria-label="Last Name" />
	  		</label>	

	  		{/* Email */}
	  		<label className={styles.inputWrapper + ' ' + styles.half}>
	  			<span className={styles.visualLabel}>Email*</span>
	  			<input type="email" name="data[email]" inputMode="email" placeholder="" required aria-label="Email" />
	  		</label>
	  		
	  		{/* Phone */}
	  		<label className={styles.inputWrapper + ' ' + styles.half}>
	  			<span className={styles.visualLabel}>Phone</span>
	  			<input type="tel" name="data[phone]" inputMode="tel" placeholder=""  aria-label="Phone" />
	  		</label>

	  		{/* Birth Date */}
	  		<label className={styles.inputWrapper + ' ' + styles.full}>
	  			<span className={styles.visualLabel}>Date of Birth</span>
	  			<DatePicker 
	  				selected={startDate}
  				      onChange={(date) => setStartDate(date)}
  				      peekNextMonth
  				      showMonthDropdown
  				      showYearDropdown
  				      dropdownMode="select"
	  				name="data[dob]"
	  				aria-label="Date of Birth"
	  			/>
	  		</label>	  		
	  		
  			{/* Comments */}
	  		<label className={styles.inputWrapper + ' ' + styles.full}>
	  			<span className={styles.visualLabel}>Comments*</span>
	  			<textarea name="data[comments]" placeholder="" required aria-label="Comments"></textarea>
	  		</label>	
	  		
	  		{/* Submit */}
	  		<div className={styles.inputWrapper + ' ' + styles.submit + ' ' + styles.full}>
	  			
	  			<div data-netlify-recaptcha="true"></div>
	  			
	  			<input className="" type="submit" name="" value="SUBMIT" aria-label="Submit" />
	  			{/*<button className="submit">SUBMIT</button>*/}
	  		</div>
	  	</form>
  	</FormOuter>
  	
  )
}
