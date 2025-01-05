import SpotlightCard from "./SpotlightCard";

const GradientLine = () => (
  <div className="flex flex-row">
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
    <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
  </div>
);

const StatusIndicators = ({ colors = ['bg-red-400', 'bg-orange-400', 'bg-green-200'] }) => (
  <div className="mr-auto flex flex-row space-x-2">
    {colors.map((color, index) => (
      <div key={index} className={`h-3 w-3 rounded-full ${color}`}></div>
    ))}
  </div>
);

const CodeBlock = ({ data }) => (
  <code className="font-mono text-xs md:text-sm lg:text-base">
    <div className="blink">
      <span className="mr-2 text-pink-500">const</span>
      <span className="mr-2 text-white">{data.variableName || 'data'}</span>
      <span className="mr-2 text-pink-500">=</span>
      <span className="text-gray-400">{'{'}</span>
    </div>
    {Object.entries(data.properties).map(([key, value]) => (
      <div key={key} className='ml-4 lg:ml-8' >
        <span className=" mr-2 text-white">{key}:</span>
        {Array.isArray(value) ? (
          <>
            <span className="text-gray-400">[</span>
            {value.map((item, index) => (
              <span key={index} className="text-amber-300">
                {`'${item}'`}
                {index < value.length - 1 ? ', ' : ''}
              </span>
            ))}
            <span className="text-gray-400">],</span>
          </>
        ) : (
          <>
            <span className={` ${key === 'name' ? "text-amber-400" : key === 'myRole' ? "text-orange-400" : typeof value === 'boolean' ? 'text-orange-400' : key === "description" ? "text-cyan-400" : 'text-amber-400'}`}>
              {typeof value === 'string' ? `'${value}'` : value.toString()}
            </span>
            <span className="text-gray-400">,</span>
          </>
        )}
      </div>
    ))}
    {data.function && (
      <>
        <div>
          <span className="ml-4 lg:ml-8 mr-2 text-green-400">{data.function.name}:</span>
          <span className="text-orange-400">function</span>
          <span className="text-gray-400">{'() {'}</span>
        </div>
        {data.function.body}
        <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
      </>
    )}
    <div><span className="text-gray-400">{`};`}</span></div>
  </code>
);

const Card = ({ title, data, statusColors, className }) => {
  return (
    <div className={`m-auto max-w-2xl lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border-2 bg-gradient-to-r to-[#0a0d37] ${className}`}>
      <GradientLine />

      <SpotlightCard bgColor="bg-gradient-to-r from-[#0d1224] to-[#0a0d37] " spotlightColor="rgba(255, 255, 255, 0.25)">
      <div className="flex  flex-row-reverse items-center justify-center px-4 lg:px-8 py-5">
        {title && <h2 className="text-xl mr-auto text-white">{title}</h2>}
        <StatusIndicators colors={statusColors} />
      </div>
      
        <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
          <CodeBlock data={data} />
        </div>
      </SpotlightCard>

    </div>
  );
};

export default Card;
