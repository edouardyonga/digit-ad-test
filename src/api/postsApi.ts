import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your API base URL

export interface Post {
    id: number;
    title: string;
    body: string;
}

export async function fetchPosts(): Promise<Post[]> {
    const response = await axios.get<Post[]>(`${BASE_URL}/posts`);
    return response.data;
}

export async function fetchPostDetails(postId: number): Promise<Post> {
    const response = await axios.get<Post>(`${BASE_URL}/posts/${postId}`);
    return response.data;
}
