import { useAuth } from '../context/AuthContext';
import { Shield, Activity, Globe, Zap, LogOut, Terminal, Lock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <nav>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className="logo">
            <Shield size={24} /> Aegis Security
          </div>
          <div className="nav-links">
            <Link to="/">Dashboard</Link>
            <Link to="/threats">Threat Intel</Link>
            <Link to="/tools">SecOps Tools</Link>
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <User size={16} /> {user.name}
                </span>
                <button onClick={logout} className="btn btn-outline" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>
                  <LogOut size={14} /> Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn btn-primary" style={{ padding: '8px 16px' }}>Login</Link>
            )}
          </div>
        </div>
      </nav>

      <div className="container">
        <header className="hero">
          <h1>Universal Threat Detection</h1>
          <p>Real-time intelligence and automated response for the modern enterprise. Secure your perimeter with Aegis AI.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <button className="btn btn-primary">Launch Scanner</button>
            <button className="btn btn-outline">View Docs</button>
          </div>
        </header>

        <section style={{ padding: '40px 0' }}>
          <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>System Status</h2>
          <div className="grid grid-3">
            <div className="glass" style={{ padding: '25px' }}>
              <div style={{ color: 'var(--accent-color)', marginBottom: '15px' }}>
                <Activity size={32} />
              </div>
              <h3 style={{ marginBottom: '10px' }}>Network Traffic</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Analyzing incoming packets from 142 unique sources. No anomalies detected.</p>
              <div style={{ marginTop: '15px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
                <div style={{ width: '65%', height: '100%', background: 'var(--accent-color)', borderRadius: '2px' }}></div>
              </div>
            </div>

            <div className="glass" style={{ padding: '25px' }}>
              <div style={{ color: 'var(--success-color)', marginBottom: '15px' }}>
                <Globe size={32} />
              </div>
              <h3 style={{ marginBottom: '10px' }}>Global Nodes</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>All 12 monitoring stations are currently operational and synchronized.</p>
              <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '10px', height: '100%', background: 'var(--success-color)', borderRadius: '50%' }}></div>
                <span style={{ color: 'var(--success-color)', fontSize: '0.8rem' }}>LIVE</span>
              </div>
            </div>

            <div className="glass" style={{ padding: '25px' }}>
              <div style={{ color: 'var(--accent-color)', marginBottom: '15px' }}>
                <Zap size={32} />
              </div>
              <h3 style={{ marginBottom: '10px' }}>AI Core</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Neural engine processing threats at 1.2M events per second.</p>
              <div style={{ marginTop: '15px', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--accent-color)' }}>
                99.9% Accuracy
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: '60px 0' }}>
          <div className="glass" style={{ padding: '40px', background: 'linear-gradient(135deg, rgba(0,163,255,0.1) 0%, rgba(10,10,11,1) 100%)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
              <Terminal size={40} color="var(--accent-color)" />
              <div>
                <h2 style={{ fontSize: '2rem' }}>Ready to secure your data?</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Get started with our enterprise-grade security platform today.</p>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <Link to="/register" className="btn btn-primary">Start Free Trial</Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer style={{ padding: '40px 0', borderTop: '1px solid var(--border-color)', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        <p>&copy; 2026 Aegis Intelligence Systems. All rights reserved.</p>
        <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Terms of Service</a>
          <a href="#" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Security Disclosure</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
