import "../App.css";

const Card = ({ item }) => {
	return (
		<div className="card">
			<div className="cardDetails">
				<div className="DetailsPart">
					<div className="dpimg">
						<img src="images/img11.jpg" alt="" />
					</div>
					<div className="detailsPart_data">
						<p>Bright</p>
						<small>2017,David Ayer</small>
						<div className="btn_genre">
							<button>117 min</button>
							<p>Action ,Crime ,Fantasy</p>
						</div>
					</div>
				</div>
				<div className="descDetailsPart">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Quod saepe asperiores possimus vitae quos similique dolor
					odit quisquam, quibusdam
				</div>
			</div>
			<div className="img">
				<img src="images/img11.jpg" alt="" />
			</div>
		</div>
	);
};

export default Card;
