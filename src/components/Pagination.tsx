import { cn } from "@/lib/utils";
import {
  Pagination as BasePagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  query: string;
  page: number;
  totalPages: number;
}
export default function Pagination(props: Props) {
  const { query, page, totalPages } = props;
  return (
    <BasePagination>
      <PaginationContent>
        <PaginationItem
          hx-get={`/partials/users/results?query=${query}&page=${page - 1}`}
          hx-target="#users-list"
          hx-trigger="click"
          hx-swap="innerHTML"
        >
          <PaginationPrevious
            href="#"
            className={cn(
              page <= 1 &&
                "pointer-events-none opacity-50 hover:bg-transparent",
            )}
          />
        </PaginationItem>
        <PaginationItem
          hx-get={`/partials/users/results?query=${query}&page=${page + 1}`}
          hx-target="#users-list"
          hx-trigger="click"
          hx-swap="innerHTML"
          //   disabled={page >= totalPages}
        >
          <PaginationNext
            href="#"
            className={cn(
              page >= totalPages &&
                "pointer-events-none opacity-50 hover:bg-transparent",
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </BasePagination>
  );
}
