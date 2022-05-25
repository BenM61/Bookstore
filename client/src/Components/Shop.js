import ItemList from "./ItemList";

const Shop = (props) => {
    const { currPageNum, setCurrPageNum, bad } = props
    return (
        <div className="shop page">
            {!bad && <ItemList currPageNum={currPageNum} setCurrPageNum={setCurrPageNum} />}
            {bad && <div className="oops">oops</div>}
        </div>
    );
}

export default Shop;