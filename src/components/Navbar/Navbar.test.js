import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'

/* global it */

it('It should mount', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Navbar />, div)
  ReactDOM.unmountComponentAtNode(div)
})
