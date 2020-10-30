import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    data: () => ({
        chartdata: {
            labels: ['Январь', 'Февраль',"asd","sad","sadas","sadsa"],
            datasets: [
                {
                    label: 'Данные 1',
                    backgroundColor: '#f87979',
                    data: [40, 20,43,34,43,43]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    }),

    mounted () {
        this.renderChart(this.chartdata, this.options)
    }
}