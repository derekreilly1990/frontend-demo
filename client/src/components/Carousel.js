import React, {useEffect, useState} from "react";
import {Button, Card, Carousel as CarouselCompnent,} from 'react-bootstrap'
import {makeStyles} from "@material-ui/core/styles";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles({
    carouselText: {
        textShadow: '1px 1px black'
    },
    carouselTitle: {
        textShadow: '1px 1px white',
        color:'#343a40'
    },
    icon: {
        color: 'black',
        fontSize: 45
    },
    caption: {
        backgroundColor: 'rgba(0,0,0,0.44)'
    }
});

export const Carousel = ({products= []}) => {
    const classes = useStyles()
    const [recommendedProducts, setRecommendedProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/recommendeds')
            .then((res) => res.json())
            .then((products) => {
                setRecommendedProducts(products);
            });
    }, []);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };



    return (
        <div className={"col-md-12"} style={{backgroundColor: 'transparent'}}>
            <h3 className={classes.carouselTitle}>{"Recommended Products"}</h3>
            <CarouselCompnent fade activeIndex={index} onSelect={handleSelect} prevIcon={<ArrowBackIosIcon className={classes.icon} />} nextIcon={<ArrowForwardIosIcon className={classes.icon} />} >
                {recommendedProducts.map((product, index) => {
                    return (
                            <CarouselCompnent.Item key={product.id}>
                                <img
                                    src={product.defaultImage}
                                    alt={product.name}
                                    style={{height: '40vh'}}
                                />

                                <CarouselCompnent.Caption className={classes.caption}>
                                    <h3 className={classes.carouselText}>{product.name}</h3>
                                    <p className={classes.carouselText}>{product.price + 'kr'}</p>
                                    <Card.Link><Button className={'mr-1'} variant="primary"><VisibilityIcon/>View</Button></Card.Link>
                                    <Card.Link><Button variant="primary"><AddShoppingCartIcon/>Add</Button></Card.Link>
                                </CarouselCompnent.Caption>
                            </CarouselCompnent.Item>
                    )
                })
                }
            </CarouselCompnent>
        </div>



    );

};