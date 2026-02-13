import React from "react"
import Chart from "react-apexcharts"

const BookingsChart = () => {

    const options = {
        chart: {
            type: "line",
            height: 120,
            zoom: { enabled: false },
            toolbar: { show: false }
        },
        dataLabels: { enabled: false },
        stroke: { curve: "smooth" },
        grid: { show: false },
        xaxis: {
            categories: [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ],
            labels: { show: false }
        },
    }

    const series = [
        {
            name: "Bookings",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 48, 55, 70, 80]
        }
    ]

    return (
        <Chart
            options={options}
            series={series}
            type="line"
            height={120}
        />
    )
}

export default BookingsChart
