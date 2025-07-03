import { ChartTypes, ChartTypeValues, type BarsOptionType } from "@/types/charts"
import BarsChart from "@components/Echart/BarsChart"

export default () => {
    const chartOptions: BarsOptionType = {
        title: {
            text: '业绩',
            subtext: '按月统计'
        },
        xAxis: {
            type: ChartTypeValues.CATEGORY,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            name: '年份'
        },
        yAxis: {
            type: ChartTypeValues.VALUE,
            name: '销售额'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type:  ChartTypes.BAR
            }
        ]
    }

    const chartOptions2: BarsOptionType = {
        title: {
            text: '业绩',
        },
        xAxis: {
            type: ChartTypeValues.CATEGORY,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            name: '年份'
        },
        yAxis: {
            type: ChartTypeValues.VALUE,
            name: '销售额'
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type:  ChartTypes.BAR
            }
        ]
    }


    return (
        <>
            <BarsChart {...chartOptions}></BarsChart>
            <BarsChart {...chartOptions2}></BarsChart>
        </>
    )
}