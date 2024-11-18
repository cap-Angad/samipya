import React from 'react';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-left">
        <img src="/images/446935890_1596440774260723_2807957032915483812_n.jpg" alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h2>Swayam Pakhrin</h2>
          <p>Shop's Name: Swayam's Shop</p>
          <p>Location: Delhi Area</p>
          <p>Contact: 982929299</p>
          <p>Email: example@email.com</p>
          <p>Landmarks: Near Metro Station or something idk</p>
          <p>Rating: 4.5/5</p>
        </div>
        <div className="profile-description">
          <h3>Description</h3>
          <p>Cybersecurity Student & Gym Enthusiast with a Dash of Magic

When I’m not diving into the mysteries of cybersecurity or tinkering with Arduino projects, you’ll find me channeling raw energy into the gym. To me, the gym isn’t just a place for lifting weights—it’s a modern-day alchemist's lab. Every rep, every bead of sweat, every moment of grit is a spell cast to transform the ordinary into the extraordinary. It’s where strength is forged, discipline is honed, and a healthy body becomes the foundation for a sharper mind..</p>
        </div>
      </div>
      
      <div className="profile-right">
        <div className="profile-section">
          <h2>Uploaded Photos</h2>
          <div className="uploaded-photos">
            <div className="uploaded-photo-container">
              <img src="/images/download.jpeg" alt="" className="uploaded-photo" />
              <button className="remove-photo">Remove</button>
            </div>
            <div className="uploaded-photo-container">
              <img src="/images/images.jpeg" alt="" className="uploaded-photo" />
              <button className="remove-photo">Remove</button>
            </div>
            <div className="uploaded-photo-container">
              <img src="/images/interior-of-a-modern-gym-with-fitness-equipment-generative-ai-photo.jpg" alt="" className="uploaded-photo" />
              <button className="remove-photo">Remove</button>
            </div>
            <div className="uploaded-photo-container">
              <img src="/images/photo-1534438327276-14e5300c3a48.jpeg" alt="" className="uploaded-photo" />
              <button className="remove-photo">Remove</button>
            </div>
            <div className="uploaded-photo-container">
              <img src="/images/Untitled.jpg" alt="" className="uploaded-photo" />
              <button className="remove-photo">Remove</button>
            </div>
            <div className="uploaded-photo-container">
              <img src="/images/OIP.jpeg" alt="" className="uploaded-photo" />
              <button className="Add-ph">Add</button>
            </div>
          </div>
        </div>
        
        <div className="profile-section">
  <h2>Location on Map</h2>
  <div className="location-map">
  <iframe title="Seller Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6069128108!2d84.42848711090319!3d27.69854167608836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb49a5fb5741%3A0x72b0768dd53f3d4f!2sForbes%20College!5e0!3m2!1sen!2snp!4v1731852896264!5m2!1sen!2snp" 
  width="600"
   height="450" 
   style={{ border: 0 }} 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</div>
        
       
        
        <div className="profile-section">
          <h2>Help</h2>
          <ul>
            <li>FAQs</li>
            <li>Contact Info</li>
            <li>Corporate Information</li>
            <li>Feedback</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile; 