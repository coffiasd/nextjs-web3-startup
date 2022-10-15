
import CountUp from 'react-countup';
import { FaEthereum, FaSortNumericDownAlt, FaSortNumericUpAlt } from 'react-icons/fa';

export default function Stats() {
    return (
        <div className="stats shadow w-7/12">
            <div className="stat">
                <div className="stat-figure text-primary">
                    <FaEthereum size="2rem" />
                </div>
                <div className="stat-title">Total Volume</div>
                <div className="stat-value text-primary">
                    <CountUp
                        start={0}
                        end={1890}
                        duration={2}
                        separator=","
                        decimals={0}
                        decimal=","
                        prefix="ETH "
                    />k</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <FaEthereum size="2rem" />
                </div>
                <div className="stat-title">Total Stolen Volume</div>
                <div className="stat-value text-secondary"><CountUp
                    start={0}
                    end={26}
                    duration={1}
                    separator=","
                    decimals={","}
                    decimal=","
                    prefix="ETH "
                />k</div>
            </div>


            <div className="stat">
                <div className="stat-figure text-primary">
                    <FaSortNumericDownAlt size="2rem" />
                </div>
                <div className="stat-title">Total Items</div>
                <div className="stat-value text-primary"><CountUp
                    start={0}
                    end={78409}
                    duration={2}
                    separator=","
                    decimals={0}
                    decimal=","
                    prefix=""
                /></div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <FaSortNumericUpAlt size="2rem" />
                </div>
                <div className="stat-title">Total Stolen Items</div>
                <div className="stat-value text-secondary"><CountUp
                    start={0}
                    end={929}
                    duration={2}
                    separator=","
                    decimals={0}
                    decimal=","
                    prefix=""
                /></div>
            </div>


        </div>
    )
}