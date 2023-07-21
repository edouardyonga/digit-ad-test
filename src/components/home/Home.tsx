import React, { useEffect, useState } from 'react';
import Posts from './Posts';
import { Post, fetchAllPosts } from '../../api/postsApi';
import { Box, Container, Divider, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Pagination, Skeleton, Stack, Typography } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { Search } from '@mui/icons-material';

const Home: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [allPosts, setAllPosts] = useState<Post[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loader, setLoader] = useState(false)

    const loadMorePosts = async () => {
        setLoader(true)
        try {
            const newPosts = await fetchAllPosts();
            setPosts(newPosts)
            setAllPosts(newPosts)
        } catch (error) {
            console.error('Error loading more posts:', error);
        }
        setLoader(false)
    };

    const handleSearch = () => {
        const filteredPosts = allPosts.filter((post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setPosts(filteredPosts);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        handleSearch()
    };

    useEffect(() => {
        loadMorePosts();
    }, []);

    return (
        <Container>
            <Box sx={{ paddingTop: '30px' }}>
                <Typography gutterBottom variant="h5" component="h4" sx={{ color: 'primary.main' }}>
                    Home
                </Typography>
                <Divider variant="fullWidth" sx={{ my: 3 }} />
                <Typography gutterBottom variant="h3" component="h4" sx={{ color: 'secondary.main' }}>
                    Posts
                </Typography>
                <FormControl sx={{ width: '99%', my: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        value={searchQuery}
                        onChange={handleInputChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="Search"
                                    onClick={handleSearch}
                                    edge="end"
                                >
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Search"
                    />
                </FormControl>
                {loader ?

                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Skeleton variant="rectangular" height={40} />
                            <Skeleton />
                            <Skeleton />
                        </Grid>
                        <Grid item xs={4}>
                            <Skeleton variant="rectangular" height={40} />
                            <Skeleton />
                            <Skeleton />
                        </Grid>
                        <Grid item xs={4}>
                            <Skeleton variant="rectangular" height={40} />
                            <Skeleton />
                            <Skeleton />
                        </Grid>
                        <Grid item xs={4}>
                            <Skeleton variant="rectangular" height={40} />
                            <Skeleton />
                            <Skeleton />
                        </Grid>
                        <Grid item xs={4}>
                            <Skeleton variant="rectangular" height={40} />
                            <Skeleton />
                            <Skeleton />
                        </Grid>
                        <Grid item xs={4}>
                            <Skeleton variant="rectangular" height={40} />
                            <Skeleton />
                            <Skeleton />
                        </Grid>
                    </Grid>
                    :
                    <Masonry columns={{ xs: 1, sm: 1, md: 2, lg: 3 }} spacing={2}>
                        {posts.map((post, index) => (
                            <Grid item key={index} xs={12}>
                                <Posts post={post} />
                            </Grid>
                        ))}
                    </Masonry>}
            </Box>
        </Container>
    );
};

export default Home;
