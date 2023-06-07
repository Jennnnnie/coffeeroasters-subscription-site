import "./about.css";
import manMakingCoffee from "../../../assets/images/man-making-coffee.png";
import holdingCoffee from "../../../assets/images/holding-coffee.png";
import holdingCoffeeT from "../../../assets/images/holding-coffee-tablet.png";
import unitedKingdom from "../../../assets/svgs/united-kingdom.svg";
import canada from "../../../assets/svgs/canada.svg";
import australia from "../../../assets/svgs/australia.svg";

const About = () => {
  return (
    <div className="about-us">
      <section className="a-section-one">
        <h1>About Us</h1>
        <p>
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </section>
      <section className="a-section-two">
        <div>
          <img src={manMakingCoffee} alt="man-making-coffee" />
        </div>
        <div className="commitment">
          <h1>Our commitment</h1>
          <p>
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </section>
      <section className="a-section-three">
        <div className="quality">
          <h1>Uncompromising quality</h1>
          <p>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
        <div className="img">
          <img
            src={holdingCoffee}
            alt="holding-coffee"
            className="holding-coffee-desktop"
          />
          <img
            src={holdingCoffeeT}
            alt="holding-coffee"
            className="holding-coffee-tablet"
          />
        </div>
      </section>
      <section className="a-section-four">
        <div>
          <h4>Our headquarters</h4>
        </div>
        <div className="head-quarters">
          <div>
            <img src={unitedKingdom} alt="united-kingdom" />
            <h3>United Kingdom</h3>
            <p>
              68 Asfordby Rd <br />
              Alcaston <br />
              SY6 1YA <br />
              +44 1241 918425
            </p>
          </div>
          <div>
            <img src={canada} alt="canada" />
            <h3>Canada</h3>
            <p>
              1528 Eglinton Avenue <br />
              Toronto <br />
              Ontario M4P 1A6 <br />
              +1 416 485 2997
            </p>
          </div>
          <div>
            <img src={australia} alt="australia" />
            <h3>Australia</h3>
            <p>
              36 Swanston Street <br />
              Kewell <br />
              Victoria <br />
              +61 4 9928 3629
            </p>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default About;
