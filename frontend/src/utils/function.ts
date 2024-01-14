import { ScriptableContext, ScriptableScaleContext } from 'chart.js'
import { Chart } from 'chart.js/auto'
import theme from '@/theme'
import { Context } from 'chartjs-plugin-datalabels'

export const data = (labels: string[], graphValues: number[]) => {
  return {
    labels: labels,
    datasets: [
      {
        data: graphValues,
        fill: false,
        borderColor: theme.palette.primary.main,
        borderWidth: 1.5,
        tension: 0.1,
        pointRadius: (context: ScriptableContext<'line'>) => {
          return context.dataIndex === labels.length - 1 ? 16 : 0
        },
        pointBorderColor: theme.palette.ampsec.RED,
        pointBackgroundColor: theme.palette.ampsec.RED,
        pointHoverBackgroundColor: theme.palette.ampsec.RED,
      },
    ],
  }
}

const getLastPointStyle = (
  context: ScriptableContext<'line'>,
  labels: string[]
) => {
  return context.dataIndex === labels.length - 1 ? 'rectRounded' : false
}

const getGridColor = (context: ScriptableScaleContext, tickValue: number) => {
  return tickValue === 0 || tickValue === 100
    ? theme.palette.ampsec.STROKE_100
    : 'transparent'
}

export const option = (labels: string[]) => {
  return {
    elements: {
      point: {
        pointStyle: (context: ScriptableContext<'line'>) =>
          getLastPointStyle(context, labels),
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: theme.palette.text.mediumEmphasis,
          font: {
            size: 11,
            weight: 500,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: (context: ScriptableScaleContext) =>
            getGridColor(context, context.tick.value),
        },
        max: 100,
        ticks: {
          stepSize: 25,
          color: theme.palette.text.mediumEmphasis,
          font: {
            size: 11,
            weight: 500,
          },
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: theme.palette.darkTheme.SOCIAL_CARD_BG,
        font: {
          size: 15,
          weight: 700,
          lineHeight: 20,
        },
        formatter: (value: number, context: Context) => {
          if (
            context.chart instanceof Chart &&
            context.dataIndex === labels.length - 1
          ) {
            return value
          }
          return ''
        },
      },
    },
  }
}
