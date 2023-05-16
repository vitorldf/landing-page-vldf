import { useNavigate, useLocation } from "react-router-dom";
// import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Stack,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";
import React from "react";

export default function NavbarComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const location = useLocation();

  const refreshPage = () => {
    if (location.pathname === "/") {
      navigate(0);
    } else {
      navigate("/");
    }
  };
  // função para renderizar links (evitar duplicidade na responsividade)
  function RenderLinks(this: any) {
    return (
      <>
        <NavLink end className="navLink" to={"/"}>
          Inicio
        </NavLink>

        <NavLink className="navLink" to={"/personal"}>
          Sobre min
        </NavLink>
        <NavLink className="navLink" to={"/projetos"}>
          Projetos
        </NavLink>
      </>
    );
  }

  return (
    <>
      <Box bg={"#fcfcfc"} px={6} h={isOpen ? "350px" : "64px"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Image
            src={"Img"}
            boxSize={"80px"}
            onClick={refreshPage}
            style={{ cursor: "pointer" }}
          />

          <Flex alignItems={"center"} gap={8}>
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
            >
              <RenderLinks />
            </HStack>
          </Flex>
        </Flex>

        {isOpen && (
          <Box py={8} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={8}>
              <RenderLinks />
            </Stack>
          </Box>
        )}
      </Box>
      <Divider />
    </>
  );
}
