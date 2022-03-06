import { Box, Flex } from "@chakra-ui/react";
import { Header } from "@components/Header";
import { GetServerSideProps } from "next";
import { searchBook } from "../../services/book.service";

export default function Book({ books }) {

  return (
    <Box>
      <Header></Header>
      <Flex w="100%" maxWidth={1200} mx="auto" px="6"></Flex>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const books = await searchBook({ q: context.query.q });
  return {
    props: {
      books: books.data,
    },
  };
};
