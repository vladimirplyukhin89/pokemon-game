import classes from './pokemonCard.module.css';
import backEndImage from '../../assets/card__backside.jpg';
import { useState } from 'react';


const PokemonCard = ({ name, type, img, id, values }) => {

    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(true);
    };

    return (
        <div className={classes.root} onClick={handleClick}>
            <div className={`${classes.pokemonCard} ${isActive ? classes.active : ''}`}>
                <div className={classes.cardFont}>
                    <div className={`${classes.wrap} ${classes.front}`}>
                        <div className={`${classes.pokemon} ${classes[type]}`}>
                            <div className={classes.value}>
                                <div className={`${classes.count} ${classes.top}`}>{values.top}</div>
                                <div className={`${classes.count} ${classes.right}`}>{values.right}</div>
                                <div className={`${classes.count} ${classes.bottom}`}>{values.bottom}</div>
                                <div className={`${classes.count} ${classes.left}`}>{values.left}</div>
                            </div>
                            <div className={classes.imgContainer}>
                                <img src={img} alt={name} />
                            </div>
                            <div className={classes.info}>
                                <span className={classes.number}>{`#${id}`}</span>
                                <h3 className={classes.name}>
                                    {name}
                                </h3>
                                <small className={classes.type}>
                                    Type: <span>{type}</span>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={classes.cardBack}>
                    <div className={`${classes.wrap} ${classes.back}`}>
                        <img src={backEndImage} alt="Сard Backend" />
                    </div>
                </div>

            </div>
        </div>
    )
};

export default PokemonCard;