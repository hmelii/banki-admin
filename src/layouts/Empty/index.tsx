import { FC, PropsWithChildren } from 'react'
import styles from './empty.module.scss'
import { Root } from '@/layouts/Root'
export const Empty: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Root>
      <div className={styles.layout}>{children}</div>
    </Root>
  )
}
