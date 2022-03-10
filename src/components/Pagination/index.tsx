import { Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";
import { usePagination } from "../../hooks/usePagination";

export interface PaginationProps {
  onPageChange: (pageNumber: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

export const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 2,
  currentPage,
  pageSize,
}: PaginationProps) => {
  const paginationRange =
    usePagination({
      currentPage,
      totalCount,
      siblingCount,
      pageSize,
    }) || [];

  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      my="8"
      justify="space-between"
      align="center"

    >
      <Stack direction="row" spacing="2">
        {paginationRange.map((pageNumber) => {
     
          return (
            <PaginationItem
              key={pageNumber}
              isCurrent={pageNumber === currentPage}
              number={pageNumber}
              onClick={() => onPageChange(pageNumber)}
            />
          );
        })}
      </Stack>
    </Stack>
  );
};
