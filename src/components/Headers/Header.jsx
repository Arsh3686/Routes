import "./Header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="logo">
				<img src="images/cred-logo.webp" width={55} alt="" />
			</div>
			<div className="nav">
				<p>credit score check</p>
				<p>CRED pay </p>
			</div>
		</div>
	);
};

export default Header;
