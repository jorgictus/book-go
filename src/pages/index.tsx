import { Box, Flex, Image, ScaleFade, SlideFade } from "@chakra-ui/react";
import { Header } from "@components/Header";
import { HeroText } from "@components/Hero";
import { Banner } from "@components/Banner";
import { useSession } from "next-auth/react";
import { Card } from "@components/Card";
import { Key, useEffect } from "react";
import Link from "next/link";
import * as hooks from "src/hooks";
import * as FavoritesSlice from "@redux/Favorites/Favorites.slice";
import { Pagination } from "@components/Pagination";

export default function Home() {
  const { data: session, status } = useSession();
  const { data, isLoading, pagination } = hooks.useAppSelector(
    (state) => state.FavoriteReducer
  );

  const { currentPage } = hooks.useAppSelector(
    (state) => state.FavoriteReducer.pagination
  );

  const dispatch = hooks.useAppDispatch();

  useEffect(() => {
    if (status === "authenticated") {
      dispatch(
        FavoritesSlice.getFavoriteBook({
          filters: { startIndex: 0, maxResults: 12 },
          authToken: session.accessToken,
        })
      );
    }
  }, [status]);

  interface BookCard {
    id: Key;
    volumeInfo: {
      title: string;
      authors: string[];
      imageLinks: { thumbnail: string };
    };
  }

  const changePaginationParams = (pageNumber: number) => {
    dispatch(FavoritesSlice.changePage({ currentPage: pageNumber }));
    console.log(pageNumber);
    dispatch(
      FavoritesSlice.getFavoriteBook({
        filters: { startIndex: pageNumber * 10 - 12, maxResults: 12 },
        authToken: session.accessToken,
      })
    );
  };

  return session ? (
    <>
      <Box>
        <SlideFade offsetY="-20px" in={true}>
          <Header />
        </SlideFade>
        <ScaleFade initialScale={0.9} in={!isLoading}>
          <Flex
            w="100%"
            mt="4"
            flexDirection="column"
            maxWidth={1200}
            mx="auto"
            px={["0", "6"]}
          >
            {data?.items ? (
              <>
                <Flex w="100%" justify={["center", "left"]} flexWrap="wrap">
                  {data?.items.map((book: BookCard) => (
                    <Link key={book.id} href={`/books/${book.id}`} passHref>
                      <a
                        onClick={() =>
                          dispatch(FavoritesSlice.setBookAsFavorite(true))
                        }
                      >
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
              </>
            ) : (
              <Banner />
            )}
          </Flex>
        </ScaleFade>
      </Box>
    </>
  ) : (
    <>
      <Box>
        <SlideFade offsetY="-100px" in={true}>
          <Header />
        </SlideFade>
        <ScaleFade initialScale={0.8} in={true}>
          <Flex
            w="100%"
            maxWidth={1200}
            mx="auto"
            px="6"
            justify={["center", "space-between"]}
            flexDirection={["column", "row"]}
            align="center"
          >
            <HeroText />
            <Image
              data-testid="HeroImage"
              mt="-4"
              boxSize={["100%", "520px"]}
              src="/Ebook.svg"
              alt="Ebook"
            />
          </Flex>
        </ScaleFade>
      </Box>
    </>
  );
}
