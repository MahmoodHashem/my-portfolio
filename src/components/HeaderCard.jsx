import Card from "./Card";

const HeaderCard = () => {


    const developerData = {
      variableName: 'developer',
      properties: {
        name: 'Mahmoood',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'NextJS', 'Tailwindcss'],
        hardWorker: true,
        quickLearner: true,
        problemSolver: true
      },
      function: {
        name: 'hireable',
        body: (
          <>
            <div>
              <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
              <span className="text-gray-400">(</span>
            </div>
            <div>
              <span className="ml-12 lg:ml-24 text-cyan-400">this.<span className="text-white" >hardWorker</span> <span className="text-amber-400" >&&</span></span>
            </div>
            <div>
              <span className="ml-12 lg:ml-24 text-cyan-400">this.<span className="text-white" >problemSolver</span> <span className="text-amber-400">&&</span> </span>
            </div>
            <div>
              <span className="ml-12 lg:ml-24 text-cyan-400">this.<span className="text-white" >skills.length</span>  {">"}= <span className="text-orange-400" >5</span></span>
            </div>
            <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">);</span></div>
          </>
        )
      }
    };
  
    return (
      <Card 
        title=""
        data={developerData}
        statusColors={['bg-red-400', 'bg-orange-400', 'bg-green-200']}
        className="my-8"
      />
    );
  };
  
  export default HeaderCard;