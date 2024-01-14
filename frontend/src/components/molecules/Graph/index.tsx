import React from 'react'
import { Line } from 'react-chartjs-2'
import { TimeScale } from 'chart.js'
import { Chart } from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Stack } from '@mui/material'
import { data, option } from '@/utils/function'

Chart.register(TimeScale)

interface IGraph {
  labels: string[]
  graphValues: number[]
  width: number | string
  height: number | string
}

const Graph = ({ labels, graphValues, width, height }: IGraph) => {
  return (
    <Stack data-testid="line-graph" width={width} height={height}>
      {labels.length > 0 && graphValues.length > 0 && (
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
