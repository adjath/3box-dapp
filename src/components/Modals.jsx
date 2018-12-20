import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as routes from '../utils/routes';
import Status from '../assets/Status.png';
import getCoinbaseWallet from '../assets/getCoinbaseWallet.svg';
import ThreeBoxLogoWhite from '../assets/ThreeBoxLogoWhite.svg';
import ThreeBoxLogoBlue from '../assets/ThreeBoxLogoBlue.svg';
import GithubIcon from '../assets/GithubIcon.svg';
import TrustWallet from '../assets/TrustWallet.png';
import Consent from '../assets/Consent.png';
import Access from '../assets/Access.png';
import Switched from '../assets/Switched.svg';
import OnBoardingModalGraphic from '../assets/OnBoardingModal.png';
import OnBoardingModalGraphic2 from '../assets/OnBoardingModal2.png';
import OnBoardingModalMobileGraphic1 from '../assets/OnBoardingModalMobile1.png';
import OnBoardingModalMobileGraphic2 from '../assets/OnBoardingModalMobile2.png';
import OnBoardingModalMobileGraphic3 from '../assets/OnBoardingModalMobile3.png';
import ErrorIcon from '../assets/ErrorIcon.svg';
import MetaMaskWallet from '../assets/MetaMaskWallet.png';
import LogOut from '../assets/LogOut.svg';
import Loading from '../assets/Loading.svg';
import './styles/Modal.css';

export const SwitchedNetworksModal = ({
  prevNetwork, currentNetwork, handleSwitchedNetworkModal, show,
}) => (
    <div>
      <div className={`${show ? 'showModal' : ''} modal__container modal--effect`}>
        <div className="modal">
          <img src={Switched} alt="Partners background" id="modal__switchedNetworks" />

          <div>
            <h3>
              Network Change Detected
            </h3>
            <p>
              Your profile will stay the same, but your Ethereum activity will update
            </p>
            <p id="modal__switchBack">
              <b>
                {`Switch back to ${prevNetwork} in MetaMask or continue on ${currentNetwork}`}
              </b>
            </p>
          </div>

          <button onClick={() => { handleSwitchedNetworkModal(); window.localStorage.setItem('shouldShowSwitchNetwork', true); }} type="button">
            {`Continue on ${currentNetwork}`}
          </button>

        </div>
      </div>
      <div className="modal__overlay" />
    </div>
  );

export const LoggedOutModal = ({
  handleLoggedOutModal, handleSignOut, show, isMobile,
}) => (
    <div>
      <div className={`${show ? 'showModal' : ''} modal__container modal--effect`}>
        <div className="modal">
          <img src={LogOut} alt="Partners background" id="modal__switchedNetworks" />

          <div>
            <h3>
              Logged out
             </h3>
            {isMobile
              ? <p>Sign back in to your web3 wallet or exit 3Box</p>
              : <p>Sign back in to your MetaMask wallet or exit 3Box</p>
            }
          </div>

          <Link to={routes.LANDING}>
            <button onClick={() => { handleLoggedOutModal(); handleSignOut(); }} type="button">Exit</button>
          </Link>
        </div>
      </div>
      <div className="modal__overlay" />
    </div>
  );

export const SwitchedAddressModal = ({
  handleSwitchedAddressModal, show, handleSignOut, isMobile, prevAddress,
}) => (
    <div>
      <div className={`${show ? 'showModal' : ''} modal__container modal--effect`}>
        <div className="modal">
          <img src={Switched} alt="Partners background" id="modal__switchedNetworks" />

          <div>
            <h3>
              Address change detected
            </h3>
            {isMobile
              ? (
                <p>
                  {`Revert to the previous address ${prevAddress} in your web3 wallet or sign back in with the new address`}
                </p>
              )
              : (
                <p>
                  {`Revert to the previous address ${prevAddress} in your MetaMask wallet or sign back in with the new address`}
                </p>
              )
            }
          </div>

          <Link to={routes.LANDING}>
            <button onClick={() => { handleSwitchedAddressModal(); handleSignOut(); }} type="button">Sign in with new address</button>
          </Link>
        </div>
      </div>
      <div className="modal__overlay" />
    </div>
  );

// Landing Page Modals
export const ProvideConsentModal = ({
  handleConsentModal, show, isMobile,
}) => (
    <div>
      <div className={`${show ? 'showModal' : ''} modal__container modal--effect`}>
        <div className="modal">
          <img src={Consent} alt="Partners background" />
          <img src={Loading} alt="Loading" id="modal__loadingGraphic--access" />

          {/* <div className="sa-folding-box">
            <div className="sa-box_1 sa-box"></div>
            <div className="sa-box_2 sa-box"></div>
            <div className="sa-box_4 sa-box"></div>
            <div className="sa-box_3 sa-box"></div>
          </div> */}

          <div id="modal__copy__card">
            <h3>Log in to 3Box</h3>
            {isMobile
              ? <p>Approve the message in your web3 wallet to continue</p>
              : <p>Approve the message in your MetaMask wallet to continue</p>
            }
          </div>

          <button onClick={handleConsentModal} type="button" className="tertiaryButton">Close</button>
        </div>
      </div>
      <div className="modal__overlay" />
    </div>
  );

export const ProvideAccessModal = ({
  handleAccessModal, show, isMobile, directLogin,
}) => (
    <div>
      <div className={`${show ? 'showModal' : ''} modal__container modal--effect`}>
        <div className="modal">
          <img src={Access} alt="Partners background" />
          <img src={Loading} alt="Loading" id="modal__loadingGraphic--access" />

          <div id="modal__copy__card">
            <h3>Share Your Account</h3>
            {isMobile
              ? <p>To allow 3Box to read your Ethereum address, make sure you are logged in to your Web3 wallet.</p>
              : <p>To allow 3Box to read your Ethereum address, make sure you are logged in to MetaMask.</p>
            }
          </div>

          {!directLogin
            && <button onClick={handleAccessModal} type="button" className="tertiaryButton">Close</button>}
        </div>
      </div>
      <div className="modal__overlay" />
    </div>
  );

export const GithubVerificationModal = ({
  show,
  copyToClipBoard,
  handleGithubVerificationModal,
  did,
  message,
  verifyGithub,
  githubVerified,
  githubVerifiedFailed,
  verificationLoading,
  resetVerification,
}) => (
    <div>
      <div className={`${show ? 'showModal' : ''} modal__container modal--effect`}>
        <div className="modal githubModal">

          <div className="modal__github__description">
            <div className="modal__github__description__copy">
              <div className="modal__github__description__copy__header">
                <img src={GithubIcon} className="modal__github__description__githubIcon" alt="Github icon" />
                <h2>Verify your Github account</h2>
              </div>
              <p className="modal__github__description__copy__text">
                Linking your Github account to your 3Box profile
                allows your friends and apps to trust you more.
              </p>
            </div>
            <button
              className="modal__github__description__copy__button"
              type="button"
              onClick={() => {
                handleGithubVerificationModal();
                resetVerification();
              }}
            >
              Close
          </button>
          </div>

          <div className="modal__github__steps">
            <div className="modal__github__steps__step">
              <div>
                <div className="modal__github__steps__number">1</div>
                <p className="modal__github__steps__text">
                  Copy your unique key below.
                </p>
                <p className="modal__github__description__copy__input" id="muportDID">{did}</p>
              </div>
              <button type="button" onClick={() => copyToClipBoard(message)}>Click to copy</button>
            </div>

            <div className="modal__github__steps__step">
              <div>
                <div className="modal__github__steps__number">2</div>
                <p className="modal__github__steps__text">Open a new gist file in Github and paste the key in the body of the file.  Save the gist as public with any valid name and file type.</p>
              </div>
              {/* <img src={GithubIcon} className="modal__github__description__githubIcon" alt="Github icon" /> */}
              <button type="button" onClick={() => window.open('https://gist.github.com/', '_blank')}>Open a gist file</button>
            </div>

            <div className="modal__github__steps__step">
              <div>
                <div className="modal__github__steps__number">3</div>
                <p className="modal__github__steps__text">
                  Your verified Github account will appear below when successful!
                </p>
                <p className="modal__github__description__copy__input--github">
                  {githubVerified
                    ? 'Your github is verified!'
                    : githubVerifiedFailed
                      ? 'Verification failed'
                      : verificationLoading
                        ? (
                          <img src={Loading} alt="Loading" id="modal__loadingGraphic--noMargin" />
                        )
                        : 'Github not yet verified'}
                </p>
              </div>
              <button
                type="button"
                onClick={verifyGithub}
              >
                Check verification
            </button>
            </div>
          </div>

          <div className="modal__github__done">
            <button
              type="button"

              onClick={() => {
                handleGithubVerificationModal();
                resetVerification();
              }}
            >
              Done
          </button>
          </div>
        </div>
      </div>
      <div className="modal__overlay" />
    </div >
  );

export const AccessDeniedModal = ({
  handleDeniedAccessModal, show, isMobile,
}) => (
    <div>
      <div className={`${show ? 'showModal' : ''} modal__container modal--effect`}>
        <div className="modal">
          <img src={Access} alt="Partners background" />

          <div id="modal__copy__card">
            <h3>Access Denied to 3Box</h3>
            {isMobile
              ? <p>3Box cannot proceed without access to the address associated to your account</p>
              : <p>3Box cannot proceed without access to the address associated to your account</p>
            }
          </div>

          <button onClick={handleDeniedAccessModal} type="button" className="tertiaryButton">Close</button>
        </div>
      </div>
      <div className="modal__overlay" />
    </div>
  );

export const LoadingThreeBoxProfileModal = ({ show }) => (
  <div>
    <div className={`${show ? 'showModal' : ''} modal__container modal--effect`}>
      <div className="modal">
        <img src={Loading} alt="Loading" id="modal__loadingGraphic" />

        <div>
          <div id="logo" className="modal__loading3Box">
            <img src={ThreeBoxLogoBlue} alt="3Box Logo" />
          </div>
          <p>LOADING</p>
        </div>

      </div>
    </div>
    <div className="modal__overlay" />
  </div>
);

export const FileSizeModal = ({ show, closeFileSizeModal }) => (
  <div>
    <div className={`${show ? 'showModal' : ''} modal__container modal--effect`}>
      <div className="modal">

        <div>
          <p>Profile pictures must be less than 2.5 MB</p>
        </div>

        <button onClick={closeFileSizeModal} type="button" className="tertiaryButton">Close</button>
      </div>
    </div>
    <div className="modal__overlay" />
  </div>
);

export const RequireMetaMaskModal = ({ closeRequireMetaMaskModal, show, isMobile }) => (
  <div className="mobileInvisible">
    <div className={`${show ? 'showModal' : ''} modal__container modal--effect`}>
      <div className="modal">
        <img src={MetaMaskWallet} alt="Partners background" />

        <div id="modal__copy__card">
          <h3>
            Install Web3 Wallet
          </h3>
          {isMobile
            ? <p>You must have a web3 wallet to use 3Box</p>
            : <p>You must have MetaMask to use 3Box</p>
          }
        </div>

        <button onClick={closeRequireMetaMaskModal} type="button" className="tertiaryButton">Close</button>
      </div>
    </div>
    <div className="modal__overlay" />
  </div>
);

export const SignInToWalletModal = ({ handleRequireWalletLoginModal, show, isMobile }) => (
  <div>
    <div className={`${show ? 'showModal' : ''} modal__container modal--effect`}>
      <div className="modal">
        <img src={MetaMaskWallet} alt="Partners background" />

        <div id="modal__copy__card">
          <h3>
            Unlock Your Wallet
          </h3>
          {isMobile
            ? <p>Unlock your web3 wallet to continue</p>
            : <p>Unlock your MetaMask wallet to continue</p>
          }
        </div>
        <button onClick={handleRequireWalletLoginModal} type="button" className="tertiaryButton">Close</button>
      </div>
    </div>
    <div className="modal__overlay" />
  </div>
);

export const ErrorModal = ({ closeErrorModal, errorMessage, show }) => (
  <div>
    <div className={`${show ? 'showModal' : ''} modal__container modal--effect`}>
      <div className="modal">
        {
          (errorMessage && errorMessage.message.substring(0, 65) === 'Error: MetaMask Message Signature: User denied message signature.')
            || (errorMessage && errorMessage.message.substring(0, 26) === 'value/</<@moz-extension://')
            ? <img src={Consent} alt="Consent required" />
            : <img src={ErrorIcon} alt="Error" id="modal__switchedNetworks" />
        }
        <div
          id={(errorMessage && errorMessage.message.substring(0, 65) === 'Error: MetaMask Message Signature: User denied message signature.')
            || (errorMessage && errorMessage.message.substring(0, 58) === 'Error: MetaMask Message Signature: from field is required.')
            || (errorMessage && errorMessage.message.substring(0, 26) === 'value/</<@moz-extension://')
            ? 'modal__copy__card' : ''}
        >
          {
            (errorMessage && errorMessage.message.substring(0, 65) === 'Error: MetaMask Message Signature: User denied message signature.')
              || ((errorMessage && errorMessage.message.substring(0, 26) === 'value/</<@moz-extension://'))
              ? <h3>Log in to 3Box</h3>
              : <h3>Error</h3>
          }
          {
            (errorMessage && errorMessage.message.substring(0, 65) === 'Error: MetaMask Message Signature: User denied message signature.')
              || ((errorMessage && errorMessage.message.substring(0, 26) === 'value/</<@moz-extension://'))
              ? <p>You must provide consent to 3Box in your web3 wallet (e.g. MetaMask) to sign in or create a profile, please try again</p>
              : <p>{errorMessage && errorMessage.message.substring(0, 200)}</p>
          }
        </div>
        <button onClick={closeErrorModal} type="button" className="tertiaryButton">Close</button>
      </div>
    </div>
    <div className="modal__overlay" />
  </div>
);

export const MustConsentModal = ({ closeErrorModal, show, isMobile }) => (
  <div>
    <div className={`${show ? 'showModal' : ''} modal__container modal--effect`}>
      <div className="modal">
        <img src={Consent} alt="Consent required" />
        <div id="modal__copy__card">
          <h3>Sign in to 3Box</h3>
          {isMobile
            ? <p>You must provide consent to 3Box in your web3 wallet to sign in or create a profile, please try again</p>
            : <p>You must provide consent to 3Box in MetaMask to sign in or create a profile, please try again</p>
          }
        </div>
        <button onClick={closeErrorModal} type="button" className="tertiaryButton">Close</button>
      </div>
    </div>
    <div className="modal__overlay" />
  </div>
);

export const SignInToThreeBox = ({ handleSignInModal, show }) => (
  <div>
    <div className={`${show ? 'showModal' : ''} modal__container modal--effect`}>
      <div className="modal">
        <div id="logo" className="modal__loading3Box">
          <img src={ThreeBoxLogoBlue} alt="3Box Logo" />
        </div>

        <div id="modal__copy__card">
          <h3>
            Sign in
          </h3>
          <p>You must be signed in to 3Box to go to that page</p>
        </div>

        <button onClick={handleSignInModal} type="button" className="tertiaryButton">Close</button>
      </div>
    </div>
    <div className="modal__overlay" />
  </div>
);

export const MobileWalletRequiredModal = ({ isIOS, handleMobileWalletModal, show }) => (
  <div id="mobile__landing__prompt" className={`${show ? 'showMobileModal' : 'hideMobileModal'}`}>
    <div id="mobile__landing__prompt__logo">
      <img src={ThreeBoxLogoWhite} alt="3Box Logo" />
    </div>

    <div id="mobile__landing__prompt__text">
      <p>3box requires a mobile dApp browser in order to work</p>
      <br />
      <p>Download Coinbase Wallet or Status.im then revisit this site in the mobile dApp browser to continue</p>
    </div>

    <div id="mobile__landing__prompt__buttons">
      <a href={isIOS ? 'https://itunes.apple.com/app/coinbase-wallet/id1278383455?ls=1&mt=8' : 'https://play.google.com/store/apps/details?id=org.toshi'}>
        <img src={getCoinbaseWallet} alt="Get Coinbase wallet" />
      </a>

      {!isIOS
        ? (
          <a href="https://play.google.com/store/apps/details?id=im.status.ethereum&hl=en_US">
            <img src={Status} alt="Get Status wallet" />
          </a>)

        : (
          <a href="https://itunes.apple.com/us/app/trust-ethereum-wallet/id1288339409?mt=8">
            <img src={TrustWallet} alt="Get TrustWallet" />
          </a>)}
    </div>

    <button onClick={() => handleMobileWalletModal()} type="button" className="tertiaryButton mobile__landing__closeButton">X</button>
  </div>
);

export const OnBoardingModalDesktop = ({ handleOnboardingModal, showOne, showTwo, isMobile }) => (
  <div>
    <div className={`${(showOne || showTwo) && !isMobile ? 'showModal' : ''} modal__onBoardingModal__container modal--effect`}>
      <div className={`${showOne ? 'showModalImage' : ''} modal__onBoardingModal`}>
        <img src={OnBoardingModalGraphic} alt="Partners background" id="modal__onBoardingModal__image" />
        <button onClick={() => handleOnboardingModal(false)} type="button" id="modal__onBoardingModal__button">Get started</button>
        <div id="modal__onBoardingModal__progressBar">
          <div id="modal__onBoardingModal__progressBar__progress--highlight" />
          <div id="modal__onBoardingModal__progressBar__progress--dull" />
        </div>
      </div>

      <div className={`${showTwo ? 'showModalImage' : ''} modal__onBoardingModal`}>
        <img src={OnBoardingModalGraphic2} alt="Partners background" id="modal__onBoardingModal__image" />
        <button onClick={handleOnboardingModal} type="button" id="modal__onBoardingModal__button">Let's go</button>
        <div id="modal__onBoardingModal__progressBar">
          <div id="modal__onBoardingModal__progressBar__progress--dull" />
          <div id="modal__onBoardingModal__progressBar__progress--highlight" />
        </div>
      </div>
    </div>
    <div className="modal__overlay" />
  </div>
);

export const OnBoardingModalMobile = ({
  isMobile,
  handleNextMobileModal,
  showOne,
  showTwo,
  showThree,
  showFour,
  handleOnboardingModal,
}) => (
    <div>
      <div className={`${((showOne || showTwo || showThree || showFour) && isMobile) ? 'showModal' : ''} modal__onBoardingModal__container modal--effect`}>

        <div className={`${showOne ? 'showModalImage' : ''} modal__onBoardingModal`}>
          <img src={OnBoardingModalGraphic} alt="Partners background" className={`${showOne ? 'fadeImage' : ''} modal__onBoardingModal__image`} />
          <button onClick={() => { handleNextMobileModal(undefined, 'One'); handleOnboardingModal(isMobile); }} type="button" id="modal__onBoardingModal__button">Get started</button>
          <div id="modal__onBoardingModal__progressBar">
            <div id="modal__onBoardingModal__progressBar__progress--highlight" />
            <div id="modal__onBoardingModal__progressBar__progress--dull" />
            <div id="modal__onBoardingModal__progressBar__progress--dull" />
            <div id="modal__onBoardingModal__progressBar__progress--dull" />
          </div>
        </div>

        <div className={`${showTwo ? 'showModalImage' : ''} modal__onBoardingModal`}>
          <img src={OnBoardingModalMobileGraphic1} alt="Partners background" className={`${showTwo ? 'fadeImage' : ''} modal__onBoardingModal__image`} />
          <button onClick={() => handleNextMobileModal('One', 'Two')} type="button" id="modal__onBoardingModal__button">Next</button>
          <div id="modal__onBoardingModal__progressBar">
            <div id="modal__onBoardingModal__progressBar__progress--dull" />
            <div id="modal__onBoardingModal__progressBar__progress--highlight" />
            <div id="modal__onBoardingModal__progressBar__progress--dull" />
            <div id="modal__onBoardingModal__progressBar__progress--dull" />
          </div>
        </div>

        <div className={`${showThree ? 'showModalImage' : ''} modal__onBoardingModal`}>
          <img src={OnBoardingModalMobileGraphic2} alt="Partners background" className={`${showThree ? 'fadeImage' : ''} modal__onBoardingModal__image`} />
          <button onClick={() => handleNextMobileModal('Two', 'Three')} type="button" id="modal__onBoardingModal__button">Next</button>
          <div id="modal__onBoardingModal__progressBar">
            <div id="modal__onBoardingModal__progressBar__progress--dull" />
            <div id="modal__onBoardingModal__progressBar__progress--dull" />
            <div id="modal__onBoardingModal__progressBar__progress--highlight" />
            <div id="modal__onBoardingModal__progressBar__progress--dull" />
          </div>
        </div>

        <div className={`${showFour ? 'showModalImage' : ''} modal__onBoardingModal`}>
          <img src={OnBoardingModalMobileGraphic3} alt="Partners background" className={`${showFour ? 'fadeImage' : ''} modal__onBoardingModal__image`} />
          <button onClick={() => handleNextMobileModal('Three', undefined)} type="button" id="modal__onBoardingModal__button">Let's go</button>
          <div id="modal__onBoardingModal__progressBar">
            <div id="modal__onBoardingModal__progressBar__progress--dull" />
            <div id="modal__onBoardingModal__progressBar__progress--dull" />
            <div id="modal__onBoardingModal__progressBar__progress--dull" />
            <div id="modal__onBoardingModal__progressBar__progress--highlight" />
          </div>
        </div>

      </div>
      <div className="modal__overlay" />
    </div>
  );

SwitchedNetworksModal.propTypes = {
  prevNetwork: PropTypes.string.isRequired,
  currentNetwork: PropTypes.string.isRequired,
  handleSwitchedNetworkModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

LoggedOutModal.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  handleLoggedOutModal: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

SwitchedAddressModal.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  handleSwitchedAddressModal: PropTypes.func.isRequired,
  handleSignOut: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

ProvideConsentModal.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  handleConsentModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

ProvideAccessModal.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  handleAccessModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  directLogin: PropTypes.bool,
};

ProvideAccessModal.defaultProps = {
  directLogin: false,
};

GithubVerificationModal.propTypes = {
  did: PropTypes.string,
  show: PropTypes.bool.isRequired,
  copyToClipBoard: PropTypes.func.isRequired,
  handleGithubVerificationModal: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  verifyGithub: PropTypes.func.isRequired,
  githubVerified: PropTypes.bool.isRequired,
  githubVerifiedFailed: PropTypes.bool.isRequired,
  verificationLoading: PropTypes.bool.isRequired,
};

GithubVerificationModal.defaultProps = {
  did: '',
};

AccessDeniedModal.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  handleDeniedAccessModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

LoadingThreeBoxProfileModal.propTypes = {
  show: PropTypes.bool.isRequired,
};

FileSizeModal.propTypes = {
  closeFileSizeModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

RequireMetaMaskModal.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  closeRequireMetaMaskModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

SignInToWalletModal.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  handleRequireWalletLoginModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

ErrorModal.propTypes = {
  errorMessage: PropTypes.string,
  closeErrorModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

ErrorModal.defaultProps = {
  errorMessage: '',
};

MustConsentModal.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  closeErrorModal: PropTypes.func.isRequired,
  show: PropTypes.string.isRequired,
};

SignInToThreeBox.propTypes = {
  handleSignInModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

MobileWalletRequiredModal.propTypes = {
  isIOS: PropTypes.bool.isRequired,
  handleMobileWalletModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

OnBoardingModalDesktop.propTypes = {
  handleOnboardingModal: PropTypes.func.isRequired,
  showOne: PropTypes.bool.isRequired,
  showTwo: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

OnBoardingModalMobile.propTypes = {
  handleNextMobileModal: PropTypes.func.isRequired,
  handleOnboardingModal: PropTypes.func.isRequired,
  showOne: PropTypes.bool.isRequired,
  showTwo: PropTypes.bool.isRequired,
  showThree: PropTypes.bool.isRequired,
  showFour: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
};
