import "./Landing.css";

const Landing = () => {
	return (
		<div className="landingPage">
			<div className="landing">
				<h1>rewards for paying credit card bills.</h1>
				<p>join 9M+ members who win rewards and cashbacks everyday</p>
				<button>Download CRED</button>
			</div>
			<div className="landingMobile">
				<div className="mobile">
					<img className="img1" src="images/mobile1.webp" alt="" />
					<img className="img2" src="images/mobile2.webp" alt="" />
					<img className="img3" src="images/mobile3.webp" alt="" />
					<img className="img4" src="images/mobile4.webp" alt="" />
					<img className="img5" src="images/mobile5.webp" alt="" />
				</div>
			</div>
			<section className="pinklanding">
				<div className="info">
					<h1>feel special more often.</h1>
					<p className="bp">
						exclusive rewards for paying your bills
					</p>
					<p className="pinkdetails">
						every time you pay your credit card bills on CRED, you
						receive CRED coins. you can use these to win exclusive
						rewards or get special access to curated products and
						experiences. on CRED, good begets good.
					</p>
					<button>Explore Reward</button>
				</div>
			</section>
			<section className="brand">
				<div className="brandContainer">
					<h5>rewards from brands you love</h5>
					<img src="images/brand.png" alt="" />
				</div>
			</section>
			<div className="blueSection">
				<div className="blueSectionDiv">
					<div className="heading">
						we take your money matters seriously.
					</div>
					<div className="subheading button">
						so that you don’t have to.
					</div>
					<div className="details">
						never miss a due date with reminders to help you pay
						your bills on time, instant settlements mean you never
						wait for your payments to go through and statement
						analysis lets you know where your money goes, always.
					</div>
					<button className="button">Exprience the upgrade</button>
				</div>
			</div>
			<div className="blueDogSection">
				<div className="blueDogSectionDiv">
					<div className="heading">security first. and second.</div>
					<div className="subheading button">
						what’s yours remains only yours.
					</div>
					<div className="details">
						CRED ensures that all your personal data and
						transactions are encrypted, and secured so what’s yours
						remains only yours. there’s no room for mistakes because
						we didn’t leave any.
					</div>
					<button className="button">Become a Member</button>
				</div>
			</div>
			<div className="greenSection">
				<div className="green1heading">
					<p>the story of CRED begins with trust.</p>
				</div>
				<div className="green2heading">
					<p>
						trust as a virtue has consistently played an essential
						role in every great human achievement. and consistently,
						its importance has been overlooked. not just by
						individuals, but by entire societies. we felt it was
						time someone gave it the spotlight it deserves.
						especially for the ones who live by this virtue: the
						trustworthy.
					</p>
					<p>
						so we thought of creating a system that rewards its
						members for doing good and being trustworthy. this way,
						trust as a virtue becomes something to aspire to, just
						the way it should be. then we went one step ahead: we
						built it. we know we are on the right track because here
						you are.
					</p>
					<p>
						if you make it to CRED, congratulations and welcome. we
						have a lot of things planned for you.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Landing;
