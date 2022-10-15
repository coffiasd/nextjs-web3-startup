import CountUp from 'react-countup';
import { FaFileContract, FaHandPointer, FaUserPlus, FaPeopleCarry } from 'react-icons/fa';

export default function Stats2() {
    return (
        <div className="stats shadow w-7/12">
            <div className="stat">
                <div className="stat-figure text-primary">
                    <FaFileContract size="2rem" />
                </div>
                <div className="stat-title">Total Contracts</div>
                <div className="stat-value text-primary">
                    <CountUp
                        start={0}
                        end={2386}
                        duration={2}
                        separator=","
                        decimals={0}
                        decimal=","
                        prefix=""
                    />
                </div>
            </div>

            <div className="stat">
                <div className="stat-figure text-primary">
                    <FaHandPointer size="2rem" />
                </div>
                <div className="stat-title">Total Mints</div>
                <div className="stat-value text-primary"><CountUp
                    start={0}
                    end={11189}
                    duration={2}
                    separator=","
                    decimals={0}
                    decimal=","
                    prefix=""
                />k</div>
            </div>

            <div className="stat">
                <div className="stat-figure text-secondary">
                    <FaUserPlus size="2rem" />
                </div>
                <div className="stat-title">Total Owners</div>
                <div className="stat-value text-secondary"><CountUp
                    start={0}
                    end={3211}
                    duration={2}
                    separator=","
                    decimals={0}
                    decimal=","
                    prefix=""
                />k</div>
            </div>


            <div className="stat">
                <div className="stat-figure text-primary">
                    <FaPeopleCarry size="2rem" />
                </div>
                <div className="stat-title">Total Transfer</div>
                <div className="stat-value text-primary"><CountUp
                    start={0}
                    end={25150}
                    duration={2}
                    separator=","
                    decimals={0}
                    decimal=","
                    prefix=""
                />k</div>
            </div>



        </div>
    )
}