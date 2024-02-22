import "./Header1.scss";
import { Link } from "react-router-dom";
// import logo from './../../assets/img/logo.png';
// import offer from './../../assets/img/discount.jpeg';
// import makemytrip from '../../../Assets/MakemytripLogo.svg';
// import bag from './../../assets/img/bag.png';
import { BiChevronDown } from 'react-icons/bi';
import BasicModal from "./Demo";
// import { useSelector } from 'react-redux';

const Header1 = () => {
  // const { auth, userData } = useSelector(state => state.user.user);

  // const macbookIphone = require('../../../Assets/MakemytripLogo.svg');

  return (
    <section className="header1-wrapper">
      <div className="header1">
        <Link className="logo" to={"/"}>
          <img
            src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
            alt="logo-mmt"
          />
        </Link>
        <div className="right-sec">
          <div className="offer">
            {/* <img
              src="https://github.com/GitsOfVivek/MakeMyTrip-Clone/blob/main/client/src/assets/img/discount.jpeg?raw=true"
              alt="offer"
            /> */}
            <div className="text">
              <span>Super Offers</span>
              <span>Explore great deals & offers</span>
            </div>
          </div>
          <div className="myBiz">
            {/* <img
              src="https://imgak.mmtcdn.com/mybiz/assets/images/landing/myBizLogo_light.png"
              alt="myBiz"
            /> */}
            <div className="text">
              <span>Introducing myBiz</span>
              <span>Buisness Travel Solution</span>
            </div>
          </div>
          <div className="myTrip">
            {/* <img
              src="https://github.com/GitsOfVivek/MakeMyTrip-Clone/blob/main/client/src/assets/img/bag.png?raw=true"
              alt="myTrip"
            /> */}
            <div className="text">
              <span>My Trips</span>
              <span>Manage your bookings</span>
            </div>
          </div>
          {/* <Link className="login" to={auth ? '/profile' : '/login'}>
						{auth ? (
							<span className="user-name">
								{userData?.displayName?.split(' ')?.[0]}
							</span>
						) : (
							<>
								<img
									src='https://raw.githubusercontent.com/GitsOfVivek/MakeMyTrip-Clone/b862e8a1c392c93ab828bd47fc8b73e1aaf7e7f0/client/src/assets/img/makemytrip.svg'
									className="cropped-img"
									alt="myTrip"
								/>{' '}
								<span>Login or Create Account</span>
								<BiChevronDown className="down-arrow" />
							</>
						)}
					</Link> */}
          <div className="login">
            {/* <img
              src="https://raw.githubusercontent.com/GitsOfVivek/MakeMyTrip-Clone/b862e8a1c392c93ab828bd47fc8b73e1aaf7e7f0/client/src/assets/img/makemytrip.svg"
              className="cropped-img"
              alt="myTrip"
            />{" "} */}
            {/* <span>Login or Create Account</span> */}
            <BasicModal />
            <BiChevronDown className="down-arrow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header1;
