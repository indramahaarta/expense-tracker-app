import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {

    const data = [
        {label : 'Jan', value: 0},
        {label : 'Feb', value: 0},
        {label : 'Mar', value: 0},
        {label : 'Apr', value: 0},
        {label : 'May', value: 0},
        {label : 'Jun', value: 0},
        {label : 'Jul', value: 0},
        {label : 'Agt', value: 0},  
        {label : 'Sep', value: 0},
        {label : 'Oct', value: 0},
        {label : 'Nov', value: 0},
        {label : 'Des', value: 0},
    ]

    for (const expense of props.data) {
        const month = expense.date.getMonth();
        data[month].value += expense.amount;
    }

    return <Chart dataPoints={data}></Chart>
}

export default ExpensesChart;