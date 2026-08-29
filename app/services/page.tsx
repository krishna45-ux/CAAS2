import Image from 'next/image';
import Link from 'next/link';
import { Stagger, StaggerItem, Reveal } from '../components/motion';

export default function ServicesPage() {
  return (
    <main id="top" className="page-main services-page" data-nav="light">
      
      {/* 1. HERO — two-column, per Figma */}
      <section className="services-cta services-hero-v2 page-section">
        <div className="wrap">
          <div className="services-cta__inner">
            <div className="services-cta__content">
              <span className="eyebrow eyebrow--cyan">Our Services</span>
              <h1 className="hero__title">
                <span className="line"><span>Specialized</span></span><br/>
                <span className="line"><span className="u-cyan">Content</span></span><br/>
                <span className="line"><span>Production.</span></span>
              </h1>
              <p className="hero__sub">Bring a production-ready crew to any brief — product, brand, corporate, real estate or event. One system, any shoot, on demand.</p>
              <div className="services-cta__buttons">
                <Link href="/book" className="btn btn--primary btn--lg">Book a Shoot &rarr;</Link>
                <Link href="#niche-section" className="btn btn--ghost btn--lg">Explore Services</Link>
              </div>
              <div className="services-cta__stats">
                <div>
                  <strong>1500+</strong>
                  <span>PROJECTS COMPLETED</span>
                </div>
                <div>
                  <strong>15+</strong>
                  <span>SPECIALIZED VERTICALS</span>
                </div>
                <div>
                  <strong>48hr</strong>
                  <span>DELIVERY PROMISE</span>
                </div>
              </div>
            </div>
            <div className="services-cta__image reveal d1">
              <Image src="/images/ind_camera_rig.jpg" alt="Cinema camera rig on set" fill priority sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="services-intro page-section wrap">
        <div className="head head--center">
          <h2 className="h-section reveal">What exactly is <span className="u-cyan">CAAS</span>?</h2>
        </div>
        <div className="services-intro__text-wrap reveal d1">
          <p className="services-intro__text">
            CAAS (<span className="u-cyan">Cameraman as a Service</span>) gives businesses, creators and agencies access to production-ready crews whenever content needs to happen.
          </p>
          <p className="services-intro__subtext">
            Instead of finding a cameraman on social media, references and trusting new profiles, you simply schedule a production that actually solves your purpose.
          </p>
        </div>
      </section>

      {/* 3. COMPARISON SECTION */}
      <section className="services-comparison page-section wrap">
        <div className="comp-container">
          
          {/* TOP CARDS */}
          <div className="comp-cards">
            
            {/* TRADITIONAL */}
            <div className="comp-card comp-card--trad reveal-left">
              <div className="comp-badge comp-badge--black">Traditional Process</div>
              
              <div className="comp-trad-path">
                <svg viewBox="0 0 100 400" preserveAspectRatio="none">
                  <path d="M 50 0 C 90 40, 20 80, 50 120 C 80 160, 20 200, 50 240 C 90 280, 20 320, 50 360 C 80 380, 60 400, 60 400" fill="none" stroke="#ccc" strokeWidth="2" strokeDasharray="6,6" />
                </svg>
              </div>

              <ul className="comp-list comp-list--trad">
                <li><span className="comp-x">✕</span> Ask friends</li>
                <li><span className="comp-x">✕</span> Search Instagram</li>
                <li><span className="comp-x">✕</span> Wait for replies</li>
                <li><span className="comp-x">✕</span> Compare prices</li>
                <li><span className="comp-x">✕</span> Hope they arrive</li>
                <li><span className="comp-x">✕</span> Explain everything again</li>
                <li><span className="comp-x">✕</span> Worry about equipment</li>
                <li><span className="comp-x">✕</span> Repeat next month</li>
              </ul>
              
              <div className="comp-trad-note">
                <div className="comp-trad-note-arrow">
                  <svg viewBox="0 0 40 40" fill="none"><path d="M40,40 Q10,30 5,10" stroke="#f03e3e" strokeWidth="1.5"/><polygon points="5,10 10,12 2,18" fill="#f03e3e"/></svg>
                </div>
                <div className="comp-trad-note-text">
                  Time Consuming<br/>Unreliable<br/>Stressful
                </div>
                <div className="comp-trad-note-underline">
                   <svg viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0,5 Q50,0 100,5" stroke="#f03e3e" strokeWidth="2" fill="none"/></svg>
                </div>
              </div>
            </div>

            {/* VS BADGE */}
            <div className="comp-vs reveal">VS</div>

            {/* CAAS */}
            <div className="comp-card comp-card--caas reveal-right">
              <div className="comp-badge comp-badge--cyan">With CAAS</div>
              
              <div className="comp-timeline-line"></div>
              
              <ul className="comp-list comp-list--caas">
                <li>
                  <div className="comp-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
                  <div className="comp-step-text">Book</div>
                  <div className="comp-step-num">01</div>
                </li>
                <li>
                  <div className="comp-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div>
                  <div className="comp-step-text">Confirm</div>
                  <div className="comp-step-num">02</div>
                </li>
                <li>
                  <div className="comp-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg></div>
                  <div className="comp-step-text">Shoot</div>
                  <div className="comp-step-num">03</div>
                </li>
                <li>
                  <div className="comp-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></div>
                  <div className="comp-step-text">Receive Files</div>
                  <div className="comp-step-num">04</div>
                </li>
                <li>
                  <div className="comp-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9 12l2 2 4-4"></path></svg></div>
                  <div className="comp-step-text">Done.</div>
                  <div className="comp-step-num">05</div>
                </li>
              </ul>
              
              <div className="comp-slogan">
                <span>Simple. Reliable. Every Time.</span>
                <svg className="comp-slogan-line" viewBox="0 0 200 10" preserveAspectRatio="none"><path d="M0,5 Q100,0 200,8" stroke="#00C2FF" strokeWidth="3" fill="none"/></svg>
              </div>
            </div>

          </div>

          {/* BOTTOM BANNER */}
          <div className="comp-banner reveal">
            <div className="comp-banner__side comp-banner__side--trad">
              <div className="comp-banner-icon text-red">
                <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              </div>
              <div className="comp-banner-text">
                <strong className="text-red">Unpredictable. Time-Consuming. Stressful.</strong>
                <span>The traditional way costs you more than money.</span>
              </div>
            </div>
            
            <div className="comp-banner__sep"></div>
            
            <div className="comp-banner__side comp-banner__side--caas">
              <div className="comp-banner-icon text-cyan">
                <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="16 10 11 15 8 12"></polyline></svg>
              </div>
              <div className="comp-banner-text">
                <strong className="text-cyan">Predictable. Efficient. Professional.</strong>
                <span>CAAS makes content creation effortless.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. EXPERTISE BENTO GRID */}
      <section className="services-expertise page-section wrap">
        <div className="head head--center">
          <h2 className="h-section reveal">Explore our <span className="u-cyan" style={{ fontStyle: 'italic' }}>Expertise</span>.</h2>
          <p className="head__sub reveal d1">Specialized production units for every industry. Choose your vertical to see how we bring your vision to life.</p>
        </div>

        <div className="expertise-bento">
          {/* Top Row: 2 large cards */}
          <div className="bento-card bento-card--large reveal d1">
            <div className="bento-card__img">
              <Image src="/images/ind_real_estate.jpg" alt="Real Estate" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="bento-card__content">
              <div className="bento-card__header">
                <div className="bento-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div>
                <h3>Real Estate</h3>
              </div>
              <p>Luxury real estate needs a luxury lens. High-dynamic range photography and cinematic walkthroughs that highlight architectural brilliance.</p>
            </div>
          </div>

          <div className="bento-card bento-card--large reveal d2">
            <div className="bento-card__img">
              <Image src="/images/ind_manufacturing.jpg" alt="Manufacturing" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="bento-card__content">
              <div className="bento-card__header">
                <div className="bento-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></div>
                <h3>Manufacturing Set-up</h3>
              </div>
              <p>Industrial environments require specialized lighting and safety compliance. We capture your scale and operations with precision.</p>
            </div>
          </div>

          <div className="expertise-bento__center-btn reveal d3">
            <a href="#niche-section" className="btn btn--cyan">View More Services</a>
          </div>

          {/* Middle Row: 3 small cards */}
          <div className="bento-card bento-card--small reveal d4">
            <div className="bento-card__img">
              <Image src="/images/ind_influencers.jpg" alt="Influencers" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="bento-card__content">
              <div className="bento-card__header">
                <div className="bento-card__icon-small"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
                <h4>Influencers</h4>
              </div>
              <p>Comprehensive coverage for summits, conferences, and launches, capturing key moments and high energy.</p>
              <div className="bento-card__tags">
                <span>VLOG</span><span>VERTICAL</span><span>YOUTUBE</span>
              </div>
              <Link href="/portfolio" className="bento-card__link">View Case Studies &rarr;</Link>
            </div>
          </div>

          <div className="bento-card bento-card--small reveal d5">
            <div className="bento-card__img">
              <Image src="/images/ind_product.jpg" alt="Personal Branding" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="bento-card__content">
              <div className="bento-card__header">
                <div className="bento-card__icon-small"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg></div>
                <h4>Personal Branding</h4>
              </div>
              <p>Professional home studio setups and content production support for the modern digital influencer.</p>
              <div className="bento-card__tags">
                <span>PODCAST</span><span>SOCIAL</span><span>ARTIST</span>
              </div>
              <Link href="/portfolio" className="bento-card__link">View Case Studies &rarr;</Link>
            </div>
          </div>

          <div className="bento-card bento-card--small reveal d6">
            <div className="bento-card__img">
              <Image src="/images/ind_food.jpg" alt="Food & Restaurant" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="bento-card__content">
              <div className="bento-card__header">
                <div className="bento-card__icon-small"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
                <h4>Food & Restaurant</h4>
              </div>
              <p>Reliable white-label production services for creative and marketing agencies worldwide.</p>
              <div className="bento-card__tags">
                <span>INGREDIENT</span><span>AMBIENCE</span><span>REEL</span>
              </div>
              <Link href="/portfolio" className="bento-card__link">View Case Studies &rarr;</Link>
            </div>
          </div>

          {/* Bottom Row: 1 wide card */}
          <div className="bento-card bento-card--wide reveal d7">
            <div className="bento-card__content">
              <div className="bento-card__header">
                <div className="bento-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg></div>
                <h3>Agencies</h3>
              </div>
              <p>Clean, professional visual content for modern enterprises. We handle everything from executive headshots to full-scale corporate brand films.</p>
              <ul className="bento-card__check-list">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Executive Portraits</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Company Culture Films</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Meeting Coverage</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Internal Comms</li>
              </ul>
              <div className="bento-card__ctas">
                <Link href="/contact" className="btn btn--cyan">Book Corporate Shoot</Link>
                <Link href="/portfolio" className="btn btn--outline">View Showcase</Link>
              </div>
            </div>
            <div className="bento-card__img">
              <Image src="/images/home_corporate.jpg" alt="Agencies" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. NICHE DIAGRAM - High Fidelity Infographic */}
      <section id="niche-section" className="niche-section page-section">
        <div className="niche-header reveal">
          <h2>Specialized <span className="text-red">Expertise</span> for<br/>Every Niche.</h2>
        </div>
        
        <div className="niche-diagram">
          <div className="niche-pill-bg"></div>
          
          <div className="niche-timeline">
            {/* ROW 1: Left */}
            <div className="niche-item left reveal-left">
              <div className="niche-card">
                 <div className="niche-icon" style={{color: '#00C2FF'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div>
                 <span>Product Shoot</span>
              </div>
              <div className="niche-connector left"><div className="niche-arrow"></div></div>
            </div>
            
            {/* ROW 2: Right */}
            <div className="niche-item right reveal-right">
              <div className="niche-connector right"><div className="niche-arrow"></div></div>
              <div className="niche-card">
                 <div className="niche-icon" style={{color: '#e74c3c'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></div>
                 <span>Brand Campaigns Shoot</span>
              </div>
            </div>
            
            {/* ROW 3: Left */}
            <div className="niche-item left reveal-left">
              <div className="niche-card">
                 <div className="niche-icon" style={{color: '#9b59b6'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
                 <span>Fashion & Models Shoot</span>
              </div>
              <div className="niche-connector left"><div className="niche-arrow"></div></div>
            </div>

            {/* ROW 4: Right */}
            <div className="niche-item right reveal-right">
              <div className="niche-connector right"><div className="niche-arrow"></div></div>
              <div className="niche-card">
                 <div className="niche-icon" style={{color: '#2ecc71'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></div>
                 <span>Events & Experiences Shoot</span>
              </div>
            </div>

            {/* ROW 5: Left */}
            <div className="niche-item left reveal-left">
              <div className="niche-card">
                 <div className="niche-icon" style={{color: '#3498db'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg></div>
                 <span>Interviews & Podcasts Shoot</span>
              </div>
              <div className="niche-connector left"><div className="niche-arrow"></div></div>
            </div>

            {/* ROW 6: Right */}
            <div className="niche-item right reveal-right">
              <div className="niche-connector right"><div className="niche-arrow"></div></div>
              <div className="niche-card">
                 <div className="niche-icon" style={{color: '#e67e22'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6l3 3-3 3"></path><path d="M21 9H3"></path><path d="M6 18l-3-3 3-3"></path><path d="M3 15h18"></path></svg></div>
                 <span>Fitness & Sports Shoot</span>
              </div>
            </div>

            {/* ROW 7: Left */}
            <div className="niche-item left reveal-left">
              <div className="niche-card">
                 <div className="niche-icon" style={{color: '#e67e22'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
                 <span>Travel & Hospitality Shoot</span>
              </div>
              <div className="niche-connector left"><div className="niche-arrow"></div></div>
            </div>

            {/* ROW 8: Right */}
            <div className="niche-item right reveal-right">
              <div className="niche-connector right"><div className="niche-arrow"></div></div>
              <div className="niche-card">
                 <div className="niche-icon" style={{color: '#2980b9'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></div>
                 <span>Corporate Shoot</span>
              </div>
            </div>

            {/* ROW 9: Left (Cyan special card) */}
            <div className="niche-item left reveal-left">
              <Link href="/contact" className="niche-card niche-card--cyan">
                 <div className="niche-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div>
                 <span>Don't Look Confused,<br/><i>Reach Out to us Directly</i></span>
              </Link>
              <div className="niche-connector left"><div className="niche-arrow"></div></div>
            </div>

            {/* ROW 10: Right */}
            <div className="niche-item right reveal-right">
              <div className="niche-connector right"><div className="niche-arrow"></div></div>
              <div className="niche-card">
                 <div className="niche-icon" style={{color: '#8e44ad'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
                 <span>Office Party & MEET UPS</span>
              </div>
            </div>
            
          </div>

          <div className="niche-pill-text reveal">
            It all Starts with Shoot<br/>
            &<br/>
            <span className="text-cyan">Ends with Planning for Next</span>
          </div>
        </div> {/* closes niche-diagram */}
      
      {/* Footer text for Niche Section */}
      <div className="wrap" style={{ marginTop: '16px' }}>
        <div className="niche-footer-text reveal">
          <span style={{ color: 'var(--muted)', fontSize: '0.65em', display: 'block', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'var(--mono)', fontWeight: 700, marginBottom: '4px' }}>Trusted by the NCR's most</span>
          <span style={{ color: 'var(--ink)' }}>ambitious brands.</span>
        </div>
      </div>
      </section>

      {/* 6. SOCIAL PROOF / STATS */}
      <section className="services-social-proof">
        <div className="social-proof-block reveal">
          <div className="wrap">
            <Stagger className="social-proof__stats" gap={0.1}>
              <StaggerItem className="stat-item" dir="up">
                <div className="stat-num">12+</div>
                <div className="stat-label">VERTICALS</div>
              </StaggerItem>
              <StaggerItem className="stat-item" dir="up">
                <div className="stat-num">98%</div>
                <div className="stat-label">CLIENT NPS</div>
              </StaggerItem>
              <StaggerItem className="stat-item" dir="up">
                <div className="stat-num">50k+</div>
                <div className="stat-label">CONTENT UNITS</div>
              </StaggerItem>
              <StaggerItem className="stat-item" dir="up">
                <div className="stat-num">24/7</div>
                <div className="stat-label">GLOBAL REACH</div>
              </StaggerItem>
            </Stagger>

            <Stagger className="social-proof__testimonials" gap={0.15}>
              <StaggerItem className="testimonial-card" dir="up">
                <div className="testimonial-stars">★★★★★</div>
                <p>"CAAS completely transformed how we handle our monthly social content. No more calling freelancers, we just book a slot and the quality is consistently world-class."</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ backgroundColor: '#2b2b2b' }}></div>
                  <div>
                    <strong>Sarah Jenkins</strong>
                    <span>Marketing Director, Lumera</span>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem className="testimonial-card" dir="up">
                <div className="testimonial-stars">★★★★★</div>
                <p>"The turnaround time is what hooked us. Getting high-end drone footage delivered within 48 hours is unheard of in this industry. A total game-changer for our workflow."</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ backgroundColor: '#4a4a4a' }}></div>
                  <div>
                    <strong>Marcus Chen</strong>
                    <span>Founder of Apex Creatives</span>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem className="testimonial-card" dir="up">
                <div className="testimonial-stars">★★★★★</div>
                <p>"The level of professionalism and attention to detail from the CAAS crew is unmatched. They perfectly captured the essence of our corporate culture in just one shoot."</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" style={{ backgroundColor: '#1a5f7a' }}></div>
                  <div>
                    <strong>Priya Sharma</strong>
                    <span>Head of Communications, TechNova</span>
                  </div>
                </div>
              </StaggerItem>
            </Stagger>

            <Stagger className="social-proof__ctas" gap={0.1}>
              <StaggerItem dir="up">
                <Link href="/pricing" className="btn btn--white">Book a Shoot</Link>
              </StaggerItem>
              <StaggerItem dir="up">
                <Link href="/portfolio" className="btn btn--outline-cyan">View Portfolio</Link>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </section>

      {/* 7. FREELANCERS VS CAAS */}
      <section className="services-features page-section wrap">
        <div className="head head--center">
          <h2 className="h-section reveal">What Makes <span className="u-cyan">CAAS</span> Different from <span className="u-red">Freelancers</span></h2>
          <p className="head__sub reveal d1">Freelancers can be great at what they do. But when your shoot depends on availability, equipment, communication and consistency, you need more than one person with a camera.</p>
        </div>

        <div className="features-grid reveal d2">
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
            <div className="feature-content">
              <h4>AVAILABILITY</h4>
              <p>A network of professionals. Not just one person's schedule.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
            <div className="feature-content">
              <h4>ONE POINT OF CONTACT</h4>
              <p>One team. One number. Everything is managed for you.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg></div>
            <div className="feature-content">
              <h4>PRODUCTION-READY</h4>
              <p>The right crew, gear and backup — planned for your shoot.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20v-6M6 20V10M18 20V4"></path></svg></div>
            <div className="feature-content">
              <h4>BUILT AROUND THE SHOOT</h4>
              <p>Every niche has a different need. We adapt to your shoot.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
            <div className="feature-content">
              <h4>CONSISTENCY</h4>
              <p>Standard process for communication, execution and delivery.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg></div>
            <div className="feature-content">
              <h4>QUALITY ASSURED</h4>
              <p>Checked equipment, experienced crew and professional workflow.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></div>
            <div className="feature-content">
              <h4>SCALABILITY</h4>
              <p>One shoot or one hundred. We're built to scale with you.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg></div>
            <div className="feature-content">
              <h4>ORGANISED DELIVERY</h4>
              <p>Files delivered in structured way. On time. Every time.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
            <div className="feature-content">
              <h4>RELIABLE CREW</h4>
              <p>Trained, verified and professional cameraman & crew.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
            <div className="feature-content">
              <h4>SUPPORT BEYOND THE SHOOT</h4>
              <p>We don't disappear after delivery. We're here for the long run.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg></div>
            <div className="feature-content">
              <h4>ALWAYS PREPARED</h4>
              <p>Backup batteries, storage, gear and plan B — always.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>
            <div className="feature-content">
              <h4>TRANSPARENT & FAIR</h4>
              <p>Clear pricing. No hidden charges. What we say is what you pay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7b. SAME PRODUCTION STANDARD */}
      <section className="services-standard page-section wrap">
        <div className="head head--center">
          <span className="eyebrow eyebrow--center">THE CAAS DIFFERENCE</span>
          <h2 className="h-section reveal">Different Shoots.<br/><span className="u-cyan">Same Production Standard.</span></h2>
          <p className="head__sub reveal d1">Whether it's a product shoot in a studio or a 4-camera setup at a corporate summit — the crew, process and quality bar never changes.</p>
        </div>
        <div className="standard-grid reveal d2">
          <div className="standard-card">
            <div className="standard-card__num">01</div>
            <h4>Same Crew Quality</h4>
            <p>Every cameraman on our roster is vetted, trained and briefed before they set foot on your shoot.</p>
          </div>
          <div className="standard-card">
            <div className="standard-card__num">02</div>
            <h4>Same Communication Flow</h4>
            <p>One point of contact. One pre-shoot brief. No information gets lost between you and the crew on the ground.</p>
          </div>
          <div className="standard-card">
            <div className="standard-card__num">03</div>
            <h4>Same Delivery Process</h4>
            <p>Files organised, labelled and handed off on time — every single time. No follow-ups required from your end.</p>
          </div>
          <div className="standard-card">
            <div className="standard-card__num">04</div>
            <h4>Same Equipment Grade</h4>
            <p>Cinema-grade cameras, lenses and lighting — regardless of the shoot size or budget tier you've chosen.</p>
          </div>
        </div>
      </section>

      {/* 7c. PRICING — "premium content shouldn't have premium complexities" */}
      <section className="services-pricing page-section wrap">
        <div className="svc-price">
          <div className="svc-price__copy">
            <span className="eyebrow eyebrow--cyan">Simple pricing</span>
            <h2 className="h-section">Premium content shouldn&rsquo;t have<br/>premium complexities.</h2>
            <p>One transparent rate covers the crew, the kit and the deliverables. Extra hours and add-ons are priced up front — no re-quoting halfway through a shoot.</p>
            <ul className="svc-price__list">
              <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Professional cameraman &amp; crew</li>
              <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Cinema-grade kit &amp; lighting</li>
              <li><svg viewBox="0 0 24 24" fill="none"><path d="m5 13 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>Raw + edited deliverables</li>
            </ul>
          </div>

          <div className="svc-price__card">
            <span className="svc-price__badge">Starting from</span>
            <div className="svc-price__amount">
              <span className="svc-price__cur">&#8377;</span>3,500
            </div>
            <div className="svc-price__rate">Cameraman for a 3-hour session</div>
            <div className="svc-price__extra">
              <b>Need more time?</b>
              <span>&#8377;1000 / extra hour</span>
            </div>
            <Link href="/book" className="btn btn--primary btn--lg svc-price__cta">Book a Shoot &rarr;</Link>
            <p className="svc-price__note">Equipment, travel and production requirements are quoted per project brief.</p>
          </div>
        </div>
      </section>

      {/* 8. WHAT WE DON'T SHOOT */}
      <section className="services-exclusion page-section wrap" id="niche-section">
        <div className="exclusion-card reveal" style={{ padding: 0, background: 'transparent', boxShadow: 'none', border: 'none', display: 'flex', justifyContent: 'center' }}>
          <Image 
            src="/images/ChatGPT_Image_Aug_29,_2026,_07_56_59_PM_upscaled.png" 
            alt="What We Don't Shoot" 
            width={1200} 
            height={600} 
            style={{ width: '100%', height: 'auto', maxWidth: '1200px' }} 
          />
        </div>
      </section>

      {/* 9. GALLERY & QUOTE */}
      <section className="services-gallery dark">
        <div className="wrap">
          <div className="head head--flex">
            <div>
              <span className="eyebrow eyebrow--red">Visually</span>
              <h2 className="h-section reveal">Exceptional work<br/>across Our Paid Collabs.</h2>
            </div>
            <Link href="/portfolio" className="btn-text u-cyan reveal d1">View Full Portfolio &rarr;</Link>
          </div>
        </div>
        
        <div className="gallery-grid reveal d2">
          <div className="gallery-img">
             <Image src="/images/ind_event.jpg" alt="Gallery 1" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="gallery-img">
             <Image src="/images/hero_cinematic.jpg" alt="Gallery 2" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="gallery-img">
             <Image src="/images/ind_cinema.jpg" alt="Gallery 3" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="gallery-img">
             <Image src="/images/ind_drone.jpg" alt="Gallery 4" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>

        <div className="wrap">
          <div className="gallery-quote reveal d3">
            <p>"We didn't build CAAS just to book cameras. We built it to solve the friction of production. In a world that runs on video, quality shouldn't be a gamble."</p>
            <div className="gallery-quote__author">
              <div className="author-logo">SG</div>
              <div>
                <strong>Shaurya Goyal</strong>
                <span>FOUNDER & CEO, CAAS</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 10. FINAL CTA */}
      <section className="svc-cta-final page-section" style={{ backgroundColor: '#0B1A33' }}>
        <div className="svc-cta-final__bg">
          <Image src="/images/Group 11.png" alt="CAAS Photographer" fill style={{ objectFit: 'contain', objectPosition: 'bottom right' }} quality={100} />
          <div className="svc-cta-final__overlay"></div>
        </div>
        <div className="wrap svc-cta-final__wrap">
          <div className="svc-cta-final__content reveal">
            <span className="svc-cta-pill">Contact Sales</span>
            <h2>Ready to elevate your <span className="u-cyan" style={{ color: 'var(--cyan)' }}>brand&rsquo;s</span> visual identity?</h2>
            <p>Whether it&rsquo;s a single product shoot or a global industrial campaign, our dedicated project managers are ready to build your custom production package.</p>
            <div className="svc-cta-final__btns">
              <Link href="/contact" className="btn btn--primary btn--lg" style={{ backgroundColor: 'var(--cyan)', color: 'var(--ink)' }}>Request a Custom Quote</Link>
              <Link href="/contact" className="btn btn--outline btn--lg" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Schedule Consultation</Link>
            </div>
            
            <div style={{ display: 'flex', gap: '40px', marginTop: '48px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '32px' }}>
              <div>
                <div style={{ color: 'var(--cyan)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '4px' }}>₹3500</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>BASE SESSION RATE</div>
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '4px' }}>13+</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>SPECIALIZED INDUSTRIES</div>
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '4px' }}>48hr</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>DELIVERY PROMISE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
