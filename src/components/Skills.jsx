import React from 'react';



const Skills = () => {

    const ItemCard = ({ title, items }) => {
        return (
          <div className="card text-xl">
            <h3 className="card-header">{title}</h3>
            <ul className="list font-bold">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        );
      };
      
      

      const ItemList = () => {
        const languages = ['Java', 'Python', 'C#', 'JavaScript', 'SQL', 'C', 'C++', 'HTML/CSS'];
        const frameworks = ['React', 'Node.js', 'ASP.NET', 'Express'];
        const otherTools = ['Docker', 'Postman', 'Apache Spark', 'Azure Cloud', 'Git'];
      
        return (
          <div className="container">
            <ItemCard title="Languages" items={languages} />
            <ItemCard title="Frameworks" items={frameworks} />
            <ItemCard title="Other" items={otherTools} />
          </div>
        );
      };

  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              {/*<p className='py-4'>// These are the technologies I've worked with</p>*/}
              <p className='py-4'></p>
          </div>
        

        <div>
        <ItemList />
        </div>

      </div>
    </div>
  );
};

export default Skills;
