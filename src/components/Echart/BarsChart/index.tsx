import * as echarts from 'echarts/core';
import { GridComponent, type GridComponentOption } from 'echarts/components';
import { BarChart, type BarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { useEffect, useRef } from 'react';
import type { BarsOptionType } from '@/types/charts';

export default (props: BarsOptionType) => {
    const { title, xAxis, yAxis, series } = props

    echarts.use([GridComponent, BarChart, CanvasRenderer]);

    type EChartsOption = echarts.ComposeOption<GridComponentOption | BarSeriesOption>;
    const chartRef = useRef(null)
    useEffect(() => {
        // 1. 生成实例
        let myChart = echarts.init(chartRef.current);

        // 2. 准备图表参数
        const option: EChartsOption = {
            title:title,
            xAxis: xAxis,
            yAxis: yAxis,
            series: series
        };
        // 3. 渲染参数
        option && myChart.setOption(option);
    }, [])
    return (
        <div ref={chartRef} style={{ width: "400px", height: "400px" }}></div>
    )
}