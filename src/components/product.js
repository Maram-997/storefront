import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { addProduct, addItem, getAll, getData } from "../store/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useStyle = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Products = (props) => {
  const classes = useStyle();
  const dispatch = useDispatch()
  useEffect(() => {
    props.getAll(dispatch(getData()))
  }, [props.products])


  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {props.products.map((product) => {
          return (
            <Grid item key={product.name} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={product.img}
                  title={product.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography>
                    Category: {product.categoryAssociation} <br />
                    Price: {product.price} Jd <br />
                    Inventory: {product.inventoryCount}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(inventory) => {
                      if (product.inventoryCount) {
                        props.addItem(product);
                        props.addProduct(product);
                      } else {
                        alert("empty item");
                      }
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Link to={`/product/${element._id}`}>
                    <Button size="small" color="primary"
                    // onClick={()=> props.showDetails(element._id)}
                    >View Details
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );

}


const mapStateToProps = (state) => ({
  products: state.productsReducer.activatedProduct,

})

const mapDispatchToProps = { addItem, addProduct, getAll };
// addItem to add product when to category
// addProduct to add product to cart
export default connect(mapStateToProps, mapDispatchToProps)(Products);


