/*eslint-disable*/
import React from "react";
import {
  Flex,
  Link,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  let textColor = useColorModeValue("blue.700", "white");
  let linkColor = useColorModeValue(
    { base: "gray.400", lg: "gray.400" },
    "gray.400",
  );
  return (
    <Flex
      zIndex="3"
      flexDirection={{
        base: "column",
        lg: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-between"
      px={{ base: "30px", md: "0px" }}
      pb="30px"
    >
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", lg: "0px" }}
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