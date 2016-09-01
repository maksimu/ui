import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import jsx from './jsx'
import lowlight from 'lowlight/lib/core'
import highlight from './highlight'

lowlight.registerLanguage('jsx', jsx)

export default ({ children }) => (
  <SyntaxHighlighter language='jsx' style={highlight}>
    {children}
  </SyntaxHighlighter>
)
