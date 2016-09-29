import React from 'react'
import {Usage, Implementation, UX} from './icons/GettingStarted'
import * as UI from '../../'
import * as Code from '../../Code'
import NarrowLayoutLogo from '../NarrowLayoutLogo'
import Footer from '../../Showroom/Footer'

import styles from './styles.scss'

export default function GettingStarted ({example}) {
  return (
    <article className={styles.content}>
      <NarrowLayoutLogo />
      <header>
        <UI.Title.Primary margins>
          Getting started
        </UI.Title.Primary>
        <UI.Paragraph.Primary margins>
          Welcome to the UI guide. The goals of this document are:
        </UI.Paragraph.Primary>
        <ol className={styles.goals}>
          <li>
            <Usage />
            <UI.Paragraph.Secondary>
              To explain the usage of all components
            </UI.Paragraph.Secondary>
          </li>
          <li>
            <Implementation />
            <UI.Paragraph.Secondary>
              To clarify the reasoning behind their implementation
            </UI.Paragraph.Secondary>
          </li>
          <li>
            <UX />
            <UI.Paragraph.Secondary>
              To achieve a better user experience
            </UI.Paragraph.Secondary>
          </li>
        </ol>
      </header>

      <section>
        <UI.Title.Primary className={styles.designTitle} margins>
          Instructions
        </UI.Title.Primary>
        <UI.Subtitle>
          Install
        </UI.Subtitle>
        <Code.Block>
          {`npm install react @klarna/ui --save
try again`}
        </Code.Block>
      </section>

      <Footer />
    </article>
  )
}
