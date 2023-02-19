import "./SideBar.css";

const SideBar = (props) => {
	return (
		<div className="sideBarContainer">
			<div className="cross" onClick={() => props.getFun()}>
				✕
			</div>
			<div className="navContent">
				<a href=".">Home</a>

				<a href=".">About</a>

				<a href=".">Project</a>

				<div className="services">
					<a href=".">Services</a>

					<li>Building Services</li>

					<li>Fire System</li>

					<li>Fabricated System</li>
				</div>
				<a href=".">Blog</a>

				<a href=".">Contact</a>

				<a href=".">Home</a>
			</div>
		</div>
	);
};

export default SideBar;
