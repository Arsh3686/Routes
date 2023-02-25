import "../App.css";

const Card = ({ e }) => {
	return (
		<div className="card">
			<div className="cardDetails">
				<div className="DetailsPart">
					<div className="dpimg">
						<img src={e.img} alt="" />
					</div>
					<div className="detailsPart_data">
						<p className="gap">{e.title}</p>
						<small className="gap ac">
							{e.date},{e.actor}
						</small>
						<div className="btn_genre gap">
							<button>{e.runtime} min</button>
							<p className="gap">{e.genre}</p>
						</div>
					</div>
				</div>
				<div className="descDetailsPart">{e.details}</div>
			</div>
			<div className="img">
				<img src={e.img} alt="" />
			</div>
		</div>
	);
};

export default Card;
