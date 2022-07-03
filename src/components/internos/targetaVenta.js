import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import cartera from '../../images/carteranegra.webp'



export default function RecipeReviewCard(props) {
    const {nombre}=props.item;
    const {archivoName}=props.item;
    const {descripcion}=props.item;
    const {imagen}=props.item;
    const {presio}=props.item;

    return (
        <Card sx={{ minWidth: 345,height:445 }} className='m-1'>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={nombre}
                subheader="Junio 24, 2022"
            />
            <CardMedia
                component="img"
                height="250"
                image={imagen}
                alt="Cartera"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" className='centrado'>
                    {presio}<br/>
                    {descripcion}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

            </CardActions>
        </Card>
    );
}
