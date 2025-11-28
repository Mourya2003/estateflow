/*eslint-disable*/
import React from "react";
import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  const textColor = useColorModeValue("blue.700", "white");
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px={{ base: "30px", md: "50px" }}
      pb="30px"
    >
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        {" "}
        &copy; {1900 + new Date().getYear()}
        <Text as="span" fontWeight="500" ms="4px">
          <Link
            fontWeight="500"
            color={textColor}
            target="_blank"
            href="#"
          >
            {" "}
            EstateFlow.
          </Link>{" "}
          Need help, facing issues, or looking for a new feature? Contact us at{" "}
          <Link
            href="mailto:mourya.psv@gmail.com"
            fontWeight="500"
            color={textColor}
            target="_blank"
          >
            mourya.psv@gmail.com
          </Link>
        </Text>
      </Text>
    </Flex>
  );
}