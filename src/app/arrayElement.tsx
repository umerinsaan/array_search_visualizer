import styles from "./ArrayElement.module.css"
const ArrayElement = (props: any) => {
    return (
        <div className={`${styles.arrayElement} ${props.isCurrent ? styles.currElement : ''}`}>
            {props.value}
        </div >
    );
}

export default ArrayElement;