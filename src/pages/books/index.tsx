import { Key, useEffect } from "react";
import { Box, Flex, ScaleFade } from "@chakra-ui/react";
import { Header } from "@components/Header";
import { Card } from "@components/Card";
import { Pagination } from "@components/Pagination";
import { changePage, clearBookData } from "@redux/Books/Books.slice";
import { getBooks } from "@redux/Books/Books.slice";
import { useSession } from "next-auth/react";
import Link from "next/link";
import * as hooks from "../../hooks";

export default function ListPageBooks() {
  let data = hooks.useAppSelector((state) => state.BooksReducer.data);
  let query = hooks.useAppSelector((state) => state.BooksReducer.filters);
  let isLoading = hooks.useAppSelector((state) => state.BooksReducer.isLoading);

  let currentPage = hooks.useAppSelector(
    (state) => state.BooksReducer.pagination.currentPage
  );

  const dispatch = hooks.useAppDispatch();

  const { data: session } = useSession();

  const changePaginationParams = (pageNumber: number) => {
    dispatch(changePage({ currentPage: pageNumber }));
    dispatch(
      getBooks({
        filters: { ...query, startIndex: pageNumber * 10 - 12 , maxResults: 12 },
        authToken: session.accessToken,
      })
    );
  };

  useEffect(() => {
    dispatch(clearBookData());
  }, []);

  interface BookCard {
    id: Key;
    volumeInfo: {
      title: string;
      authors: string[];
      imageLinks: { thumbnail: string };
    };
  }

  return (
    <Box>
      <Header />
      <Flex
        w="100%"
        mt="4"
        flexDirection="column"
        maxWidth={1200}
        mx="auto"
        px={["0","6"]}
      >
        <ScaleFade initialScale={0.9} in={!isLoading}>
          <Flex
            w="100%"
            flexWrap="wrap"
            mt={["4", "0"]}
            justify={["center", "left"]}
          >
            {data?.items.map((book: BookCard, key: Key) => (
              <Link key={key} href={`/books/${book.id}`}>
                <a>
                  <Card
                    title={book.volumeInfo?.title}
                    authors={book.volumeInfo?.authors}
                    imageLink={book.volumeInfo.imageLinks?.thumbnail}
                  />
                </a>
              </Link>
            ))}
          </Flex>
          <Pagination
            onPageChange={(page) => changePaginationParams(page)}
            currentPage={currentPage}
            totalCount={data?.totalItems}
            pageSize={10}
          />
        </ScaleFade>
      </Flex>
    </Box>
  );
}
