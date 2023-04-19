import React from 'react'
import colorNames from 'colornames'

const Input = ({colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText}) => {
  return (
	 <form onSubmit={(e) => e.preventDefault()}>
		<label htmlFor="">Add Color Name:</label>
		<input 
			autoFocus
			required
			type="text"
			placeholder='Add color'
			value={colorValue}
			onChange={(e) => {
				setColorValue(e.target.value)
				setHexValue(colorNames(e.target.value))       // npm i colornames -S
			}}
		/>
		<button
			type='button'
			onClick={() => setIsDarkText(!isDarkText)}
		>
			Toggle Text Color
		</button>
	 </form>
  )
}

export default Input