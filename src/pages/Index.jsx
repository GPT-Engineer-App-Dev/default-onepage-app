import { Container, Text, VStack, Heading, Button, Box } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { usePosts, useAddPost } from "../integrations/supabase/index.js";
import { useSupabaseAuth, SupabaseAuthUI } from '../integrations/supabase/auth.jsx';
import { useState } from 'react';

const Index = () => {
  const { data: posts, isLoading, isError } = usePosts();
  const addPostMutation = useAddPost();

  const { session, logout } = useSupabaseAuth();
  const [showLogin, setShowLogin] = useState(false);

  const handleAddPost = () => {
    addPostMutation.mutate({ name: "New Post", body: "This is a new post." });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Your One-Page App</Heading>
        <Text fontSize="lg" textAlign="center">This is a simple, elegant one-page web application built with React and Chakra UI.</Text>
        <Box mt={6}>
          <Button rightIcon={<FaRocket />} colorScheme="teal" size="lg" onClick={handleAddPost}>
            Add Post
          </Button>
        </Box>
      {isLoading && <Text>Loading posts...</Text>}
        {isError && <Text>Error loading posts.</Text>}
        {posts && posts.map(post => (
          <Box key={post.id} p={4} borderWidth={1} borderRadius="md" width="100%">
            <Heading as="h3" size="md">{post.name}</Heading>
            <Text>{post.body}</Text>
          </Box>
        ))}
      {!session ? (
          showLogin ? (
            <SupabaseAuthUI />
          ) : (
            <Button onClick={() => setShowLogin(true)}>Login</Button>
          )
        ) : (
          <Button onClick={() => { setShowLogin(false); logout(); }}>Logout {session.user.email}</Button>
        )}
      </VStack>
    </Container>
  );
};

export default Index;