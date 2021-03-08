import {Card, Spinner} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    card: {
        display: 'flex',
        width: '18rem',
    },
});

export const ShoppingCartItem = ({cartProduct}) => {
    const [productDetails, setProductDetails] = useState();
    const [loading, setLoading] = useState(true);
    const classes = useStyles()

    useEffect(() => {
            setLoading(true)
             fetch('http://localhost:8080/products/' + cartProduct.id).then(response => response.json())
            .then(data => {
                setProductDetails(data)
                setLoading(false)
            })
    }, [cartProduct]);

    if(loading) {
       return (
            <Spinner animation="border" role="status" variant={'primary'}>
                <span className="sr-only">Loading...</span>
            </Spinner>
        )
    }
    return (
        <Card className={classes.card}>
            <span className={"mr-auto"}>{productDetails.name + '    x ' + cartProduct.quantity}</span>
            <Card.Text>{cartProduct.quantity * productDetails.price}</Card.Text>
        </Card>)

}