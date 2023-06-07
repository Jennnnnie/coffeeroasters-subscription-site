import { useState } from "react";
import "./plan.css";
import { Link as AnchorLink } from "react-scroll";
import { Element } from "react-scroll";
import Collapsible from "react-collapsible";

const Plan = () => {
  const [answerOne, setAnswerOne] = useState("");
  const [answerTwo, setAnswerTwo] = useState("");
  const [answerThree, setAnswerThree] = useState("");
  const [answerFour, setAnswerFour] = useState("");
  const [answerFive, setAnswerFive] = useState("");

  //modal
  const [modal, setModal] = useState(false);

  //if setModal is true, disable scrolling
  if (modal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  return (
    <div className="create-your-plan">
      <section className="b-section-one">
        <h1>Create plan</h1>
        <p>
          Build a subscription plan that best fits your needs. We offer an
          assortment of the best artisan coffees from around the globe delivered
          fresh to your door.
        </p>
      </section>
      <section className="b-section-two">
        <div className="c-line-oval">
          <p className="c-oval"></p>
          <p className="c-oval"></p>
          <p className="c-oval"></p>
        </div>
        <div className="creating-intro">
          <div className="creating-intro-item">
            <h1>01</h1>
            <h2>Pick your coffee</h2>
            <p>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div className="creating-intro-item">
            <h1>02</h1>
            <h2>Choose the frequency</h2>
            <p>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div className="creating-intro-item">
            <h1>03</h1>
            <h2>Receive and enjoy!</h2>
            <p>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
      </section>
      <section className="b-section-three">
        <div className="aside-table">
          <div>
            <AnchorLink
              to="preferences"
              activeClass="active"
              spy={true}
              smooth={true}
              //using onClick to toggle the state of the collapsible
              // onClick={handleOpen}
              // onClick={toggle}
            >
              <h3 className="hdy">
                <span className="num">01</span>
                Preferences
              </h3>
              <p></p>
            </AnchorLink>
          </div>
          <div>
            <AnchorLink
              to="bean-type"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              <h3>
                <span className="num">02</span>
                Bean Type
              </h3>
              <p></p>
            </AnchorLink>
          </div>
          <div>
            <AnchorLink
              to="quantity"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              <h3>
                <span className="num">03</span>
                Quantity
              </h3>
              <p></p>
            </AnchorLink>
          </div>
          <div
            style={
              answerOne === " using Capsules"
                ? { pointerEvents: "none", opacity: "0.5" }
                : { pointerEvents: "auto", opacity: "1" }
            }
          >
            <AnchorLink
              to="grind-option"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              <h3>
                <span className="num">04</span>
                Grind Option
              </h3>
              <p></p>
            </AnchorLink>
          </div>
          <div>
            <AnchorLink
              to="deliveries"
              activeClass="active"
              spy={true}
              smooth={true}
            >
              <h3>
                <span className="num">05</span>
                Deliveries
              </h3>
              <p></p>
            </AnchorLink>
          </div>
        </div>
        <div className="create-drop-downs">
          <AnchorLink to="preferences" smooth={true} activeClass="active-drop">
            <Element name="preferences">
              <div className="drop-down-one" id="preferences">
                <Collapsible
                  // open={isOpen}
                  trigger={
                    <h2>
                      How do you drink your coffee?{" "}
                      <span>
                        <svg
                          width="19"
                          height="13"
                          viewBox="0 0 19 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="Path 2"
                            d="M15.9488 0.585785L18.7773 3.41421L9.6816 12.5099L0.585938 3.41421L3.41436 0.585785L9.68115 6.853L15.9488 0.585785Z"
                            fill="currentColor"
                          />
                        </svg>{" "}
                      </span>
                    </h2>
                  }
                  triggerWhenOpen={
                    <h2>
                      How do you drink your coffee?{" "}
                      <span>
                        <svg
                          width="19"
                          height="13"
                          viewBox="0 0 19 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.9488 12.5099L18.7773 9.68145L9.6816 0.585787L0.585938 9.68145L3.41436 12.5099L9.68115 6.24266L15.9488 12.5099Z"
                            fill="currentColor"
                          />
                        </svg>{" "}
                      </span>
                    </h2>
                  }
                >
                  <div className="select-boxes">
                    <div
                      className={
                        answerOne === " using Capsules"
                          ? "select-box-selected"
                          : "select-box"
                      }
                      onClick={() => {
                        setAnswerOne(" using Capsules");
                      }}
                    >
                      <h3>Capsule</h3>
                      <p>
                        Compatible with Nespresso systems and similar brewers
                      </p>
                    </div>
                    <div
                      className={
                        answerOne === " as   Filter"
                          ? "select-box-selected"
                          : "select-box"
                      }
                      onClick={() => {
                        if (answerOne === "Filter") {
                          setAnswerOne(" as   Filter");
                        } else {
                          setAnswerOne(" as   Filter");
                        }
                      }}
                    >
                      <h3>Filter</h3>
                      <p>
                        For pour over or drip methods like Aeropress, Chemex,
                        and V60
                      </p>
                    </div>
                    <div
                      className={
                        answerOne === " as   Espresso"
                          ? "select-box-selected"
                          : "select-box"
                      }
                      onClick={() => {
                        if (answerOne === "Espresso") {
                          setAnswerOne(" as   Espresso");
                        } else {
                          setAnswerOne(" as   Espresso");
                        }
                      }}
                    >
                      <h3>Espresso</h3>
                      <p>
                        Dense and finely ground beans for an intense, flavorful
                        experience
                      </p>
                    </div>
                  </div>
                </Collapsible>
              </div>
            </Element>
          </AnchorLink>
          <AnchorLink to="bean-type" smooth={true}>
            <Element name="bean-type">
              <div className="drop-down-two" id="bean-type">
                <Collapsible
                  trigger={
                    <h2>
                      What type of coffee?{" "}
                      <span>
                        <svg
                          width="19"
                          height="13"
                          viewBox="0 0 19 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="Path 2"
                            d="M15.9488 0.585785L18.7773 3.41421L9.6816 12.5099L0.585938 3.41421L3.41436 0.585785L9.68115 6.853L15.9488 0.585785Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </h2>
                  }
                  triggerWhenOpen={
                    <h2>
                      What type of coffee?{" "}
                      <span>
                        <svg
                          width="19"
                          height="13"
                          viewBox="0 0 19 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.9488 12.5099L18.7773 9.68145L9.6816 0.585787L0.585938 9.68145L3.41436 12.5099L9.68115 6.24266L15.9488 12.5099Z"
                            fill="currentColor"
                          />
                        </svg>{" "}
                      </span>
                    </h2>
                  }
                >
                  <div className="select-boxes">
                    <div
                      className={
                        answerTwo === "Single Origin"
                          ? "select-box-selected"
                          : "select-box"
                      }
                      onClick={() => {
                        if (answerTwo === "Single Origin") {
                          setAnswerTwo("Single Origin");
                        } else {
                          setAnswerTwo("Single Origin");
                        }
                      }}
                    >
                      <h3>Single Origin</h3>
                      <p>
                        Distinct, high quality coffee from a specific
                        family-owned farm
                      </p>
                    </div>
                    <div
                      className={
                        answerTwo === "Decaf"
                          ? "select-box-selected"
                          : "select-box"
                      }
                      onClick={() => {
                        if (answerTwo === "Decaf") {
                          setAnswerTwo("Decaf");
                        } else {
                          setAnswerTwo("Decaf");
                        }
                      }}
                    >
                      <h3>Decaf</h3>
                      <p>
                        Just like regular coffee, except the caffeine has been
                        removed
                      </p>
                    </div>
                    <div
                      className={
                        answerTwo === "Blended"
                          ? "select-box-selected"
                          : "select-box"
                      }
                      onClick={() => {
                        if (answerTwo === "Blended") {
                          setAnswerTwo("Blended");
                        } else {
                          setAnswerTwo("Blended");
                        }
                      }}
                    >
                      <h3>Blended</h3>
                      <p>
                        Combination of two or three dark roasted beans of
                        organic coffees
                      </p>
                    </div>
                  </div>
                </Collapsible>
              </div>
            </Element>
          </AnchorLink>
          <AnchorLink to="quantity" smooth={true}>
            <Element name="quantity">
              <div className="drop-down-three" id="quantity">
                <Collapsible
                  trigger={
                    <h2
                    //set an onclick when hover to change color of the arrow
                    >
                      How much would you like?{" "}
                      <span>
                        {/* <img src={arrowDown} alt="arrow-up" /> */}
                        <svg
                          width="19"
                          height="13"
                          viewBox="0 0 19 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="Path 2"
                            d="M15.9488 0.585785L18.7773 3.41421L9.6816 12.5099L0.585938 3.41421L3.41436 0.585785L9.68115 6.853L15.9488 0.585785Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </h2>
                  }
                  triggerWhenOpen={
                    <h2>
                      How much would you like?{" "}
                      <span>
                        <svg
                          width="19"
                          height="13"
                          viewBox="0 0 19 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.9488 12.5099L18.7773 9.68145L9.6816 0.585787L0.585938 9.68145L3.41436 12.5099L9.68115 6.24266L15.9488 12.5099Z"
                            fill="currentColor"
                          />
                        </svg>{" "}
                      </span>
                    </h2>
                  }
                >
                  <div className="select-boxes">
                    <div
                      className={
                        answerThree === "250g"
                          ? "select-box-selected"
                          : "select-box"
                      }
                      onClick={() => {
                        if (answerThree === "250g") {
                          setAnswerThree("250g");
                        } else {
                          setAnswerThree("250g");
                        }
                      }}
                    >
                      <h3>250g</h3>
                      <p>
                        Perfect for the solo drinker. Yields about 12 delicious
                        cups.
                      </p>
                    </div>
                    <div
                      className={
                        answerThree === "500g"
                          ? "select-box-selected"
                          : "select-box"
                      }
                      onClick={() => {
                        if (answerThree === "500g") {
                          setAnswerThree("500g");
                        } else {
                          setAnswerThree("500g");
                        }
                      }}
                    >
                      <h3>500g</h3>
                      <p>
                        Perfect option for a couple. Yields about 40 delectable
                        cups.
                      </p>
                    </div>
                    <div
                      className={
                        answerThree === "1000g"
                          ? "select-box-selected"
                          : "select-box"
                      }
                      onClick={() => {
                        if (answerThree === "1000g") {
                          setAnswerThree("1000g");
                        } else {
                          setAnswerThree("1000g");
                        }
                      }}
                    >
                      <h3>1000g</h3>
                      <p>
                        Perfect for offices and events. Yields about 90
                        delightful cups.
                      </p>
                    </div>
                  </div>
                </Collapsible>
              </div>
            </Element>
          </AnchorLink>
          <AnchorLink to="grind-option" smooth={true}>
            <Element name="grind-option">
              <div
                className="drop-down-four"
                id="grind-option"
                // give a disabled style to  the div if the user selects capsules
                style={
                  answerOne === " using Capsules"
                    ? { pointerEvents: "none", opacity: "0.5" }
                    : { pointerEvents: "auto", opacity: "1" }
                }

                // className="drop-down-four " id="grind-option"
              >
                <Collapsible
                  trigger={
                    <h2>
                      Want us to grind them?{" "}
                      <span>
                        <svg
                          width="19"
                          height="13"
                          viewBox="0 0 19 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="Path 2"
                            d="M15.9488 0.585785L18.7773 3.41421L9.6816 12.5099L0.585938 3.41421L3.41436 0.585785L9.68115 6.853L15.9488 0.585785Z"
                            fill="currentColor"
                          />
                        </svg>{" "}
                      </span>
                    </h2>
                  }
                  triggerWhenOpen={
                    <h2>
                      Want us to grind them?{" "}
                      <span>
                        <svg
                          width="19"
                          height="13"
                          viewBox="0 0 19 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.9488 12.5099L18.7773 9.68145L9.6816 0.585787L0.585938 9.68145L3.41436 12.5099L9.68115 6.24266L15.9488 12.5099Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </h2>
                  }
                >
                  <div className="select-boxes">
                    <div
                      className={
                        answerFour === "Wholebean"
                          ? "select-box-selected"
                          : "select-box"
                      }
                      onClick={() => {
                        if (answerFour === "Wholebean") {
                          setAnswerFour("Wholebean");
                        } else {
                          setAnswerFour("Wholebean");
                        }
                      }}
                    >
                      <h3>Wholebean</h3>
                      <p>
                        Best choice if you cherish the full sensory experience
                      </p>
                    </div>
                    <div
                      className={
                        answerFour === "Filter"
                          ? "select-box-selected"
                          : "select-box"
                      }
                      onClick={() => {
                        if (answerFour === "Filter") {
                          setAnswerFour("Filter");
                        } else {
                          setAnswerFour("Filter");
                        }
                      }}
                    >
                      <h3>Filter</h3>
                      <p>
                        For drip or pour-over coffee methods such as V60 or
                        Aeropress
                      </p>
                    </div>
                    <div
                      className={
                        answerFour === "Cafetiere"
                          ? "select-box-selected"
                          : "select-box"
                      }
                      onClick={() => {
                        if (answerFour === "Cafetiere") {
                          setAnswerFour("Cafetiere");
                        } else {
                          setAnswerFour("Cafetiere");
                        }
                      }}
                    >
                      <h3>Cafetiére</h3>
                      <p>
                        Course ground beans specially suited for french press
                        coffee
                      </p>
                    </div>
                  </div>
                </Collapsible>
              </div>
            </Element>
          </AnchorLink>
          <AnchorLink to="deliveries" smooth={true}>
            <Element name="deliveries">
              <div className="drop-down-five" id="deliveries">
                <Collapsible
                  trigger={
                    <h2>
                      How often should we deliver?{" "}
                      <span>
                        <svg
                          width="19"
                          height="13"
                          viewBox="0 0 19 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="Path 2"
                            d="M15.9488 0.585785L18.7773 3.41421L9.6816 12.5099L0.585938 3.41421L3.41436 0.585785L9.68115 6.853L15.9488 0.585785Z"
                            fill="currentColor"
                          />
                        </svg>{" "}
                      </span>
                    </h2>
                  }
                  triggerWhenOpen={
                    <h2>
                      How often should we deliver?{" "}
                      <span>
                        <svg
                          width="19"
                          height="13"
                          viewBox="0 0 19 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.9488 12.5099L18.7773 9.68145L9.6816 0.585787L0.585938 9.68145L3.41436 12.5099L9.68115 6.24266L15.9488 12.5099Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </h2>
                  }
                >
                  <div className="select-boxes">
                    <div
                      className={
                        answerFive === "Every week"
                          ? "select-box-selected"
                          : "select-box"
                      }
                      onClick={() => {
                        if (answerFive === "Every week") {
                          setAnswerFive("Every week");
                        } else {
                          setAnswerFive("Every week");
                        }
                      }}
                    >
                      <h3>Every week</h3>
                      <p>
                        $7.20 per shipment. Includes free first-class shipping.
                      </p>
                    </div>
                    <div
                      className={
                        answerFive === "Every 2 weeks"
                          ? "select-box-selected"
                          : "select-box"
                      }
                      onClick={() => {
                        if (answerFive === "Every 2 weeks") {
                          setAnswerFive("Every 2 weeks");
                        } else {
                          setAnswerFive("Every 2 weeks");
                        }
                      }}
                    >
                      <h3>Every 2 weeks</h3>
                      <p>
                        $9.60 per shipment. Includes free priority shipping.
                      </p>
                    </div>
                    <div
                      className={
                        answerFive === "Every month"
                          ? "select-box-selected"
                          : "select-box"
                      }
                      onClick={() => {
                        if (answerFive === "Every month") {
                          setAnswerFive("Every month");
                        } else {
                          setAnswerFive("Every month");
                        }
                      }}
                    >
                      <h3>Every month</h3>
                      <p>
                        $12.00 per shipment. Includes free priority shipping.
                      </p>
                    </div>
                  </div>
                </Collapsible>
              </div>
            </Element>
          </AnchorLink>
          <div className="summary-box-wrapper">
            <div className="summary-box">
              <h5>Order Summary</h5>
              <div>
                <h4>
                  “I drink my coffee <span>{answerOne.substring(1, 6)}</span>
                  <span className="summary-color">
                    {answerOne.replace("using", "").replace("as", "")}{" "}
                  </span>
                  <span className="summary-color-dotted">
                    {!answerOne && "_____"}{" "}
                  </span>
                  , with a <span className="summary-color">{answerTwo}</span>
                  <span className="summary-color-dotted">
                    {!answerTwo && "_____"}{" "}
                  </span>{" "}
                  type of bean.{" "}
                  <span className="summary-color">{answerThree}</span>
                  <span className="summary-color-dotted">
                    {!answerThree && "_____"}{" "}
                  </span>
                  <span
                    style={
                      answerOne === " using Capsules"
                        ? { display: "none" }
                        : { display: "inline" }
                    }
                  >
                    ground ala{" "}
                    <span className="summary-color">{answerFour}</span>
                    <span className="summary-color-dotted">
                      {!answerFour && "_____"}{" "}
                    </span>
                  </span>
                  , sent to me{" "}
                  <span className="summary-color">{answerFive}</span>
                  <span className="summary-color-dotted">
                    {!answerFive && "_____"}{" "}
                  </span>
                  . ”
                </h4>
              </div>
            </div>
          </div>

          <div className="cen-button">
            <button
              className={
                answerOne &&
                answerTwo &&
                answerThree &&
                (answerFour || answerOne === " using Capsules") &&
                answerFive
                  ? "create-my-plan-button"
                  : "create-my-plan-button-disabled"
              }
              onClick={() => {
                if (
                  answerOne &&
                  answerTwo &&
                  answerThree &&
                  (answerFour || answerOne === " using Capsules") &&
                  answerFive
                ) {
                  setModal(true);
                }
              }}
            >
              Create my plan!
            </button>
          </div>
        </div>
      </section>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h1>Order Summary</h1>
            </div>
            <div>
              <h3>
                “I drink my coffee <span>{answerOne.substring(1, 6)}</span>
                <span className="summary-color">
                  {answerOne.replace("using", "").replace("as", "")}{" "}
                </span>
                <span className="summary-color-dotted">
                  {!answerOne && "_____"}{" "}
                </span>
                , with a <span className="summary-color">{answerTwo}</span>
                <span className="summary-color-dotted">
                  {!answerTwo && "_____"}{" "}
                </span>{" "}
                type of bean.{" "}
                <span className="summary-color">{answerThree}</span>
                <span className="summary-color-dotted">
                  {!answerThree && "_____"}{" "}
                </span>
                <span
                  style={
                    answerOne === " using Capsules"
                      ? { display: "none" }
                      : { display: "inline" }
                  }
                >
                  ground ala <span className="summary-color">{answerFour}</span>
                  <span className="summary-color-dotted">
                    {!answerFour && "_____"}{" "}
                  </span>
                </span>
                , sent to me <span className="summary-color">{answerFive}</span>
                <span className="summary-color-dotted">
                  {!answerFive && "_____"}{" "}
                </span>
                . ”
              </h3>
            </div>
            <p>
              Is this correct? You can proceed to checkout or go back to plan
              selection if something is off. Subscription discount codes can
              also be redeemed at the checkout.
            </p>
            <div className="modal-bottom">
              <h2>$14.00/ mo</h2>
              <button
                onClick={() => {
                  setModal(false);
                }}
                className="modal-button-one"
              >
                Checkout
              </button>
              <button
                onClick={() => {
                  setModal(false);
                }}
                className="modal-button-two"
              >
                Checkout - $14.00 / mo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Plan;
