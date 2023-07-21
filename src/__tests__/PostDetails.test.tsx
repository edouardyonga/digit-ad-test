import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PostDetails from '../components/postDetails/PostDetails';

// Mock the fetchPostDetails function to return a mocked post
jest.mock('../api/postsApi', () => ({
    fetchPostDetails: jest.fn(() => Promise.resolve({ id: 1, title: 'Test Post', body: 'This is a test post.' })),
}));

describe('PostDetails component', () => {

    it('should display loading skeleton while loading post', async () => {
        // Mock the fetchPostDetails function to return a delayed Promise
        jest.spyOn(global, 'fetch').mockImplementation(() => new Promise((resolve) => setTimeout(resolve, 1000)));

        // Render the component with a mocked postId
        render(
            <MemoryRouter initialEntries={['/post/1']}>
                <PostDetails />
            </MemoryRouter>
        );

        const loadingSkeleton = await screen.findByTestId('loading-skeleton');

        // Assertion
        expect(loadingSkeleton).not.toBeInTheDocument();
    });
});
