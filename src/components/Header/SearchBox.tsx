import {
  Flex,
  Icon,
  Input,
  FormControl,
  FormErrorMessage,
  IconButton,
} from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import intl from "react-intl-universal";
import { useForm } from "react-hook-form";
import router from "next/router";

export const SearchBox = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    router.push({
      pathname: "/books",
      query: { ...values },
    });
  }

  return (
    <form data-testid="searchBoxElement" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.q}>
        <Flex
          as="label"
          flex="1"
          py="4"
          px="8"
          ml="6"
          maxWidth={400}
          alignSelf="center"
          color="gray.200"
          position="relative"
          bg="gray.800"
          borderRadius="full"
        >
          <Input
            role="SearchInput"
            id="q"
            color="gray.50"
            variant="unstyled"
            placeholder={intl.get("searchOnThePlatform")}
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
