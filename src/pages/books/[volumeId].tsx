import { useEffect } from "react";
import {
  Box,
  Flex,
  Image,
  Skeleton,
  Text,
  Tag,
  AspectRatio,
  ScaleFade,
} from "@chakra-ui/react";
import { Header } from "@components/Header";
import { Heading } from "@components/Heading";
import { FavoriteButton } from "@components/Button/Favorite";
import { GoBackButton } from "@components/Button/GoBack";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import * as hooks from "../../hooks";
import * as FavoritesSlice from "@redux/Favorites/Favorites.slice";
import * as BooksSlice from "@redux/Books/Books.slice";

export default function BookDetails() {
  const dispatch = hooks.useAppDispatch();
  const router = useRouter();
  const { volumeId } = router.query;

  const { data: session } = useSession();

  const { isFavorite, isLoading } = hooks.useAppSelector(
    (state) => state.FavoriteReducer
  );

  useEffect(() => {
    dispatch(FavoritesSlice.setBookAsFavorite(false));
    dispatch(
      BooksSlice.getBookByVolumeId({ volumeId, authToken: session.accessToken })
    );
  }, []);

  const { bookData } = hooks.useAppSelector((state) => state.BooksReducer);


  useEffect(() => {
    if (bookData && bookData?.hasOwnProperty("userInfo")) {
      dispatch(FavoritesSlice.setBookAsFavorite(true));
    }
  }, [bookData]);

  return bookData && (
      <Box>
        <Header />
        <ScaleFade initialScale={0.9} in={!isLoading}>
          <Flex
            flex="1"
            mt="10"
            maxWidth={1200}
            flexDirection={["row"]}
            mx="auto"
            px="6"
            justify="space-between"
          >
            <GoBackButton aria-label="Go Back" onClick={() => router.back()} />
            {isFavorite ? (
              <FavoriteButton
                bg="red.400"
                color="white"
                onClick={() =>
                  dispatch(
                    FavoritesSlice.removeBookToFavorites({
                      volumeId: bookData?.id,
                      authToken: session.accessToken,
                    })
                  )
                }
                aria-label="Remove from favorites"
              />
            ) : (
              <FavoriteButton
                onClick={() =>
                  dispatch(
                    FavoritesSlice.addBookToFavorites({
                      volumeId: bookData?.id,
                      authToken: session.accessToken,
                    })
                  )
                }
                aria-label="Add to your favorites"
              />
            )}
          </Flex>

          <Flex
            flex="1"
            maxWidth={1200}
            flexDirection={["column", "row"]}
            mx="auto"
            px="6"
            mt="5"
            mb="10"
          >
            <Box position="relative" w={[" 72", "80"]}>
              <AspectRatio ratio={4 / 6}>
                <Image
                  alt="Logo"
                  fallback={<Skeleton />}
                  src={bookData?.volumeInfo.imageLinks.thumbnail}
                />
              </AspectRatio>
            </Box>

            <Flex
              position="relative"
              ml={["0", "16"]}
              maxWidth={700}
              flexDirection="column"
            >
              <Heading>{bookData?.volumeInfo.title}</Heading>
              <Box mt="2">
                {bookData?.volumeInfo.categories?.map((item: string) => (
                  <Tag
                    m="1"
                    key={item}
                    size="md"
                    colorScheme="blue"
                    borderRadius="full"
                  >
                    {item}
                  </Tag>
                ))}
              </Box>
              <Text color="gray.300" mt="4">
              <div dangerouslySetInnerHTML={{__html:bookData?.volumeInfo.description}}></div>

              
              </Text>
            </Flex>
          </Flex>
        </ScaleFade>
      </Box>
  );
}
