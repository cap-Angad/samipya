import React from 'react';
import './Statistics.css';

const Statistics = () => {
    return (
        <div className="det-content">
            <div className="statistics-container">
                <div className="graph-container">
                    <div className="graph">
                        {/* You'll need to add a proper charting library like Chart.js or Recharts for the actual graph */}
                        <img src="/images/graph-placeholder.png" alt="Monthly Sales Graph" className="placeholder-graph" />
                    </div>
                    <div className="year-control">
                        <button>◀</button>
                        <span>2024 A.D.</span>
                        <button>▶</button>
                    </div>
                </div>
                <div className="statistics-summary">
                    <p>Total Sale this Month: 2.3K</p>
                    <p>Total Sale This Year: 15.2K</p>
                    <p>Total Products in inventory: 532</p>
                    <p>Total Product Variety: 48</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics; 