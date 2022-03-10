import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
import { useBreakpointValue, Button } from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";

import * as hooks from "../../hooks";
import * as BooksSlice from "@redux/Books/Books.slice";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const dispatch = hooks.useAppDispatch();

  let { currentPage } = hooks.useAppSelector(
    (state) => state.BooksReducer.pagination
  );

  const { data: session } = useSession();

  return (
    <Flex
      w="100%"
      maxWidth={1200}
      as="header"
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      flexDirection={["column", "row"]}
    >
      <Logo />
      {session && (
        <SearchBox
          clearData={() => dispatch(BooksSlice.clearData())}
          changeFilter={(values) =>
            dispatch(BooksSlice.changeFilter({ ...values }))
          }
          getBooks={(values) =>
            dispatch(
              BooksSlice.getBooks({
                ...values,
                startIndex: currentPage * 10,
                maxResults: 10,
              })
            )
          }
        />
      )}

      <Flex align="center" ml="auto">
        {session && (
          <Profile
            showProfileData={isWideVersion}
            name={session.user.name}
            email={session.user.email}
            src={session.user?.image}
          />
        )}

        {isWideVersion && !session && (
          <Button onClick={() => signIn("google")} colorScheme="blue" size="md">
            Entrar
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
