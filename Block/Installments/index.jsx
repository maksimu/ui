import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'block--installments'

const classes = {
  title: `${baseClass}__title`,
  value: `${baseClass}__value`,
  valueContent: `${baseClass}__value__content`,
  valueContentClarification: `${baseClass}__value__content__clarification`,
  valueTitle: `${baseClass}__value__title`,
  values: `${baseClass}__values`
}

export function Main ({ className, children, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames(baseClass, className)} {...props}>
      {children}
    </div>
  )
}

Main.displayName = 'Block.Installments.Main'

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  styles: PropTypes.object
}

export function Title ({ className, children, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames(classes.title, className)} {...props}>
      {children}
    </div>
  )
}

Title.displayName = 'Block.Installments.Title'

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  styles: PropTypes.object
}

export function Content ({ className, children, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames(classes.values, className)} {...props}>
      {children}
    </div>
  )
}

Content.displayName = 'Block.Installments.Content'

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  styles: PropTypes.object
}

export function Value ({ className, clarification, children, title, styles, value, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames(classes.value, className)} {...props}>
      <div className={classNames(classes.valueTitle)}>
        {title}
      </div>

      <div className={classNames(classes.valueContent)}>
        {value}
        {clarification && (
          <span className={classNames(classes.valueContentClarification)}>
            {clarification}
          </span>
        )}
      </div>
    </div>
  )
}

Value.displayName = 'Block.Installments.Value'

Value.propTypes = {
  clarification: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  styles: PropTypes.object
}
