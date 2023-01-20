import * as React from "react";
import axios from "axios";
import {
  ChakraProvider,
  Flex,
  theme,
  Input,
  Heading,
  Button,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";

interface DataType {
  login: string;
  name: string;
  avatar_url: string;
  followers: number;
  following: number;
  html_url: string;
}

function App() {
  const [keyword, setKeyword] = useState("");
  // const [isNoUser, setIsNoUser] = useState(false);
  const [data, setData] = useState<DataType>({
    login: "",
    name: "",
    avatar_url: "",
    followers: 0,
    following: 0,
    html_url: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const handleSubmit = async () => {
    const response = await axios.get(`https://api.github.com/users/${keyword}`);
    setData(response.data);
  };
  const { login, name, avatar_url, followers, following, html_url } = data;
  return (
    <ChakraProvider theme={theme}>
      <Flex
        w="100vw"
        h="150"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        fontSize="xl"
        borderRadius="15px"
      >
        <Heading m="10">Github Profile Finder</Heading>
        <Flex>
          <Input
            w={350}
            h={30}
            placeholder="Github Username"
            onChange={(e) => {
              handleInputChange(e);
            }}
          />
          <Button h={30} marginLeft={3} onClick={handleSubmit}>
            확인
          </Button>
        </Flex>
      </Flex>
      <Box>
        {login && (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            border="gray solid 1px"
            borderRadius="15px"
            m={10}
            p={5}
          >
            <Text fontSize={30} fontWeight={500}>
              {name}
            </Text>
            <Text fontSize={20}>{login}</Text>
            <Image src={avatar_url} w={40} h={40} m={5} borderRadius={15} />
            <Flex gap={7}>
              <Text fontSize={20}>
                Followers: <b>{followers}</b>
              </Text>
              <Text fontSize={20}>
                Following: <b>{following}</b>
              </Text>
            </Flex>
            <Button m={5}>
              <a href={html_url}>방문하기</a>
            </Button>
          </Flex>
        )}
      </Box>
    </ChakraProvider>
  );
}
export default App;
