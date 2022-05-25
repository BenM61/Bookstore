import ItemList from "./ItemList";

const Shop = (props) => {
    const { currPageNum, setCurrPageNum } = props
    return (
        <div className="shop page">
            <ItemList currPageNum={currPageNum} setCurrPageNum={setCurrPageNum} />
        </div>
    );
}

export default Shop;