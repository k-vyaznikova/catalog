import styles from "./ProductCard.module.css";


export const ProductCard  = (props) =>{
    
    return (
        <div className={styles.card} key={props.id}>
            <b><div className={styles.card__title} >{props.title}</div></b>
            <img src = {props.image}/>
            <div className={styles.card__price}>{props.price} руб.</div>
        </div>
    );
}