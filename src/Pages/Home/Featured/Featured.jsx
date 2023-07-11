import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        heading={"featured item"}
        subHeading={"check it out"}
      ></SectionTitle>
      <div className="md:flex justify-center bg-slate-700 bg-opacity-70 pb-12 py-8 px-36 items-center">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20 ,2029</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            ex in exercitationem voluptas officia ipsam pariatur sapiente
            molestias architecto tempore accusamus vero quis quibusdam iusto,
            eius omnis repellendus ipsum id, dolorum numquam cum. In cupiditate
            similique necessitatibus vitae architecto dolor est voluptatem,
            nulla minima quae voluptatum nam quos natus! Corrupti.
          </p>
          <button className="btn btn-outline mt-4 border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
