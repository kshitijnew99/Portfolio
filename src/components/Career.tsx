import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Certifications
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science Engineering</h4>
                <h5>Indian Institute of Information Technology, Nagpur</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              Expected graduation in 2027.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class XII (CBSE) - 84.6%</h4>
                <h5>Kendriya Vidyalaya, Aliganj, Lucknow</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed higher secondary education.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Google Cloud & Kaggle</h5>
              </div>
              <h3>Gen AI</h3>
            </div>
            <p>
              Gen AI Academy 2.0 (DevOps Track) — Google Cloud.
              5-Day AI Agents Intensive — Kaggle × Google.
              Foundational Level in Programming and Data Science — IIT Madras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
