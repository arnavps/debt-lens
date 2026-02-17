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
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      maxWidth: '100%',
      minWidth: '100%',
      background: `
        repeating-linear-gradient(
          45deg,
          transparent,
          transparent 2px,
          rgba(30, 45, 69, 0.03) 2px,
          rgba(30, 45, 69, 0.03) 4px
        ),
        radial-gradient(circle at 20% 30%, rgba(245, 166, 35, 0.03) 0%, transparent 50%),
        #0A0E17
      `,
      padding: '24px',
      boxSizing: 'border-box',
      fontFamily: "'IBM Plex Mono', monospace",
      color: '#E8EDF5'
    }}>
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
          width: 100%;
          min-height: 100vh;
        }
        
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { text-shadow: 0 0 20px rgba(245, 166, 35, 0.4); }
          50% { text-shadow: 0 0 30px rgba(245, 166, 35, 0.8); }
          100% { text-shadow: 0 0 20px rgba(245, 166, 35, 0.4); }
        }
      `}</style>

      {/* Navigation */}
      <motion.div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0',
          borderBottom: '1px solid #1E2D45',
          marginBottom: '32px'
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={navVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: '28px',
            color: '#F5A623',
            letterSpacing: '1px'
          }}>
            ⬡ DebtRadar
          </div>
          <div style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '14px',
            color: '#4A6080',
            marginTop: '4px'
          }}>
            Cross-Institutional Debt Intelligence
          </div>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: '#00E5A0',
              borderRadius: '50%',
              boxShadow: '0 0 8px #00E5A0',
              animation: 'pulse 1.5s infinite'
            }}></div>
            <span>Arjun Mehta</span>
          </div>
          <div style={{
            fontSize: '12px',
            color: '#4A6080'
          }}>
            Last synced: 2 min ago
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div 
        style={{
          background: '#141D2E',
          border: '1px solid #1E2D45',
          borderLeft: '4px solid #F5A623',
          padding: '32px',
          marginBottom: '32px'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={heroVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <div style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontWeight: 700,
          fontSize: '24px',
          letterSpacing: '2px',
          marginBottom: '24px',
          color: '#E8EDF5'
        }}>
          DEBT STRESS TRAJECTORY
        </div>
        
        <div style={{ marginBottom: '24px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '8px',
            fontSize: '14px',
            color: '#4A6080'
          }}>
            <span>SAFE</span>
            <span>WARNING</span>
            <span>CRITICAL</span>
          </div>
          <div style={{
            height: '8px',
            background: 'linear-gradient(90deg, #00E5A0 0%, #00E5A0 33%, #F5A623 33%, #F5A623 66%, #FF4D4D 66%, #FF4D4D 100%)',
            borderRadius: '0',
            position: 'relative',
            overflow: 'visible'
          }}>
            <motion.div 
              style={{
                position: 'absolute',
                top: '-6px',
                width: '20px',
                height: '20px',
                background: '#F5A623',
                border: '2px solid #0A0E17',
                borderRadius: '50%',
                boxShadow: '0 0 12px #F5A623',
                transform: 'translateX(-50%)'
              }}
              initial={{ left: '0%' }}
              animate={heroVisible ? { left: '52%' } : {}}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
            />
          </div>
        </div>
        
        <div style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontWeight: 700,
          fontSize: '16px',
          color: '#E8EDF5',
          margin: '20px 0'
        }}>
          Critical threshold reached in →
        </div>
        <motion.div 
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: '72px',
            color: '#F5A623',
            letterSpacing: '-2px',
            margin: '8px 0',
            textShadow: '0 0 20px rgba(245, 166, 35, 0.4)',
            animation: 'shimmer 3s infinite'
          }}
          initial={{ opacity: 0 }}
          animate={heroVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {dayCount}
        </motion.div>
        <div style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '14px',
          color: '#4A6080'
        }}>
          DAYS
        </div>
        <div style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: '14px',
          color: '#4A6080',
          marginTop: '16px'
        }}>
          Based on behavioral analysis across 4 institutions · Updated Feb 17 2026
        </div>
      </motion.div>

      {/* Debt Map Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        marginBottom: '32px',
        width: '100%'
      }}>
        {debtData.map((debt, index) => (
          <motion.div
            key={index}
            style={{
              background: '#141D2E',
              border: '1px solid #1E2D45',
              borderLeft: '4px solid #F5A623',
              padding: '20px'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={cardsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 * index }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '16px'
            }}>
              <div>
                <div style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 600,
                  fontSize: '18px',
                  color: '#E8EDF5'
                }}>
                  {debt.institution}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#4A6080',
                  marginTop: '2px'
                }}>
                  {debt.loanType}
                </div>
              </div>
              <div style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '12px',
                fontWeight: 500,
                padding: '4px 12px',
                border: `1px solid ${debt.statusColor}`,
                color: debt.statusColor
              }}>
                {debt.status}
              </div>
            </div>
            <div style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: '20px',
              fontWeight: 600,
              color: '#E8EDF5',
              marginBottom: '12px'
            }}>
              {debt.emi}/mo
            </div>
            <div style={{
              fontSize: '14px',
              color: '#4A6080',
              marginBottom: '8px'
            }}>
              Utilization
            </div>
            <div style={{
              height: '6px',
              background: '#0F1623',
              borderRadius: '0',
              overflow: 'hidden'
            }}>
              <motion.div
                style={{
                  height: '100%',
                  borderRadius: '0',
                  backgroundColor: debt.statusColor
                }}
                initial={{ width: 0 }}
                animate={cardsVisible ? { width: `${debt.utilization}%` } : {}}
                transition={{ duration: 1, delay: 0.3 * index }}
              />
            </div>
            <div style={{
              fontSize: '12px',
              color: '#4A6080',
              marginTop: '8px',
              fontFamily: "'IBM Plex Mono', monospace"
            }}>
              {debt.utilization}% utilized
            </div>
          </motion.div>
        ))}
      </div>

      {/* Panels */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
        marginBottom: '32px',
        width: '100%'
      }}>
        {/* Behavioral Signals */}
        <motion.div
          style={{
            background: '#141D2E',
            border: '1px solid #1E2D45',
            borderLeft: '4px solid #F5A623',
            padding: '24px'
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={signalsVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: '20px',
            color: '#E8EDF5',
            marginBottom: '20px',
            letterSpacing: '1px'
          }}>
            DETECTED SIGNALS
          </div>
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 0',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '14px',
                borderBottom: '1px solid rgba(30, 45, 69, 0.3)'
              }}
              initial={{ opacity: 0 }}
              animate={signalsVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 * index }}
            >
              <div 
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 
                    signal.severity === 'danger' ? '#FF4D4D' :
                    signal.severity === 'warn' ? '#F5A623' : '#00E5A0'
                }}
              />
              <div>
                <div style={{ color: '#E8EDF5', fontWeight: '500' }}>
                  {signal.type}
                </div>
                <div style={{ color: '#4A6080', fontSize: '12px' }}>
                  {signal.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Intervention Engine */}
        <motion.div
          style={{
            background: '#141D2E',
            border: '1px solid #1E2D45',
            borderLeft: '4px solid #F5A623',
            padding: '24px'
          }}
          initial={{ opacity: 0, x: 20 }}
          animate={interventionsVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: '20px',
            color: '#E8EDF5',
            marginBottom: '20px',
            letterSpacing: '1px'
          }}>
            INTERVENTION ACTIONS
          </div>
          {interventions.map((intervention, index) => (
            <motion.div
              key={index}
              style={{
                background: '#0F1623',
                borderLeft: '3px solid #F5A623',
                padding: '16px',
                marginBottom: '16px'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={interventionsVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <div style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 600,
                fontSize: '16px',
                color: '#E8EDF5',
                marginBottom: '8px'
              }}>
                {intervention.title}
              </div>
              <div style={{
                fontSize: '14px',
                color: '#4A6080',
                marginBottom: '12px'
              }}>
                {intervention.saving && `Est. monthly saving ${intervention.saving}`}
                {intervention.window && `Window: ${intervention.window}`}
                {intervention.impact && intervention.impact}
              </div>
              <div style={{
                display: 'inline-block',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '12px',
                fontWeight: 500,
                padding: '4px 12px',
                border: `1px solid ${intervention.priorityColor}`,
                color: intervention.priorityColor
              }}>
                Priority: {intervention.priority}
              </div>
              <button style={{
                background: '#F5A623',
                color: '#0A0E17',
                border: 'none',
                padding: '8px 16px',
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '12px',
                fontWeight: 500,
                cursor: 'pointer',
                marginTop: '12px',
                width: '100%'
              }}>
                Get Script
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer Stat Bar */}
      <motion.div
        style={{
          background: '#0F1623',
          borderTop: '1px solid #1E2D45',
          padding: '20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px',
          width: '100%',
          boxSizing: 'border-box'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={statsVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: '24px',
            color: '#F5A623',
            marginBottom: '4px'
          }}>
            ₹{stats.obligation.toLocaleString()}
          </div>
          <div style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '12px',
            color: '#4A6080',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Monthly Obligation
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: '24px',
            color: '#F5A623',
            marginBottom: '4px'
          }}>
            {stats.debtToIncome.toFixed(1)}%
          </div>
          <div style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '12px',
            color: '#4A6080',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Debt-to-Income Ratio
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: '24px',
            color: '#F5A623',
            marginBottom: '4px'
          }}>
            {stats.stressScore.toFixed(0)} / 100
          </div>
          <div style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '12px',
            color: '#4A6080',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Stress Score
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: '24px',
            color: '#F5A623',
            marginBottom: '4px'
          }}>
            4
          </div>
          <div style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '12px',
            color: '#4A6080',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Institutions Tracked
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DebtRadar;