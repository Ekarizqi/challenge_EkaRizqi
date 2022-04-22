import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
    Card, CardBody, CardTitle, CardImg,CardText, Button,
} from 'reactstrap'

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        // const {id, name, category, price, image} = products;
        return (
            <Card key={product.id} style={{
                margin: "10px",
                width:"405px",
                height:"580px"
            }}>
                     <CardBody>
                     <CardImg
                        alt="Card image cap"
                        src={product.image}
                        top
                        width="270px"
                        height="200px"
                        style={{marginBottom:"20px"}}
                      />
                     <CardTitle tag="h6">
                        {product.name} / {product.category}
                     </CardTitle>
                     <CardTitle tag="h5">
                        Rp{product.price}/ hari 
                     </CardTitle>
                     <CardText>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                     </CardText>
                     <CardText>
                        4 Orang
                     </CardText>
                     <CardText>
                        Manual
                     </CardText>
                     <CardText>
                        Tahun 2020
                     </CardText>
                     <Link to={`product/${product.id}`} >
                        <Button block color="success"
                        >
                            Pilih Mobil
                        </Button>
                      </Link>
                     </CardBody>
                 </Card>
        );
    });
    // const {id, title} = products[0];

    return <>{renderList}</>
};

export default ProductComponent;
