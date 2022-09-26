import { FC, useEffect, useState } from 'react';
import styles from './Table.module.css';
import { Product } from '../../interface/index';
import { atlantiaApi } from '../../api';
import { RowTable } from './RowTable';
import { RowSkeleton } from './RowSkeleton';
import { Message } from '../global';

export const Table: FC = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await atlantiaApi.get<Product[]>('/beer-products');
                setProducts(response.data);
            } catch (error) {
                setError(true); 
            }
        };
        getProducts();
    }, []);

    if(error) return <Message />;
    
    return (
        <div>  
            <h3>Comparative Analysis</h3>
            <table className={ styles.table }>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>SKU</td>
                        <td>% Presencia</td>
                        <td>Av. Price</td>
                        <td>Av. Position</td>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 && <RowSkeleton />}
                    {products.map((rowItem) => (
                        <RowTable 
                            key={ rowItem.id.toString()} 
                            image={ rowItem.productImage }
                            name={ rowItem.name }
                            persistence={ rowItem.persistence }
                            position={ rowItem.averagePosition }
                            price={ rowItem.averagePrice }
                            sku={ rowItem.sku }
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
