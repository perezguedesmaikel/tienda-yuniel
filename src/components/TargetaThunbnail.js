import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import  "../css/TargetaThunbnail.css";
import cartera from '../images/carteranegra.webp';
import DenseAppBar from "./BarraSeparadora";
import CardGrande from "./cardGrande";


export default function InteractiveCard() {
    return (
        <div>
            <CardGrande/>
        <Card className='m-1 shadow p-3 mb-5 bg-body rounded border-primary' id='targetaThumnail' data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom"
            variant="outlined"
            row
            sx={{
                minWidth: '280px',
                gap: 2,
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
            }}
        >
            <AspectRatio ratio="1" sx={{ width: 90 }}>
                <img
                    src={cartera}
                    alt="Ropa"
                />

            </AspectRatio>
            <Box>
                <Box sx={{ ml: 0.5 }}>
                    <Typography level="h2" fontSize="lg" id="card-description" mb={0.5} className='text-primary'>
                        Trusa de playa.
                    </Typography>
                    <Typography fontSize="sm" aria-describedby="card-description" mb={1}>
                        <Link
                            overlay
                            underline="none"
                            href="#"
                            sx={{ color: 'text.tertiary' }}
                        >
                            15 USD
                        </Link>
                    </Typography>
                    <Chip
                        variant="outlined"
                        color="primary"
                        size="sm"
                        sx={{ pointerEvents: 'none' }}
                        className='shadow bg-body rounded border-primary'
                    >
                        Toque para ver detalles
                    </Chip>
                </Box>
            </Box>
        </Card>
        </div>
    );
}
