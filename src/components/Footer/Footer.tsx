import {
  IconButton,
  Text,
  Image,
  Grid,
  GridItem,
  LinkBox,
  Flex,
  Box,
} from "@chakra-ui/react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
// import logo from "../../assets/logo.png";

export default function FooterComponent() {
  return (
    <LinkBox>
      <Flex
        direction={{ md: "row" }}
        justifyContent={{ base: "normal", md: "space-between", lg: "center" }}
        bg="#F8F8FF"
        mt={8}
      >
        <Grid
          overflow={{ lg: "hidden" }}
          h="300px"
          mt="10"
          w="1300px"
          pl={2}
          templateColumns="repeat(10, 1fr)"
        >
          <GridItem
            maxW="578px"
            h="350px"
            colSpan={{ base: 10, md: 8, lg: 8 }}
            padding="0px 8px"
          >
            {/* <Image src={logo} h="100px" w="150px" mb={5} /> */}

            <Text mt="8">
              <strong>Projeto em desenvolvimento</strong>
              <br />
              Nesse Projeto foi utilizado React Js, TypeScript, Vite e Chakra
              UI.
            </Text>

            <Box mt={{ base: 4, md: 4, lg: "10" }}>
              <Text fontSize="18px" fontWeight="bold">
                Endereço:
              </Text>
              <Text>Boa Esperança do Sul - SP 14930000</Text>
            </Box>

            <Text pt={{ base: 2, md: 4, lg: "3.5rem" }}>
              {" "}
              Vitor Fidelis &copy; 2023.
            </Text>
          </GridItem>

          <GridItem
            h={{ base: "250px", md: "500px" }}
            colSpan={{ base: 10, md: 1, lg: 2 }}
            padding="0px 8px"
          >
            <Text as="b" fontSize="24px">
              Entre em Contato:
            </Text>
            <Text color="secondary.700" pt={3} fontWeight="bold">
              Telefone:
            </Text>
            <Text pb={6}>(16) 99615-3229</Text>
            <Text color="secondary.700" as="b">
              E-mail:
            </Text>
            <Text>vitorluiz55@outlook.com</Text>
            <Flex id="buttons" pb="2" pt={{ base: 1, lg: "5.0rem" }}>
              <IconButton
                variant="link"
                color="dark.700"
                aria-label="Facebook"
                icon={<FaFacebookSquare size="50px" />}
                _hover={{
                  color: "dark.900",
                  bg: "blue.400",
                  transform: "scale(1.1)",
                  boxShadow: "0 0 20px 0 rgba(59, 160, 237)",
                }}
                size="sm"
                onClick={() => {
                  window.open(`${import.meta.env.VITE_FACEBOOK_URL}`, "_blank");
                }}
              />
              <IconButton
                variant="link"
                color="dark.700"
                aria-label="Instagram"
                icon={<FaInstagramSquare size="50px" />}
                _hover={{
                  color: "dark.900",
                  bg: "pink.300",
                  transform: "scale(1.1)",
                  boxShadow: "0 0 20px 0 rgba(168, 50, 139)",
                }}
                size="lg"
                onClick={() => {
                  window.open(
                    `${import.meta.env.VITE_INSTAGRAM_URL}`,
                    "_blank"
                  );
                }}
              />
              <IconButton
                variant="link"
                color="dark.700"
                aria-label="GitHub"
                icon={<FaGithubSquare size="50px" />}
                _hover={{
                  color: "dark.900",
                  bg: "yellow.300",
                  transform: "scale(1.1)",
                  boxShadow: "0 0 20px 0 rgba(00, 00, 00)",
                }}
                size="lg"
                onClick={() => {
                  window.open(`${import.meta.env.VITE_GITHUB_URL}`, "_blank");
                }}
              />
              <IconButton
                variant="link"
                color="dark.700"
                aria-label="Linkedin"
                icon={<FaLinkedin size="50px" />}
                _hover={{
                  color: "dark.900",
                  bg: "blue.500",
                  transform: "scale(1.1)",
                  boxShadow: "0 0 20px 0 rgba(02, 11, 458)",
                }}
                size="sm"
                onClick={() => {
                  window.open(`${import.meta.env.VITE_LINKEDIN_URL}`, "_blank");
                }}
              />
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </LinkBox>
  );
}
