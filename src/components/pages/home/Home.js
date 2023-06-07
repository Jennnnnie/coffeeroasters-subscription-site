import { Link } from "react-router-dom";
import "./home.css";
import kopiOne from "../../../assets/images/kopi-one.png";
import kopiTwo from "../../../assets/images/kopi-two.png";
import kopiThree from "../../../assets/images/kopi-three.png";
import kopiFour from "../../../assets/images/kopi-four.png";
import coffeeBean from "../../../assets/svgs/coffee-bean.svg";
import gift from "../../../assets/svgs/gift.svg";
import delivery from "../../../assets/svgs/delivery.svg";

const Home = () => {
  return (
    <div className="home">
      <section className="section-one">
        <h1>Great coffee made simple.</h1>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Link to="/plan">
          <button>Create your plan</button>
        </Link>
      </section>
      <section className="section-two">
        <div className="our-c">
          <h1>our collection</h1>
        </div>
        <div className="kopis">
          <div className="kopi-one">
            <img src={kopiOne} alt="kopi-one" />
            <div>
              <h3>Gran Espresso</h3>
              <p>
                Light and flavorful blend with cocoa and black pepper for an
                intense experience
              </p>
            </div>
          </div>
          <div className="kopi-two">
            <img src={kopiTwo} alt="kopi-two" />
            <div>
              <h3>Planalto</h3>
              <p>
                Brazilian dark roast with rich and velvety body, and hints of
                fruits and nuts
              </p>
            </div>
          </div>
          <div className="kopi-three">
            <img src={kopiThree} alt="kopi-three" />
            <div>
              <h3>Piccollo</h3>
              <p>
                Mild and smooth blend featuring notes of toasted almond and
                dried cherry
              </p>
            </div>
          </div>
          <div className="kopi-four">
            <img src={kopiFour} alt="kopi-four" />
            <div>
              <h3>Danche</h3>
              <p>
                Ethiopian hand-harvested blend densely packed with vibrant fruit
                notes
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-three">
        <div className="why-box">
          <h2>Why choose us?</h2>
          <p>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="reason">
          <div className="reason__item">
            <img src={coffeeBean} alt="coffee-bean" />
            <div>
              <h3>Best quality</h3>
              <p>
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </div>
          <div className="reason__item">
            <img src={gift} alt="gift" />
            <div>
              <h3>Exclusive benefits</h3>
              <p>
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
          </div>
          <div className="reason__item">
            <img src={delivery} alt="delivery" />
            <div>
              <h3>Free shipping</h3>
              <p>
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-four">
        <div className="howol">
          <h3>How it works</h3>
          <div className="line-o">
            <p className="oval"></p>
            <p className="oval"></p>
            <p className="oval"></p>
          </div>
        </div>
        <div className="how-box">
          <div className="how-box-item">
            <h1>01</h1>
            <h3>Pick your coffee</h3>
            <p>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div className="how-box-item">
            <h1>02</h1>
            <h3>Choose the frequency</h3>
            <p>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div className="how-box-item">
            <h1>03</h1>
            <h3>Receive and enjoy!</h3>
            <p>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
        <div className="cyp">
          <Link to="/plan">
            <button>Create your plan</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
