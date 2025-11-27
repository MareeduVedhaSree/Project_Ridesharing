
// import '../styles/Ridecontactus.css';

// const Ridecontactus = () => {
//   return (
//     <section className="contactus">
//       <div className="form-section">
//         <h1>Contact Us</h1>
//         <p>We'd love to hear from you! Please fill out the form below:</p>

//         <form>
//           <label>Name</label>
//           <input type="text" placeholder="Enter your name" required />

//           <label>Email Address</label>
//           <input type="email" placeholder="Enter your email" required />

//           <label>Mobile Number</label>
//           <input type="tel" placeholder="Enter your mobile number" required />

//           <label>You are a</label>
//           <input type="text" placeholder="Select your role" required />

//           <label>Comment</label>
//           <textarea rows="4" placeholder="Enter your comment" required></textarea>

//           <button type="submit">Submit</button>
//         </form>
//       </div>

//       <div className="info-section">
//         <div className="address-block">
//           <h3>Registered Office</h3>
//           <p>Green Fields, Vaddeswaram, Guntur District, Andhra Pradesh - 522502, India</p>
//         </div>
//         <div className="address-block">
//           <h3>City Office</h3>
//           <p>Green Fields, Vaddeswaram, Guntur District, Andhra Pradesh - 522502, India</p>
//         </div>
//         <div className="address-block">
//           <h3>Corporate Office</h3>
//           <p>Green Fields, Vaddeswaram, Guntur District, Andhra Pradesh - 522502, India</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Ridecontactus;







import '../styles/Ridecontactus.css';

const Ridecontactus = () => {
  return (
    <section className="contactus">
      {/* Image Section - Left Side */}
      <div className="image-section">
        <div className="image-container">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
          <div className="main-image">
            <div className="image-content">
              <h2>Get In Touch</h2>
              <p>We're here to help you with any questions or concerns</p>
              <div className="contact-highlight">
                <span>📧 contact@example.com</span>
                <span>📞 +91 9876543210</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section - Right Side */}
      <div className="content-section">
        <div className="form-section">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Please fill out the form below:</p>

          <form>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Mobile Number</label>
                <input type="tel" placeholder="Enter your mobile number" required />
              </div>
              <div className="form-group">
                <label>You are a</label>
                <select required>
                  <option value="">Select your role</option>
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                  <option value="business">Business Owner</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Comment</label>
              <textarea rows="4" placeholder="Enter your comment" required></textarea>
            </div>

            <button type="submit">
              <span>Submit Message</span>
              <div className="arrow">→</div>
            </button>
          </form>
        </div>

        <div className="info-section">
          <div className="office-cards">
            <div className="office-card">
              <div className="card-icon">🏢</div>
              <h3>Registered Office</h3>
              <p>Green Fields, Vaddeswaram, Guntur District, Andhra Pradesh - 522502, India</p>
            </div>
            <div className="office-card">
              <div className="card-icon">🏙️</div>
              <h3>City Office</h3>
              <p>Green Fields, Vaddeswaram, Guntur District, Andhra Pradesh - 522502, India</p>
            </div>
            <div className="office-card">
              <div className="card-icon">💼</div>
              <h3>Corporate Office</h3>
              <p>Green Fields, Vaddeswaram, Guntur District, Andhra Pradesh - 522502, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ridecontactus;






