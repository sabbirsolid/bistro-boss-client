

const MenuItem = ({item}) => {
    const {price,image,recipe,name} = item;
    return (
        <div className="flex gap-4 space-x-3">
            <img className="w-[100px]" style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h1 className="uppercase font-3xl">{name}--------</h1>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600">{price}$</p>
        </div>
    );
};

export default MenuItem;