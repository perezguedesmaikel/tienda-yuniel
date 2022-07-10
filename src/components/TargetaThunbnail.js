import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import  "../css/TargetaThunbnail.css";


export default function InteractiveCard() {
    return (
        <Card className='m-1 shadow p-3 mb-5 bg-body rounded border-primary'
            variant="outlined"
            row
            sx={{
                minWidth: '320px',
                gap: 2,
                '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
            }}
        >
            <AspectRatio ratio="1" sx={{ width: 90 }}>
                <img
                    src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?crop=entropy&auto=format&fit=crop&w=3387"
                    alt=""
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
    );
}
