import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

export default function StolenChart() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Stolen NFTs volume',
            },
        },
        responsive: true,
    };

    const labels = ['Moonbirds', 'CLONE X', 'Mutant Ape', 'Bored Ape Kennel', 'Bored Ape Yacht', 'Azuki'];

    const data = {
        labels,
        datasets: [
            {
                label: 'stolen_volume',
                data: [1395, 2912, 5693, 785, 13280, 2482],
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // borderWidth: 2,
                borderRadius: 10,
                borderSkipped: false,
            },
            {
                label: 'total_volume',
                data: [171066, 240477, 452035, 109331, 665520, 262242],
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgb(255, 99, 132)',
                // borderWidth: 2,
                borderRadius: 10,
                borderSkipped: false,
            }
        ],
    };

    return (
        <div className='bg-white m-auto w-7/12 p-6 rounded-2xl'>
            <Bar options={options} data={data} />
        </div>
    )
}