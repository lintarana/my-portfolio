import React from 'react';
import '../styles/HomeStyles.css';

const Home = () => {
  return (
    <section className="home">
      <div className="card with-photo">
        <img src="/images/profile_pic.png" alt="profilepic" style={{ width: '200px' }} />
        <h2>Linta Rana</h2>
        <p>Software Engineer</p>
      </div>

      <div className="card with-sign">
        <img src="/images/signature.png" alt="Signature" style={{ width: '200px' }}/>
        <h2>Credentials</h2>
        <p>Bachellors of Science in Computer Science</p>
        
      </div>


      <div className="card portfolio">
        <img src="/images/portfolio.png" alt="portfolio" style={{ width: '200px' }} />
        <a href="/projects"><h2 style={{color:'white'}}>Portfolio</h2></a>
        
      </div>

      <div className="card services">
        <h2>Services Offered</h2>
        <div className="service-icons">
          <div>
            <img src='/images/webdev.svg' alt="Web Development" />
            <p>Web Development</p>
          </div>
          <div>
            <img src='/images/uiux.png' alt="UI/UX Design" />
            <p>UI/UX Design</p>
          </div>
          <div>
            <img src="/images/consultation.png" alt="Consulting" />
            <p>Consulting</p>
          </div>
          
        </div>
      </div>

      <div className="card with-download">
        <h2>Downloads</h2>
        <a href="/pdf/resume.pdf" download>
          <img src="/images/download.svg" alt="Download" style={{ width: '200px' }} />
        </a>
        
      </div>

      <div></div>

      <div className="card with-icons">
        <h2>Profiles</h2>
        <div className="social-icons" style={{ display:'flex', width:'fit' }}>
          <a href="linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="github.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="GitHub" />
          </a>
          <a href="x.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter.png" alt="Twitter" />
          </a>
  
        </div>
      </div>
    </section>
  );
};

export default Home;
