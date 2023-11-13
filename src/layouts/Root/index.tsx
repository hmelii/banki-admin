import { FC, PropsWithChildren } from 'react'
import styles from './root.module.scss'

export const Root: FC<PropsWithChildren> = ({ children }) => {
  return <main className={styles.layout}>{children}</main>
}
