const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white flex justify-center overflow-y-auto"
    >
      <div className="max-w-screen-lg p-4 mc-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="textxl mt-20">
          Hello! I'm Vipul Tapare, hailing from the vibrant town of Hinganghat
          in Maharashtra, India. I am deeply passionate about coding and
          consider it not just a profession but a creative outlet for expressing
          innovative ideas. My journey in the realm of technology has led me to
          specialize in MERN stack development. The MERN stack, comprising
          MongoDB, Express.js, React.js, and Node.js, fascinates me due to its
          versatility and effectiveness in building dynamic web applications.
          With proficiency in each component of the stack, I enjoy crafting
          robust and user-friendly applications that cater to modern demands.
          However, my interests and expertise extend beyond MERN stack
          development. I possess comprehensive knowledge in software testing
          methodologies, ensuring the quality and reliability of the software
          products I develop. Quality assurance is paramount to me, as it
          directly impacts user satisfaction and overall product success.
          Furthermore, I have a keen interest in machine learning, an exciting
          field at the forefront of technological innovation. Delving into
          machine learning algorithms and techniques, I aim to leverage
          data-driven insights to solve complex problems and enhance
          decision-making processes.
        </p>
        <br />
        {/* <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore aut
          at laboriosam reprehenderit explicabo magnam ab, ducimus, tenetur est
          consequuntur corporis voluptatibus aliquam illo! Minus vitae odio
          facilis, voluptatum velit incidunt quos aliquam exercitationem autem
          provident corrupti, magnam ipsa quisquam. Reiciendis hic cumque ex
          excepturi aut aperiam magni labore cupiditate.
        </p> */}
      </div>
    </div>
  );
};

export default About;
