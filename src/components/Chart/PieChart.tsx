import { FC, useEffect, useState } from "react";
import styles from './Chart.module.css';
import Chart from "react-apexcharts";
import { PresenceProduct } from "../../interface";
import { atlantiaApi } from "../../api";
import { Message } from "../global";

export const PieChart: FC = () => {

  const [presenceProducts, setPresenceProducts] = useState<PresenceProduct[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
      const getPresenceProducts = async () => {
          try {
            const response = await atlantiaApi.get<PresenceProduct[]>('/presence-share-chart');
            setPresenceProducts(response.data);
          } catch (error) {
            setError(true);
          }
      };
      getPresenceProducts();
  },[]);

  if(error){
    return (
      <div>
        <h3>Presence Share by Product</h3>
        <Message />
      </div>
    )
  }

  return (
    <div>
      <h3>Presence Share by Product</h3>
        { presenceProducts.length === 0 ? (
          <div className={styles['pie-skeleton']}></div>
        ) : (
          <div className={styles['chart-pie']}>
            <Chart
              options={{
                labels: presenceProducts.map((product) => product.name),
                dataLabels: {
                  enabled: false
                },
                colors: ["#D6215B", "#7530B2", "#006FFF", "#FF7A00", "#23B794"]
              }}
              series={presenceProducts.map((product) => product.presenceShare)}
              type="pie"
              width="500"
            />
          </div>
        )}
    </div>
  )
}


