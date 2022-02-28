import classes from './pokemonCard.module.css';
import backEndImage from '../../assets/card__backside.jpg';
import { useState } from 'react';
import cn from 'classnames';


const PokemonCard = ({ name, type, img, id, values }) => {

    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(true);
    };

    return (
        <div className={classes.root} onClick={handleClick}>
            <div className={cn(classes.pokemonCard, { [classes.active]: isActive })}>
                <div className={classes.cardFont}>
                    <div className={cn(classes.wrap, classes.front)}>
                        <div className={cn(classes.pokemon, classes[type])}>
                            <div className={classes.value}>
                                <div className={cn(classes.count, classes.top)}>{values.top}</div>
                                <div className={cn(classes.count, classes.right)}>{values.right}</div>
                                <div className={cn(classes.count, classes.bottom)}>{values.bottom}</div>
                                <div className={cn(classes.count, classes.left)}>{values.left}</div>
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
                    <div className={cn(classes.wrap, classes.back)}>
                        <img src={backEndImage} alt="card Backend" />
                    </div>
                </div>

            </div>
        </div>
    )
};

export default PokemonCard;