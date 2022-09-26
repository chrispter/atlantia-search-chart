import { FC } from "react";
import styles from './Message.module.css';


export const Message: FC = () => {
  return (
    <div className={styles['msg-error']}>
        <span>There was an error</span>
    </div>
  )
}
