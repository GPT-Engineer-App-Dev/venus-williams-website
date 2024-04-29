import { Box, Flex, Heading, Text, Button, Image, Link, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn, FaTrophy } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" maxW="1200px" m="auto" p={5}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1622699423623-c0f1bfdbd253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxWZW51cyUyMFdpbGxpYW1zfGVufDB8fHx8MTcxNDM5OTYzMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Venus Williams" mb={4} />
        <Heading as="h1" size="xl" mb={2}>
          Venus Williams
        </Heading>
        <Text fontSize="lg" mb={4}>
          Professional Tennis Player & Entrepreneur
        </Text>
        <HStack spacing={4} mb={4}>
          <Link href="https://instagram.com" isExternal>
            <Icon as={FaInstagram} w={6} h={6} />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <Icon as={FaTwitter} w={6} h={6} />
          </Link>
          <Link href="https://facebook.com" isExternal>
            <Icon as={FaFacebookF} w={6} h={6} />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <Icon as={FaLinkedinIn} w={6} h={6} />
          </Link>
        </HStack>
        <VStack spacing={5} align="left">
          <Box>
            <Heading as="h2" size="lg">
              Biography
            </Heading>
            <Text mt={2}>Venus Ebony Starr Williams is an American professional tennis player who is currently ranked world No. 38 in the WTA singles rankings. She is generally regarded as one of the all-time greats of women's tennis and, along with her younger sister Serena Williams, was credited with ushering in a new era of power and athleticism on the women's professional tennis tour.</Text>
          </Box>
          <Box>
            <Heading as="h2" size="lg">
              Career Highlights
            </Heading>
            <VStack spacing={2} mt={2}>
              <Flex align="center">
                <Icon as={FaTrophy} w={5} h={5} mr={2} />
                <Text>7 Grand Slam Singles Titles</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaTrophy} w={5} h={5} mr={2} />
                <Text>14 Grand Slam Doubles Titles</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaTrophy} w={5} h={5} mr={2} />
                <Text>4 Olympic Gold Medals</Text>
              </Flex>
            </VStack>
          </Box>
          <Box>
            <Heading as="h2" size="lg">
              Contact
            </Heading>
            <Text mt={2}>For business inquiries, please contact via email: venus@venuswilliams.com</Text>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;
