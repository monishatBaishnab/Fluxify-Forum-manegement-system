import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
import PropTypes from 'prop-types';

const StatePie = ({ data }) => {
    let chartData;
    if (data !== undefined) {
        chartData = Object.entries(data).map(([name, uv]) => ({
            name,
            uv: uv || 0,
        }));
    }
    
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
    return (
        <PieChart width={400} height={400}>
            <Legend />
            <Tooltip />
            <Pie data={chartData} dataKey="uv" cx="50%" cy="50%" outerRadius={80} fill="#82ca9d" label>
                {chartData?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
        </PieChart>
    );
};

StatePie.propTypes = {
    data: PropTypes.object,
}

export default StatePie;