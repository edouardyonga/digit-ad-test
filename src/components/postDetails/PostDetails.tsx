import React, { useEffect, useState } from 'react';
import { Post, fetchPostDetails } from '../../api/postsApi';
import { Box, Container, Divider, Grid, Skeleton, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import Comments from './Comments';

const PostDetails: React.FC = () => {
    let { id } = useParams();

    const [postId, setPostId] = useState<string>(id as string)
    const [post, setPost] = useState<Post>();
    const [loader, setLoader] = useState(false)

    const getPost = async () => {
        setLoader(true)
        try {
            const post = await fetchPostDetails(postId);
            setPost(post)
        } catch (error) {
            // console.error('Error loading more post:', error);
        }
        setLoader(false)
    };

    useEffect(() => {
        getPost();
    }, []);

    return (
        <Container>
            <Box sx={{ padding: '20px' }}>
                <Typography gutterBottom variant="h5" component="h4" sx={{ color: 'primary.main' }}>
                    <Link to={'/'} style={{ textDecoration: 'none', color: '#e37020' }}>Home </Link>
                </Typography>
                <Divider variant="fullWidth" sx={{ my: 3 }} />
                <img alt='post' style={{ width: '100%' }} src='https://res.cloudinary.com/practicaldev/image/fetch/s--QLjPUHpf--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/g83rrbcpsylwwxn9p92q.jpg' />
                <Box sx={{ width: "80%", mx: 'auto', pt: '30px' }}>
                    <Typography gutterBottom variant="h3" component="h4" sx={{ color: 'secondary.main' }}>
                        {post?.title}
                    </Typography>

                    {loader ?
                        <Grid container spacing={2}>
                            <Grid item xs>
                                <Skeleton data-testid='loading-skeleton' variant="rectangular" height={130} />
                                <Skeleton />
                                <Skeleton />
                            </Grid>
                        </Grid>
                        :
                        <>
                            <Typography variant="body1" gutterBottom>
                                {post?.body}
                            </Typography>
                            <Divider sx={{ my: 3 }} />
                            <Comments />
                        </>
                    }
                </Box>

            </Box>
        </Container>
    );
};

export default PostDetails;
