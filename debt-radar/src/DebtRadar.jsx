import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const DebtRadar = () => {
    const [dayCount, setDayCount] = useState(0);
    const [stats, setStats] = useState({
        obligation: 0,
        debtToIncome: 0,
        stressScore: 0
    });

    // Animation triggers
    const [navVisible, setNavVisible] = useState(false);
    const [heroVisible, setHeroVisible] = useState(false);
    const [cardsVisible, setCardsVisible] = useState(false);
    const [signalsVisible, setSignalsVisible] = useState(false);
    const [interventionsVisible, setInterventionsVisible] = useState(false);
    const [statsVisible, setStatsVisible] = useState(false);

    useEffect(() => {
        // Staggered entrance animations
        const timer1 = setTimeout(() => setNavVisible(true), 100);
        const timer2 = setTimeout(() => setHeroVisible(true), 250);
        const timer3 = setTimeout(() => setCardsVisible(true), 400);
        const timer4 = setTimeout(() => setSignalsVisible(true), 550);
        const timer5 = setTimeout(() => setInterventionsVisible(true), 700);
        const timer6 = setTimeout(() => setStatsVisible(true), 850);

        // Animate day count
        const countTimer = setTimeout(() => {
            let count = 0;
            const interval = setInterval(() => {
                count++;
                setDayCount(count);
                if (count >= 43) clearInterval(interval);
            }, 35);
        }, 1000);

        // Animate stats
        const statsTimer = setTimeout(() => {
            let obligation = 0;
            let debtToIncome = 0;
            let stressScore = 0;

            const interval = setInterval(() => {
                obligation += 506;
                debtToIncome += 6.12;
                stressScore += 7.4;

                setStats({
                    obligation: Math.min(obligation, 50600),
                    debtToIncome: Math.min(debtToIncome, 61.2),
                    stressScore: Math.min(stressScore, 74)
                });

                if (obligation >= 50600) clearInterval(interval);
            }, 20);
        }, 1200);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);
            clearTimeout(timer6);
            clearTimeout(countTimer);
            clearTimeout(statsTimer);
        };
    }, []);

    const debtData = [
        {
            institution: "HDFC Bank",
            loanType: "Home Loan",
            emi: "₹28,400",
            utilization: 34,
            status: "ON TRACK",
            statusColor: "var(--safe)"
        },
        {
            institution: "Axis Bank",
            loanType: "Personal Loan",
            emi: "₹12,200",
            utilization: 78,
            status: "AT RISK",
            statusColor: "var(--warn)"
        },
        {
            institution: "Bajaj Finserv",
            loanType: "Consumer Loan",
            emi: "₹6,800",
            utilization: 91,
            status: "CYCLING",
            statusColor: "var(--danger)"
        },
        {
            institution: "Amazon Pay BNPL",
            loanType: "Credit Line",
            emi: "₹3,200",
            utilization: 88,
            status: "AT RISK",
            statusColor: "var(--warn)"
        }
    ];

    const signals = [
        { type: "DEBT_CYCLING_DETECTED", description: "Bajaj → Amazon Pay rotation", severity: "danger" },
        { type: "EMI_DRIFT", description: "Income-to-obligation ratio up 14% in 90d", severity: "warn" },
        { type: "SEQUENCING_ANOMALY", description: "Home loan deprioritized 2× this quarter", severity: "warn" },
        { type: "HDFC_STABLE", description: "No stress indicators", severity: "safe" }
    ];

    const interventions = [
        {
            title: "Consolidate Bajaj + BNPL",
            saving: "₹2,100",
            priority: "HIGH",
            priorityColor: "var(--danger)"
        },
        {
            title: "Request EMI restructure — Axis Bank",
            window: "next 28 days",
            priority: "HIGH",
            priorityColor: "var(--danger)"
        },
        {
            title: "Reduce BNPL utilization below 60%",
            impact: "lowers stress score 18pts",
            priority: "MEDIUM",
            priorityColor: "var(--warn)"
        }
    ];

    return (
        <div className="debt-radar">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
        
        :root {
          --bg: #0A0E17;
          --surface: #0F1623;
          --card: #141D2E;
          --border: #1E2D45;
          --gold: #F5A623;
          --danger: #FF4D4D;
          --warn: #F5A623;
          --safe: #00E5A0;
          --teal: #00C2D4;
          --text: #E8EDF5;
          --muted: #4A6080;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          background: var(--bg);
          font-family: 'IBM Plex Mono', monospace;
          color: var(--text);
          overflow-x: hidden;
        }
        
        .debt-radar {
          min-height: 100vh;
          background: 
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(30, 45, 69, 0.03) 2px,
              rgba(30, 45, 69, 0.03) 4px
            ),
            radial-gradient(circle at 20% 30%, rgba(245, 166, 35, 0.03) 0%, transparent 50%),
            var(--bg);
          padding: 24px;
        }
        
        @media (max-width: 1200px) {
          .debt-radar {
            padding: 20px;
          }
          
          .grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .panels {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .stat-bar {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        
        @media (max-width: 768px) {
          .debt-radar {
            padding: 16px;
          }
          
          .nav {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
          
          .logo {
            font-size: 24px;
          }
          
          .hero {
            padding: 24px 20px;
          }
          
          .days-countdown {
            font-size: 48px;
          }
          
          .debt-card {
            padding: 16px;
          }
          
          .panel {
            padding: 20px 16px;
          }
          
          .stat-bar {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 16px;
          }
          
          .stat-value {
            font-size: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .debt-radar {
            padding: 12px;
          }
          
          .logo {
            font-size: 20px;
          }
          
          .subtitle {
            font-size: 12px;
          }
          
          .hero-title {
            font-size: 20px;
          }
          
          .days-countdown {
            font-size: 36px;
          }
          
          .hero {
            padding: 20px 16px;
          }
          
          .debt-card {
            padding: 14px;
          }
          
          .institution {
            font-size: 16px;
          }
          
          .emi {
            font-size: 18px;
          }
          
          .panel {
            padding: 18px 16px;
          }
          
          .panel-title {
            font-size: 18px;
          }
          
          .signal-row {
            font-size: 12px;
          }
        }
        
        @media (max-width: 400px) {
          .debt-radar {
            padding: 10px;
          }
          
          .logo {
            font-size: 18px;
          }
          
          .hero-title {
            font-size: 18px;
          }
          
          .days-countdown {
            font-size: 32px;
          }
          
          .debt-card {
            padding: 12px;
          }
          
          .institution {
            font-size: 15px;
          }
          
          .emi {
            font-size: 16px;
          }
          
          .panel {
            padding: 16px 12px;
          }
          
          .panel-title {
            font-size: 16px;
          }
          
          .signal-row {
            font-size: 11px;
            padding: 10px 0;
          }
          
          .intervention-card {
            padding: 12px;
          }
          
          .intervention-title {
            font-size: 14px;
          }
        }
        
        /* Prevent text overflow */
        .institution, .loan-type, .emi, .panel-title {
          word-break: break-word;
        }
        
        /* Ensure proper scrolling on small devices */
        html, body {
          overflow-x: hidden;
        }
        
        /* Improve touch targets for mobile */
        .action-button, .status-badge, .priority-badge {
          min-height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid var(--border);
          margin-bottom: 32px;
        }
        
        .logo {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 28px;
          color: var(--gold);
          letter-spacing: 1px;
        }
        
        .subtitle {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 14px;
          color: var(--muted);
          margin-top: 4px;
        }
        
        .user-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .live-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }
        
        .live-dot {
          width: 8px;
          height: 8px;
          background: var(--safe);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--safe);
          animation: pulse 1.5s infinite;
        }
        
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }
        
        .hero {
          background: var(--card);
          border: 1px solid var(--border);
          border-left: 4px solid var(--gold);
          padding: 32px;
          margin-bottom: 32px;
        }
        
        .hero-title {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 24px;
          letter-spacing: 2px;
          margin-bottom: 24px;
          color: var(--text);
        }
        
        .timeline-container {
          margin-bottom: 24px;
        }
        
        .timeline-labels {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
          font-size: 14px;
          color: var(--muted);
        }
        
        .timeline {
          height: 8px;
          background: linear-gradient(90deg, var(--safe) 0%, var(--safe) 33%, var(--warn) 33%, var(--warn) 66%, var(--danger) 66%, var(--danger) 100%);
          border-radius: 0;
          position: relative;
          overflow: visible;
        }
        
        .marker {
          position: absolute;
          top: -6px;
          width: 20px;
          height: 20px;
          background: var(--gold);
          border: 2px solid var(--bg);
          border-radius: 50%;
          box-shadow: 0 0 12px var(--gold);
          transform: translateX(-50%);
        }
        
        .critical-text {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 16px;
          color: var(--text);
          margin: 20px 0;
        }
        
        .days-countdown {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 72px;
          color: var(--gold);
          letter-spacing: -2px;
          margin: 8px 0;
          text-shadow: 0 0 20px rgba(245, 166, 35, 0.4);
          animation: shimmer 3s infinite;
        }
        
        @keyframes shimmer {
          0% { text-shadow: 0 0 20px rgba(245, 166, 35, 0.4); }
          50% { text-shadow: 0 0 30px rgba(245, 166, 35, 0.8); }
          100% { text-shadow: 0 0 20px rgba(245, 166, 35, 0.4); }
        }
        
        .sub-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 14px;
          color: var(--muted);
        }
        
        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }
        
        .debt-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-left: 4px solid var(--gold);
          padding: 20px;
        }
        
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        
        .institution {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          font-size: 18px;
          color: var(--text);
        }
        
        .loan-type {
          font-size: 14px;
          color: var(--muted);
          margin-top: 2px;
        }
        
        .status-badge {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          font-weight: 500;
          padding: 4px 12px;
          border: 1px solid currentColor;
        }
        
        .emi {
          font-family: 'Rajdhani', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 12px;
        }
        
        .utilization-label {
          font-size: 14px;
          color: var(--muted);
          margin-bottom: 8px;
        }
        
        .utilization-bar {
          height: 6px;
          background: var(--surface);
          border-radius: 0;
          overflow: hidden;
        }
        
        .utilization-fill {
          height: 100%;
          border-radius: 0;
        }
        
        .panels {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 32px;
        }
        
        .panel {
          background: var(--card);
          border: 1px solid var(--border);
          border-left: 4px solid var(--gold);
          padding: 24px;
        }
        
        .panel-title {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 20px;
          color: var(--text);
          margin-bottom: 20px;
          letter-spacing: 1px;
        }
        
        .signal-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 0;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 14px;
          border-bottom: 1px solid rgba(30, 45, 69, 0.3);
        }
        
        .signal-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        
        .intervention-card {
          background: var(--surface);
          border-left: 3px solid var(--gold);
          padding: 16px;
          margin-bottom: 16px;
        }
        
        .intervention-title {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          font-size: 16px;
          color: var(--text);
          margin-bottom: 8px;
        }
        
        .intervention-detail {
          font-size: 14px;
          color: var(--muted);
          margin-bottom: 12px;
        }
        
        .priority-badge {
          display: inline-block;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          font-weight: 500;
          padding: 4px 12px;
          border: 1px solid currentColor;
        }
        
        .action-button {
          background: var(--gold);
          color: var(--bg);
          border: none;
          padding: 8px 16px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          margin-top: 12px;
          width: 100%;
        }
        
        .action-button:hover {
          background: #e69500;
        }
        
        .stat-bar {
          background: var(--surface);
          border-top: 1px solid var(--border);
          padding: 20px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-value {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 24px;
          color: var(--gold);
          margin-bottom: 4px;
        }
        
        .stat-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}</style>

            {/* Navigation */}
            <motion.div
                className="nav"
                initial={{ opacity: 0, y: -20 }}
                animate={navVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <div className="logo">⬡ DebtRadar</div>
                    <div className="subtitle">Cross-Institutional Debt Intelligence</div>
                </div>
                <div className="user-info">
                    <div className="live-indicator">
                        <div className="live-dot"></div>
                        <span>Arjun Mehta</span>
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
                        Last synced: 2 min ago
                    </div>
                </div>
            </motion.div>

            {/* Hero Section */}
            <motion.div
                className="hero"
                initial={{ opacity: 0, y: 20 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
            >
                <div className="hero-title">DEBT STRESS TRAJECTORY</div>

                <div className="timeline-container">
                    <div className="timeline-labels">
                        <span>SAFE</span>
                        <span>WARNING</span>
                        <span>CRITICAL</span>
                    </div>
                    <div className="timeline">
                        <motion.div
                            className="marker"
                            initial={{ left: '0%' }}
                            animate={heroVisible ? { left: '52%' } : {}}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                        />
                    </div>
                </div>

                <div className="critical-text">Critical threshold reached in →</div>
                <motion.div
                    className="days-countdown"
                    initial={{ opacity: 0 }}
                    animate={heroVisible ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    {dayCount}
                </motion.div>
                <div className="sub-label">DAYS</div>
                <div className="sub-label" style={{ marginTop: '16px' }}>
                    Based on behavioral analysis across 4 institutions · Updated Feb 17 2026
                </div>
            </motion.div>

            {/* Debt Map Grid */}
            <div className="grid">
                {debtData.map((debt, index) => (
                    <motion.div
                        key={index}
                        className="debt-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.15 * index }}
                    >
                        <div className="card-header">
                            <div>
                                <div className="institution">{debt.institution}</div>
                                <div className="loan-type">{debt.loanType}</div>
                            </div>
                            <div
                                className="status-badge"
                                style={{ color: debt.statusColor, borderColor: debt.statusColor }}
                            >
                                {debt.status}
                            </div>
                        </div>
                        <div className="emi">{debt.emi}/mo</div>
                        <div className="utilization-label">Utilization</div>
                        <div className="utilization-bar">
                            <motion.div
                                className="utilization-fill"
                                style={{ backgroundColor: debt.statusColor }}
                                initial={{ width: 0 }}
                                animate={cardsVisible ? { width: `${debt.utilization}%` } : {}}
                                transition={{ duration: 1, delay: 0.3 * index }}
                            />
                        </div>
                        <div style={{
                            fontSize: '12px',
                            color: 'var(--muted)',
                            marginTop: '8px',
                            fontFamily: 'IBM Plex Mono'
                        }}>
                            {debt.utilization}% utilized
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Panels */}
            <div className="panels">
                {/* Behavioral Signals */}
                <motion.div
                    className="panel"
                    initial={{ opacity: 0, x: -20 }}
                    animate={signalsVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <div className="panel-title">DETECTED SIGNALS</div>
                    {signals.map((signal, index) => (
                        <motion.div
                            key={index}
                            className="signal-row"
                            initial={{ opacity: 0 }}
                            animate={signalsVisible ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 * index }}
                        >
                            <div
                                className="signal-dot"
                                style={{
                                    backgroundColor:
                                        signal.severity === 'danger' ? 'var(--danger)' :
                                            signal.severity === 'warn' ? 'var(--warn)' : 'var(--safe)'
                                }}
                            />
                            <div>
                                <div style={{ color: 'var(--text)', fontWeight: '500' }}>
                                    {signal.type}
                                </div>
                                <div style={{ color: 'var(--muted)', fontSize: '12px' }}>
                                    {signal.description}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Intervention Engine */}
                <motion.div
                    className="panel"
                    initial={{ opacity: 0, x: 20 }}
                    animate={interventionsVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <div className="panel-title">INTERVENTION ACTIONS</div>
                    {interventions.map((intervention, index) => (
                        <motion.div
                            key={index}
                            className="intervention-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={interventionsVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 * index }}
                        >
                            <div className="intervention-title">{intervention.title}</div>
                            <div className="intervention-detail">
                                {intervention.saving && `Est. monthly saving ${intervention.saving}`}
                                {intervention.window && `Window: ${intervention.window}`}
                                {intervention.impact && intervention.impact}
                            </div>
                            <div
                                className="priority-badge"
                                style={{
                                    color: intervention.priorityColor,
                                    borderColor: intervention.priorityColor
                                }}
                            >
                                Priority: {intervention.priority}
                            </div>
                            <button className="action-button">Get Script</button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Footer Stat Bar */}
            <motion.div
                className="stat-bar"
                initial={{ opacity: 0, y: 20 }}
                animate={statsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <div className="stat-item">
                    <div className="stat-value">₹{stats.obligation.toLocaleString()}</div>
                    <div className="stat-label">Monthly Obligation</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value">{stats.debtToIncome.toFixed(1)}%</div>
                    <div className="stat-label">Debt-to-Income Ratio</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value">{stats.stressScore.toFixed(0)} / 100</div>
                    <div className="stat-label">Stress Score</div>
                </div>
                <div className="stat-item">
                    <div className="stat-value">4</div>
                    <div className="stat-label">Institutions Tracked</div>
                </div>
            </motion.div>
        </div>
    );
};

export default DebtRadar;