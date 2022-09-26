import styles from './Table.module.css';

export const RowSkeleton = () => {

    return (
        <>
        {[1,2,3,4].map(item =>   (
            <tr key={ item.toString() }>
                <td>
                    <div className={styles['row-skeleton']}></div>
                </td>
                <td>
                    <div className={styles['row-skeleton']}></div>
                </td>
                <td>
                    <div className={styles['row-skeleton']}></div>
                </td>
                <td>
                    <div className={styles['row-skeleton']}></div>
                </td>
                <td>
                    <div className={styles['row-skeleton']}></div>
                </td>    
            </tr>
        ))}
       </>
  )
}
