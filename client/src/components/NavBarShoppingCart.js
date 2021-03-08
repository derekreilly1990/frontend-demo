import React, {useEffect, useState} from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Button, Card,OverlayTrigger} from "react-bootstrap";
import {ShoppingCartItem} from "./ShoppingCartItem";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles({
    cartContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '18rem',
        zIndex: '100'
    },
});
export const NavBarShoppingCart = () => {
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState(undefined);
    const classes = useStyles()

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:8080/carts/1')
            .then((res) => {
                return res.json()
            })
            .then((cart) => {
                setLoading(false)
                setCart(cart);
            });
    }, []);

    const popover = (
        <Card id="popover-contained" className={classes.cartContainer}>
            <Card.Title as="h4">Shopping Cart</Card.Title>
            <Card.Text className={classes.cartContainer} >
                {cart && cart.products.map((product) => {
                    return (
                        <ShoppingCartItem key={product.id} cartProduct={product}/>
                    )
                })}
            </Card.Text>
            <Card.Footer>
                <Button variant="outline-success" ><ShoppingCartIcon/>Pay Now</Button>
            </Card.Footer>
        </Card>
    )
    return (
            <OverlayTrigger trigger="click" placement="left" overlay={popover}>
                <Button variant="outline-success" ><ShoppingCartIcon/>Cart</Button>
            </OverlayTrigger>

        )
}


