import { LineChart, PieChart } from './components/Chart'
import { Header } from './components/global'
import { Table } from './components/Table'

const App = () => {
  return (
    <div>
      <Header />
      <div className='content'>
        <h1>General Perfomance Analysis</h1>
        <div className='content-chart'>
          <LineChart />
          <PieChart  />
        </div>
        <Table />
      </div>
    </div>
  )
}

export default App
