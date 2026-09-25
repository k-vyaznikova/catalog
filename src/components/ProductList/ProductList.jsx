import styles from "./ProductList.module.css";
import ProductCard from "./../ProductCard";


export const ProductList  = (props) =>{
    console.log(props)
    props.products.map((product) => {
        console.log(product.title);
    });

    const list = props.products.map((product) => {
        return (<ProductCard 
            id = {product.id}
            title = {product.title}
            price = {product.price}
            image = {product.image} 
        />);

    });
    return (
        <div className={styles.list}>{list}</div>
    );
}