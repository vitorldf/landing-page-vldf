import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { Flex, Text, Heading, VStack, HStack, Image } from "@chakra-ui/react";
import { GlobalStyles } from "./styles/globalStyles";
import { Header } from "./styles/styles";
import perfil from "./assets/img/perfil.png";
import FooterComponent from "./components/Footer/Footer";
import NavbarComponent from "./components/NavBar/index";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <BrowserRouter>
          <NavbarComponent />
          <HStack h="550px" justify="center">
            <VStack justify={"center"}>
              <Heading>Olá, meu nome é Vitor Fidelis</Heading>
              <Text>
                Sou um desenvolvedor Front-end, <br />
                em busca de oportunidades desafiadoras no mundo da programacao
              </Text>
            </VStack>
            <Image
              src={perfil}
              borderRadius="10%"
              border={"1px solid white"}
              boxSize="250px"
              _hover={{
                transform: "scale(1.1)",
                boxShadow: "0 0 20px 0 rgba(38, 35, 83)",
              }}
            />
          </HStack>
          <FooterComponent />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
