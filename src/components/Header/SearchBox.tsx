import { Flex, Icon, Input, FormControl, IconButton } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { useForm } from "react-hook-form";
import router from "next/router";
import { useSession } from "next-auth/react";
export interface SearchBoxProps {
  changeFilter: (filter) => void;
  clearData: () => void;
  getBooks: (filter) => void;
}

export const SearchBox = ({
  changeFilter,
  clearData,
  getBooks,
}: SearchBoxProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { data: session } = useSession();

  function onSubmit(values) {
    clearData();
    changeFilter(values);
    getBooks({
      filters: { ...values, startIndex: 1, maxResults: 12 },
      authToken: session.accessToken,
    });

    router.push(
      {
        pathname: "/books",
      },
      undefined,
      { shallow: true }
    );
  }

  return (
    <form data-testid="searchBoxElement" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.q}>
        <Flex
          as="label"
          flex="1"
          py="4"
          px="8"
          maxWidth={800}
          alignSelf="center"
          color="gray.200"
          position="relative"
          bg="gray.800"
          borderRadius="full"
        >
          <Input
            role="SearchInput"
            autoComplete="off"
            id="q"
            color="gray.50"
            variant="unstyled"
            placeholder="Search by author, title, name"
            _placeholder={{ color: "gray.400" }}
            px="4"
            mr="4"
            {...register("q")}
          />

          <IconButton
            aria-label="Search Icon"
            type="submit"
            size="xs"
            variant="unstyled"
            icon={<Icon as={RiSearchLine} fontSize="20" />}
          />
        </Flex>
      </FormControl>
    </form>
  );
};
