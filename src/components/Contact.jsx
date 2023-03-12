import "./style/Contact.css";

const Contact = () => {
	return (
		<div className="contact">
			<div className="contact_us">
				<h2 className="color">| Connect With Us</h2>
				<div className="contact_us_">
					<h3 className="color">Enquiry</h3>
					<div className="contact_us_sub">
						<p>📨 enquiry@urbansciencemep.com</p>
						<p> 📱 0509418224</p>
					</div>
				</div>
				<div className="contact_us_">
					<h3 className="color">Procurement Team</h3>
					<div className="contact_us_sub">
						<p>📨 urbansciencemep@gmail.com</p>
						<p> 📱 +971 543565450</p>
					</div>
				</div>
				<div className="contact_us_">
					<h3 className="color">General Enquiry</h3>
					<div className="contact_us_sub">
						<p>📨 enquiry@urbansciencemep.com</p>
						<p> 📱 0509418224</p>
					</div>
				</div>
			</div>
			<form className="contact_form">
				<div className="form_item">
					<label htmlFor="Name">Name</label>
					<input className="input" type="text" />
				</div>
				<div className="form_item">
					<label htmlFor="Email">Email</label>
					<input className="input" type="email" />
				</div>
				<div className="form_item">
					<label htmlFor="Country">Country</label>
					<select className="input">
						<option value="INDIA">INDIA</option>
						<option value="UAE">UAE</option>
						<option value="ETC">ETC</option>
					</select>
				</div>
				<div className="form_item">
					<label htmlFor="Contact number">Contact number</label>
					<input className="input" type="text" />
				</div>
				<div className="form_item">
					<label htmlFor="Expected date">Expected date</label>
					<input className="input" type="date" />
				</div>
				<div className="form_item">
					<label htmlFor="Expected date">Expected date</label>
					<textarea
						className="input"
						name=""
						id=""
						cols="30"
						rows="10"></textarea>
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default Contact;
