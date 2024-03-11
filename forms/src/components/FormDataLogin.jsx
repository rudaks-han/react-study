export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    // const email = formData.get("email");
    const genderData = formData.getAll("gender");
    const termsData = formData.getAll("terms");
    const data = Object.fromEntries(formData.entries());
    data.gender = genderData;
    data.terms = termsData;
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <div className="control">
        <label>Email</label>
        <input type="email" name="email" />
      </div>
      <div className="control">
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <div className="control">
        <label>Gender</label>
        <select name="gender">
          <option value="male">Male</option>
          <option value="femail">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="control">
        <label>Quantity</label>
        <input type="radio" name="quantity" value="1" /> 1
        <input type="radio" name="quantity" value="2" /> 2
        <input type="radio" name="quantity" value="3" /> 3
      </div>
      <div className="control" name="terms">
        <label>Terms</label>
        <input type="checkbox" name="terms" value="Y" />
        <span>I agree to the Terms and Conditions</span>
      </div>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
