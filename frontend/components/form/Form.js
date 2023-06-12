// TODO: add nodemailer


const Form = () => {
    return (
      <div>
        <form>
          <div>
            {/* include to report the date of submission <input type="hidden" /> */}
            <div>
              <h3>Contact Us!</h3>
              <p>
                If you have any questions or would like to inquire about booking
                our properties, we're here to assist you. Simply
                fill out the form, and our team will get
                back to you promptly. We strive to make your
                booking experience seamless and look forward to helping you find
                the perfect property for your needs. Get in touch with us today!
              </p>
            </div>
            <div>
                <label></label>
                <input type="date" />

                <label></label>
                <input type="date" />
            </div>
          </div>
          <div>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="E-mail"/>
            <input type="tel" placeholder="Phone" />
            {/* <select placeholder="Number of Guests"/> */}
            {/* <select property location/> */}
            <textarea placeholder="Tell us about your event"/>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
};

export default Form;