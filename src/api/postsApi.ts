import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export interface Post {
    id: number;
    title: string;
    body: string;
}

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export async function fetchPosts(page: number, limit: number): Promise<Post[]> {
    const response = await axios.get<Post[]>(`${BASE_URL}/posts?_page=${page}&_limit=${limit}`);
    return response.data;

}

export async function fetchAllPosts(): Promise<Post[]> {
    const response = await axios.get<Post[]>(`${BASE_URL}/posts`);
    return response.data;

}

export async function fetchPostDetails(postId: string | undefined): Promise<Post> {
    const response = await axios.get<Post>(`${BASE_URL}/posts/${postId as unknown as number}`);
    return response.data;
}

export async function fetchPostComments(postId: string | undefined): Promise<Comment[]> {
    const response = await axios.get<Comment[]>(`${BASE_URL}/posts/${postId as unknown as number}/comments`);
    return response.data;
}