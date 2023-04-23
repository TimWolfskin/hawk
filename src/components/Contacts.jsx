import React from "react";

const Contacts = () => {
  return (
    <div className="contacts-wrapper">
      <div className="contacts-content">
        <h4 className="title">ENJOY THE RIDE</h4>
        <p className="contacts-text">
          Whether it's a Cornish beach, a mountain slope in the Alps or a street
          spot in London - we feel your passion. We've got your weekday commutes
          and weekend escapes covered. We'll get you kitted out with the best
          action sports gear whether you are doing a road trip searching for the
          perfect wave, freeriding in the backcountry, learning new tricks at
          the snowdome or shredding your local skatepark. We are doing our best
          to protect our favourite places and get involved in protecting the
          environment. We are the natural shopping destination for you to get
          out there and enjoy the ride.
        </p>
      </div>
      <form className="form" action="#">
        <input
          className="form-input"
          type="email"
          placeholder="your email address"
        />
        <button className="form-btn">Join the ride</button>
      </form>
    </div>
  );
};

export default Contacts;
