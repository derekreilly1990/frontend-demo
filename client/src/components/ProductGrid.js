import React, {useEffect, useState} from "react";
import {Button, Card, Form, FormControl, Spinner} from "react-bootstrap";
import {makeStyles} from "@material-ui/core/styles";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const useStyles = makeStyles({
    container: {

    },
    productContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    item: {
        cursor: 'pointer',
        marginTop: '20px',
        marginBottom: '20px',
        width: '18rem',
        color: 'black',
        boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.44)',
        '&:hover':{
            boxShadow: '4px 4px 2px 1px rgba(0, 0, 0, 0.44)'
        },
    }
});
export const ProductGrid = () => {

    const classes = useStyles()

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:8080/products?q=' + searchTerm )
            .then((res) => {
                return res.json()
            })
            .then((products) => {
                setLoading(false)
                setProducts(products);
            });
    }, [searchTerm]);


    return (
        <div className={classes.container}>
            <Form.Group>
                <FormControl type="text" placeholder="Search" className="ml-sm-2"  size="lg" onChange={(e) => setSearchTerm(e.target.value)}/>
            </Form.Group>
            {loading && (
                <Spinner animation="border" role="status" variant={'primary'}>
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )}
            <div className={classes.productContainer}>
                {products.map((product) => {
                    return (
                        <Card key={product.id} className={classes.item} bg={'light'}  >
                            <Card.Img variant="top" src={product.defaultImage}/>
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Text className={'mb-0 font-weight-bold'}>
                                {product.price + 'kr'}
                            </Card.Text>
                            <Card.Link className={'m-2'}><Button variant="primary" block><AddShoppingCartIcon/>Add To Cart</Button></Card.Link>
                        </Card>
                    )
                })}
            </div>
        </div>


    )
}