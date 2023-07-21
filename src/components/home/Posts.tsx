
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

type Post = {
    id: number;
    title: string;
    body: string;
};

export default function Posts({ post }: { post: Post }) {
    const navigate = useNavigate();
    return (
        <Box sx={{
            width: '100%', padding: '10px', bgcolor: 'background.paper', borderRadius: '10px', ':hover': {
                border: '1px solid #e45121',
                cursor: 'pointer'
            }
        }}
            onClick={() => navigate(`/post/${post.id}`)}
        >
            <Box sx={{ my: 3, mx: 2 }}>
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h4" component="div">
                            {post.title}
                        </Typography>
                    </Grid>
                </Grid>
                <Typography color="text.secondary" variant="body2">
                    {post.body}
                </Typography>
            </Box>
            <Box sx={{ mt: 3, mb: 1, ml: '90%', color: 'primary.main' }}>
                円
            </Box>
        </Box>
    );
}