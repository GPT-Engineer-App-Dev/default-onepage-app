import { Container, Text, VStack, Heading, Button, Box } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Your One-Page App</Heading>
        <Text fontSize="lg" textAlign="center">This is a simple, elegant one-page web application built with React and Chakra UI.</Text>
        <Box mt={6}>
          <Button rightIcon={<FaRocket />} colorScheme="teal" size="lg">
            Get Started
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;