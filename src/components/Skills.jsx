import React from 'react';



const Skills = () => {

      const ItemCard = ({ title, items }) => {
        return (
          <div className="card text-xl border p-4 rounded-lg">
            <h3 className="card-header text-2xl mb-4 font-semibold">{title}</h3>
            <ul className="list font-bold">
              {items.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>
        );
      };
      
      

      const ItemList = () => {
        const languages = ['Java', 'Python', 'C#', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'];
        const frameworks = ['React', 'Next.js', 'Node.js', 'ASP.NET', 'Express'];
        const otherTools = ['Docker', 'Postman', 'Azure Cloud', 'AWS', 'Figma', 'MS Power Automate', 'Git'];
      
        return (
          <div className="min-w-[100%] ontainer flex flex-wrap gap-4 justify-center">
            <ItemCard title="Languages" items={languages} />
            <ItemCard title="Frameworks" items={frameworks} />
            <ItemCard title="Other" items={otherTools} />
          </div>
        );
      };

      return (
        <div name='skills' className='pb-40 w-full h-auto bg-[#0a192f] text-gray-300 py-12'>
          {/* Container */}
          <div className='pt-12 max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
            <div className="text-center">
              <p className='text-4xl font-bold'>Skills</p>
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
