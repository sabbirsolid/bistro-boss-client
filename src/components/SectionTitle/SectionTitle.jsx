const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-4/12 space-y-2 text-center mx-auto">
            <p className="text-yellow-600">---{subHeading}---</p>
            
            <h1 className="border-t-4 uppercase text-4xl">{heading}</h1>
        </div>
    );
};

export default SectionTitle;