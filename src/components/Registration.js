import React, { useState } from "react";

function Registration() {
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    Address1: "",
    Address2: "",
    City: "",
    State: "",
    ZIP: "",
    Country: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleSubmit() {
    // event.preventDefault();
    alert(
      `${this.state.firstName} ${this.state.lastName}  Registered Successfully!`
    );
    console.log("Registered successfully!");
    const newRegistration = {
      firstname: input.firstname,
      lastname: input.lastname,
      Address1: input.Address1,
      Address2: input.Address2,
      City: input.City,
      State: input.State,
      ZIP: input.ZIP,
    };
    return newRegistration;
    // axios.post("http://localhost:3001/Registration", newRegistration);
  }
  return (
    <div className="container">
      <h1>Registration page</h1>
      <form>
        <div className="form-group">
          <input
            value={input.firstname}
            onChange={handleChange}
            placeholder="First Name"
            name="firstname"
            className="form-group"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={input.lastname}
            onChange={handleChange}
            placeholder="Last Name"
            name="lastname"
            className="form-group"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={input.Address1}
            onChange={handleChange}
            placeholder="Address 1"
            name="Address1"
            className="form-group"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={input.Address2}
            onChange={handleChange}
            placeholder="Address 2"
            name="Address2"
            className="form-group"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={input.City}
            onChange={handleChange}
            placeholder="City"
            name="City"
            className="form-group"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={input.State}
            onChange={handleChange}
            placeholder="State"
            name="State"
            className="form-group"
          ></input>
        </div>
        <div className="form-group">
          <input
            value={input.ZIP}
            onChange={handleChange}
            placeholder="ZIP"
            name="ZIP"
            className="form-group"
            maxLength="9"
            minLength="5"
          ></input>
        </div>
        <div className="form-group">
          <div
            className="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="actions"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            value="US"
            name="country"
          >
            US
          </div>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Registration;
