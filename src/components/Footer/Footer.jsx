import "./Footer.css";

const Footer = ({ data }) => {
	return (
		<div className="footers">
			<h4 className="footerTitle">{data.title}</h4>
			{data.content.map((e, index) => {
				return (
					<p key={index} className="footerContent">
						{e}
					</p>
				);
			})}
			<div className="footerimg">
				<img width={55} src={data.img} alt="" />
			</div>
		</div>
	);
};

export default Footer;
