export default function TitleBar({ subheading, title, description }) {
    return (
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-base font-semibold text-blue-600 uppercase tracking-wide">
                    {subheading}
                </h1>
                <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                    {title}
                </p>
                {description ? (
                    <p className="max-w-5xl mx-auto mt-5 text-xl text-gray-500">
                        {description}
                    </p>
                ) : null}
            </div>
        </div>
    );
}
