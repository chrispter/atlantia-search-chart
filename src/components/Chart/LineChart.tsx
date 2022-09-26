import { FC } from "react";
import Chart from "react-apexcharts";
import styles from './Chart.module.css';
import { useLines } from "../../hooks";
import { ApexOptions } from "apexcharts";
import { Message } from '../global';

export const LineChart: FC = () => {
  
  const { dates, seriesProducts, error } = useLines();

  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      categories: dates,
      tickAmount: undefined,
      min: undefined,
      max: undefined,
      range: undefined,
      floating: false,
      decimalsInFloat: undefined,
      overwriteCategories: undefined,
    },
    yaxis: {
      labels: {
        formatter: (value: number) =>  `$${value.toFixed(0)}`
      }
    },
    grid: {
      row: {
        colors: ["#F8F8F8", "#FFF"]
      }
    },
    colors: ["#D6215B", "#7530B2", "#FFB448"],
  };

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
        <h3>Price Evolution</h3>
        { seriesProducts.length === 0 ? (
          <div className={styles['line-skeleton']}></div>
        ) : (
          <div className={styles['chart-lines']}>
            <Chart
              options={ options }
              series={seriesProducts.map((data) => data)}
              type="line"
              width="800"
              height="350"
            />
          </div>
        )}
    </div>
  )
}


