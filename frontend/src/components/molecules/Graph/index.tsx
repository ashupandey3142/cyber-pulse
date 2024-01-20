import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from 'chart.js'

import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Stack } from '@mui/material'
import { data, option } from '@/utils/function'

Chart.register(
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
)

interface IGraph {
  labels: string[]
  graphValues: number[]
  width: number | string
  height: number | string
}

const Graph = ({ labels, graphValues, width, height }: IGraph) => {
  return (
    <Stack data-testid="line-graph" width={width} height={height}>
      {labels.length > 0 &&
        graphValues.length > 0 &&
        graphValues.length < labels.length + 1 && (
          <Line
            data={data(labels, graphValues)}
            plugins={[ChartDataLabels]}
            options={option(labels)}
          />
        )}
    </Stack>
  )
}

export default Graph
