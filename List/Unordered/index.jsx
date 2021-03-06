import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '../styles.scss'

const baseClass = 'list--unordered'

export default function Unordered ({children, className, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  return (
    <ul className={classNames(baseClass, className)} {...props}>
      {children}
    </ul>
  )
}

Unordered.displayName = 'List.Unordered'

Unordered.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.object
}
