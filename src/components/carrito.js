import React from "react";
import Avatar from "@mui/material/Avatar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {styled} from "@mui/material/styles";
import Badge from "@mui/material/Badge";


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
function Carrito() {
    return(
        <div className='text-center mb-5'>
            <div className='d-flex justify-content-center'>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main',height:100,width:100 }}>
                    <StyledBadge badgeContent={4} color="primary">
                        <ShoppingCartIcon className='cursor tiendaiconopro mt-2'/>
                    </StyledBadge>
                </Avatar>
            </div>
            <h1> Carrito </h1>
        </div>

    )

}
export default Carrito;