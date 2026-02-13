import React from "react"
import Chart from "react-apexcharts"

const VisitorChart = () => {
    const colors = [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#3F51B5",
        "#546E7A",
        "#D4526E",
        "#3F51B5",
        "#546E7A",
        "#D4526E",
        "#FF9800"
    ]

    const options = {
        chart: {
            type: "bar",
            height: 120,
            toolbar: { show: false }
        },
        colors: colors,
        plotOptions: {
            bar: {
                columnWidth: "60%",
                distributed: true,
                borderRadius: 4
            }
        },
        dataLabels: { enabled: false },
        legend: { show: false },
        xaxis: {
            categories: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ],
            labels: { show: false }
        },
        yaxis: { labels: { show: false } },
        grid: { show: false }
    }

    const series = [
        {
            data: [21, 22, 10, 28, 16, 21, 13, 30, 18, 25, 20, 15]
        }
    ]

    return (
        <Chart
            options={options}
            series={series}
            type="bar"
            height={120}
        />
    )
}

export default VisitorChart
