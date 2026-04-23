import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  Check, 
  Shield, 
  Zap, 
  PieChart, 
  BarChart3, 
  Bell, 
  TrendingUp, 
  Layers,
  Layout,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div 
    className="feature-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <div className="feature-icon-box">
      <Icon size={24} />
    </div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </motion.div>
);

const LandingPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div 
      className="landing-root"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header */}
      <header className="landing-header">
        <div className="landing-logo">
          <img src="https://www.image2url.com/r2/default/images/1776834249896-92b9b25d-757c-478a-99f8-2c6279cdb58e.png" alt="Logo" className="logo-img-small" />
          <span>Trackify</span>
        </div>
        
        <nav className="landing-nav">
          <span className="nav-link">Features</span>
          <span className="nav-link">Analytics</span>
          <span className="nav-link">Pricing</span>
        </nav>

        <div className="header-actions">
          <button className="btn-login">Login</button>
          <button className="btn-get-started">Get Started</button>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section className="hero-section" variants={itemVariants}>
        <motion.span 
          className="hero-tag"
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.2em' }}
          transition={{ duration: 1 }}
        >
          NEXT GENERATION FINANCE
        </motion.span>
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your Financial Data. <span>Smarter.</span>
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Track transactions, analyze spending, and receive AI-powered insights in real time. 
          Professional-grade wealth management for the modern professional.
        </motion.p>

        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/dashboard" className="btn-hero-primary">
            Get Started Free <ArrowRight size={18} />
          </Link>
          <button className="btn-hero-secondary">
            <Play size={18} fill="white" /> Live Demo
          </button>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img 
            src="https://www.image2url.com/r2/default/images/1776945781312-cca83947-96b2-4d7e-8030-7826a05ce76c.png" 
            alt="Dashboard Preview" 
            className="hero-image"
            animate={{ 
              y: [0, -20, 0],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          
          <div className="floating-stats-card">
            <div className="stat-item">
              <span className="stat-label">Total Balance</span>
              <span className="stat-value">₹4,82,950</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Growth</span>
              <span className="stat-value teal">+12.4%</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Expenses</span>
              <span className="stat-value">₹42,300</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Income</span>
              <span className="stat-value teal">₹1,24,000</span>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section className="features-section" variants={itemVariants}>
        <span className="section-label">FEATURES</span>
        <h2 className="section-title">Powerful Financial Tools</h2>
        <p className="section-subtitle">Everything you need to master your personal economy.</p>

        <div className="features-grid">
          <FeatureCard 
            icon={Layers} 
            title="Smart Expense Tracking" 
            desc="Automatically sync and track every rupee spent across all your bank accounts and cards."
            delay={0.1}
          />
          <FeatureCard 
            icon={Zap} 
            title="AI Categorization" 
            desc="Advanced machine learning identifies and categorizes transactions with 99% accuracy."
            delay={0.2}
          />
          <FeatureCard 
            icon={Layout} 
            title="Budget Control" 
            desc="Set limits for specific categories and get notified before you overspend."
            delay={0.3}
          />
          <FeatureCard 
            icon={Bell} 
            title="Real-time Alerts" 
            desc="Get instant notifications for suspicious activity and recurring bill reminders."
            delay={0.4}
          />
          <FeatureCard 
            icon={TrendingUp} 
            title="Financial Insights" 
            desc="Detailed visual reports that reveal your true spending habits and saving potential."
            delay={0.5}
          />
          <FeatureCard 
            icon={PieChart} 
            title="Subscription Detection" 
            desc="Identify forgotten subscriptions and recurring charges that are unnecessarily costly."
            delay={0.6}
          />
        </div>
      </motion.section>

      {/* Visual Intelligence Section */}
      <motion.section className="intelligence-section" variants={itemVariants}>
        <span className="section-label">VISUAL INTELLIGENCE</span>
        <h2 className="section-title">Your Wealth Mapped in Stunning Detail.</h2>
        
        <div className="charts-grid">
          <motion.div 
            className="chart-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Weekly Spending</h3>
            <div className="spending-chart-bars">
              {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
                <motion.div 
                  key={i} 
                  className="spending-bar" 
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="chart-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Expense vs Income</h3>
            <div className="relative h-40 mt-8 flex items-center justify-center">
               <motion.svg width="100%" height="100%" viewBox="0 0 400 100">
                  <motion.path 
                    d="M0,80 Q100,20 200,80 T400,20" 
                    fill="none" 
                    stroke="var(--brand-teal)" 
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                  />
                  <motion.path 
                    d="M0,90 Q100,50 200,90 T400,50" 
                    fill="none" 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="2" 
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
               </motion.svg>
            </div>
          </motion.div>

          <motion.div 
            className="chart-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Category Breakdown</h3>
            <div className="donut-chart-container">
              <div className="donut-spinner" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Active Budgets Section */}
      <motion.section className="budgets-section" variants={itemVariants}>
        <h2 className="section-title">Active Budgets</h2>
        <div className="budget-row">
          {[
            { label: 'Food', percent: 45, color: '#19d4a8' },
            { label: 'Shopping', percent: 110, color: '#f87171' },
            { label: 'Savings Goal', percent: 85, color: '#a855f7' }
          ].map((item, i) => (
            <div key={i} className="budget-item">
              <div className="budget-meta">
                <span>{item.label}</span>
                <span style={{ color: item.percent > 100 ? '#f87171' : 'inherit' }}>
                  {item.percent}% USED
                </span>
              </div>
              <div className="budget-progress-bg">
                <motion.div 
                  className="budget-progress-fill"
                  style={{ backgroundColor: item.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.min(item.percent, 100)}%` }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Trust Row */}
      <div className="flex justify-center items-center gap-12 py-12 border-y border-white/5 opacity-50 text-xs font-bold tracking-widest grayscale">
        <div className="flex items-center gap-2"><Shield size={16} /> BANK-LEVEL SECURITY</div>
        <div className="flex items-center gap-2"><Zap size={16} /> 256-BIT ENCRYPTION</div>
        <div>TRUSTED BY 50,000+ USERS</div>
      </div>

      {/* Pricing Section */}
      <motion.section className="pricing-section" variants={itemVariants}>
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <div className="pricing-grid">
          <motion.div 
            className="pricing-card"
            whileHover={{ y: -10 }}
          >
            <h3 className="price-title">Basic</h3>
            <div className="price-value">₹0<span>/month</span></div>
            <div className="pricing-features">
              <div className="pricing-feature-item"><Check size={16} /> Up to 2 bank accounts</div>
              <div className="pricing-feature-item"><Check size={16} /> Manual expense logging</div>
              <div className="pricing-feature-item"><Check size={16} /> Basic monthly reports</div>
            </div>
            <button className="btn-pricing secondary">Join For Free</button>
          </motion.div>

          <motion.div 
            className="pricing-card popular"
            whileHover={{ y: -10 }}
          >
            <div className="popular-badge">RECOMMENDED</div>
            <h3 className="price-title">Pro</h3>
            <div className="price-value">₹99<span>/month</span></div>
            <div className="pricing-features">
              <div className="pricing-feature-item"><Check size={16} /> Unlimited bank accounts</div>
              <div className="pricing-feature-item"><Check size={16} /> Real-time AI categorization</div>
              <div className="pricing-feature-item"><Check size={16} /> Predictive savings insights</div>
              <div className="pricing-feature-item"><Check size={16} /> Priority support</div>
            </div>
            <button className="btn-pricing primary">Get Full Access</button>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="cta-footer-section" variants={itemVariants}>
        <motion.div 
          className="cta-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2>Start Tracking Your Money Today</h2>
          <p>Join 50,000+ individuals who have mastered their financial future with Trackify's premium tools.</p>
          <button className="btn-get-started" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            Create Free Account
          </button>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <div className="landing-logo">
            <img src="https://www.image2url.com/r2/default/images/1776834249896-92b9b25d-757c-478a-99f8-2c6279cdb58e.png" alt="Logo" className="logo-img-small" />
            <span>Trackify</span>
          </div>
          <p className="footer-desc">© 2024 Trackify Financial. Professional-grade wealth management.</p>
        </div>
        
        <div className="footer-nav">
          <span className="nav-link">Features</span>
          <span className="nav-link">Analytics</span>
          <span className="nav-link">Pricing</span>
          <span className="nav-link">Privacy</span>
          <span className="nav-link">Terms</span>
        </div>

        <div className="footer-socials">
          <Globe className="social-link" size={20} />
          <TrendingUp className="social-link" size={20} />
          <Shield className="social-link" size={20} />
        </div>
      </footer>
    </motion.div>
  );
};

export default LandingPage;
