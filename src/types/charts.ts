// chart的通用参数
// 标题
// 宽度
// 高度
interface TitleType {
    text?: string,
    subtext?: string
}
interface CommonChartsType {
    title?: TitleType
}
export enum ChartTypeValues {
    // 数值轴，适用于连续数据。
    VALUE = 'value',
    // 类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 xAxis.data 设置类目数据。
    CATEGORY = 'category',
    // 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。
    TIME = 'time',
    // 对数轴。适用于对数数据。对数轴下的堆积柱状图或堆积折线图可能带来很大的视觉误差，并且在一定情况下可能存在非预期效果，应避免使用。
    LOG = 'log'
}

export enum ChartTypes {
    BAR = 'bar'
}
// 柱图的参数
interface BarsXAxisType {
    type: ChartTypeValues,
    data?: string[] | number[]
    name?: string
}
interface BarsYAxisType {
    type: ChartTypeValues,
    data?: string[] | number[]
    name?: string
}
interface SeriesType {
    data?: string[] | number[]
    type: ChartTypes,
}
interface BarsChartsType extends CommonChartsType {
    xAxis: BarsXAxisType
    yAxis: BarsYAxisType,
    series: SeriesType[]
}



export interface BarsOptionType extends BarsChartsType { }
