import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, Title, BarElement, Tooltip } from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, Title, BarElement, Tooltip)

const state = {
    labels: ['JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'],
    datasets: [
        {
            labels: '',
            backgroundColor: 'red',
            hoverBackgroundColor: 'lightblue',
            borderRadius: 8,
            data: [40, 40, 50, 60, 80, 90, 70]
        }
    ]
}

const Chart = () => {
  return (
    <div>
          <Bar data={state} />
    </div>
  )
}

export default Chart
