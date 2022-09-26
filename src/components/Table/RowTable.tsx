import { FC } from "react";
import styles from './Table.module.css';

interface Props {
    image: string,
    name: string,
    persistence: number;
    price: number;
    position: number;
    sku: string;
}
export const RowTable: FC<Props> = ({ 
        image,
        name,
        persistence,
        position,
        price,
        sku  
    }) => {

        return (
            <tr>
                <td>
                    <div className={styles['table-name']}>
                        <img src={ image } width='121' height='auto' alt={ name } />
                        { name }
                    </div>
                </td>
                <td>
                    { sku }
                </td>
                <td 
                    className={`${ persistence > 0 ? styles['green-font'] : styles['red-font'] }`}>
                    { Math.abs(persistence * 100) }%
                </td>
                <td>
                    ${ price.toFixed(2) }
                </td>
                <td>
                    { position }
                </td>    
            </tr>
        )
}
