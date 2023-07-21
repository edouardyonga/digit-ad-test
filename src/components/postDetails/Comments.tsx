import React, { useEffect, useState } from 'react';
import { Comment, fetchPostComments } from '../../api/postsApi';
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const Comments = () => {
    let { id } = useParams();
    const [loader, setLoader] = useState<Boolean>(false)

    const [comments, setComments] = useState<Comment[]>([])

    const getComments = async () => {
        setLoader(true)
        try {
            const comments = await fetchPostComments(id);
            setComments(comments)
        } catch (error) {
            // console.error('Error loading more post:', error);
        }
        setLoader(false)
    };

    useEffect(() => {
        getComments();
    }, []);

    return (
        <>
            <Typography variant="h5" gutterBottom>
                Top comments ({comments?.length})
            </Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {comments.map((comment) => (
                    <><ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt={comment.name} src="https://res.cloudinary.com/practicaldev/image/fetch/s--kG1sCswW--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/21839/3bffe2cb-6603-4757-a8d5-5652fe12e7a1.png" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={comment?.name}
                            secondary={<React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {comment.email}
                                </Typography>
                                {` —  ${comment.body}`}
                            </React.Fragment>} />
                    </ListItem><Divider variant="inset" component="li" /></>
                ))}
            </List>
        </>
    );
};

export default Comments;
