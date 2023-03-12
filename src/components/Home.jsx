import "./style/Home.css";

const Home = () => {
	return (
		<div className="home">
			<div className="home_detail">
				<p className="home_detail_heading">
					Leading MEP & Facility management company in Dubai
				</p>
				<p className="home_detail_subheading">
					Urban Science is always ready to accept your challenges
					Meeting your goals is our main objective. Professional
					services for facility management & MEP works.
				</p>
				<div className="navigation">
					<button className="profile">Company Profile</button>
					<button className="video">Watch Video</button>
				</div>
			</div>
			<div className="home_img">
				<img src="images/homeImg.png" alt="" />
			</div>
		</div>
	);
};

export default Home;
