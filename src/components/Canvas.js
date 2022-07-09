import React from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { BiArrowFromTop } from "react-icons/bi";
import { BiDoorOpen } from "react-icons/bi";
const style = {
    width: '100%',
    maxWidth: 360,

};

function Canvas() {
    return(
        <div>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample"
                 aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-body bg-primary text-light">
                    <List sx={style} component="nav" aria-label="mailbox folders">
                        <ListItem button>
                            <ListItemText primary=""/>
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                            <ListItemText primary=""  />
                        </ListItem>
                        <ListItem button><h3>Navegue por la categoría que desee <BiArrowFromTop  /></h3>
                            <ListItemText primary="" />
                        </ListItem>
                        <Divider light />
                        <ListItem button data-bs-toggle="offcanvas"
                                  data-bs-target="#offcanvasExample"
                                  aria-controls="offcanvasExample">
                            <ListItemText primary="Pantalones" />
                        </ListItem>
                        <Divider light />
                        <ListItem button data-bs-toggle="offcanvas"
                                  data-bs-target="#offcanvasExample"
                                  aria-controls="offcanvasExample">
                            <ListItemText primary="Vestidos" />
                        </ListItem>
                        <Divider light />
                        <ListItem button data-bs-toggle="offcanvas"
                                  data-bs-target="#offcanvasExample"
                                  aria-controls="offcanvasExample">
                            <ListItemText primary="Carteras" />
                        </ListItem>
                        <Divider light />
                        <ListItem button data-bs-toggle="offcanvas"
                                  data-bs-target="#offcanvasExample"
                                  aria-controls="offcanvasExample">
                            <ListItemText primary="Blusas" />
                        </ListItem>
                        <Divider light />
                        <ListItem button data-bs-toggle="offcanvas"
                                  data-bs-target="#offcanvasExample"
                                  aria-controls="offcanvasExample">
                            <ListItemText primary="Truzas" />

                        </ListItem>
                        <Divider light />
                        <ListItem button data-bs-toggle="offcanvas"
                                  data-bs-target="#offcanvasExample"
                                  aria-controls="offcanvasExample">
                            <ListItemText primary="Ninguna deseo salir" /><BiDoorOpen/>

                        </ListItem>
                    </List>
                </div>
            </div>
        </div>

    )

}
export default Canvas;