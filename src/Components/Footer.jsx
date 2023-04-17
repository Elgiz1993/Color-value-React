import React from 'react'

const Footer = ({length}) => {
	const copy = new Date()
  return (
	 <footer>
		<p>copywrite &copy; {copy.getFullYear()}</p>
		<p>{length} List {length === 1 ? 'Item' : 'Items'}</p>
	 </footer>
  )
}

export default Footer