import './card.css';

const Card = (props) => {
    return <div className='cardRoot'>
        {props.children}
    </div>
};

export default Card;