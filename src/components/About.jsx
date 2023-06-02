import aboutImg from '../assets/amir-hosseini-8SqJMKk-8ak-unsplash.jpg';

const About = () => {
  return (
    <section className="container mx-auto mt-24">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col items-center ">
          <h2 className="font-primary text-3xl font-medium pb-14">About me</h2>
          <div className=" max-w-[340px] h-[400px] rounded-[10px] overflow-hidden shadow-lg shadow-textSecondary/50">
            <img
              src={aboutImg}
              alt="me on photo"
              className="w-full h-full object-cover aspect-video"
            />
          </div>
        </div>

        <div className="flex items-center">
          <p className="text-xl font-secondary w-max p-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga nam
            vel perspiciatis sit impedit doloremque provident delectus neque
            odio exercitationem repellendus magnam ipsum id labore, facilis
            dignissimos! Iure, possimus quia.
          </p>
        </div>
      </article>
    </section>
  );
};
export default About;
