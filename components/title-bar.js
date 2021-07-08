export default function TitleBar(props) {
    return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-base font-semibold text-cyan-600 uppercase tracking-wide">{ props.subheading }</h1>
        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          { props.title }
        </p>
        <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">
          { props.description }
        </p>
      </div>
    </div>
    )
};
