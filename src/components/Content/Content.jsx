import "../Navbar/NavBar.css";

const Content = (props) => {
	console.log(props);
	return (
		<div className="projectBox">
			<img src={props.img} alt="" />
			<h5>{props.name}</h5>
		</div>
	);
};

export default Content;
