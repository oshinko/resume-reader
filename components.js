const RadarChart = {
  extends: VueChartJs.Radar,
  props: {
    title: [String, Object],
    titleSize: { type: [Number, String], default: 32 },
    labels: Array,
    labelSize: { type: [Number, String], default: 16 },
    color: { type: [Array, String], default: [255, 0, 0] },
    chartData: Array,
  },
  data() {
    return {
      borderWidth: 1
    }
  },
  computed: {
    data() {
      return {
        labels: this.labels,
        datasets: this.chartData.map(x => {
          const color = x.color || this.color
          const rgb = Array.isArray(color) ? color.join(',') : color
          return {
            backgroundColor: `rgba(${rgb}, .25)`,
            borderColor: `rgb(${rgb})`,
            borderWidth: this.borderWidth,
            label: x.name,
            data: x.data
          }
        })
      }
    },
    options() {
      const title = typeof this.title === 'string' ?
        {
          display: true,
          fontSize: Number.parseInt(this.titleSize),
          text: this.title
        } :
        this.title;
      return {
        responsive: false,
        legend: {
          display: this.chartData.length > 1
        },
        scale: {
          pointLabels: {
            fontSize: Number.parseInt(this.labelSize),
          },
          ticks: {
            min: 0
          }
        },
        title
      }
    }
  },
  watch: {
    title() {
      this.renderChart(this.data, this.options)
    },
    labels() {
      this.renderChart(this.data, this.options)
    },
    chartData() {
      this.renderChart(this.data, this.options)
    }
  },
  mounted() {
    this.renderChart(this.data, this.options)
  }
}
