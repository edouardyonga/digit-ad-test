import React, { useEffect, useState } from 'react';
import Posts from './Posts';
import { Post, fetchPosts } from '../../api/postsApi';
import { Box, Container, Divider, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Pagination, Skeleton, Stack, Typography } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { Search } from '@mui/icons-material';

const Home: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 6;
    const [searchQuery, setSearchQuery] = useState('');
    const [loader, setLoader] = useState(false)

    const loadMorePosts = async (page: number) => {
        setLoader(true)
        try {
            const newPosts = await fetchPosts(page, limit);
            setPosts(newPosts)
            setCurrentPage(page)
        } catch (error) {
            console.error('Error loading more posts:', error);
        }
        setLoader(false)
    };
    console.log(searchQuery.length);

    const handleSearch = () => {

        const filteredPosts = posts.filter((post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setPosts(filteredPosts);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        loadMorePosts(currentPage);
    }, []);

    return (
        <Container>
            <Box sx={{ padding: '20px' }}>
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

                <div style={{ display: 'flex', justifyContent: 'center', margin: '15px' }}>
                    <Stack spacing={2} sx={{ mx: 'auto' }}>
                        <Pagination count={16} color="secondary" page={currentPage} onChange={(e, page) => (
                            loadMorePosts(page as unknown as number)
                        )} />
                    </Stack>
                </div>

            </Box>
        </Container>
    );
};

export default Home;
