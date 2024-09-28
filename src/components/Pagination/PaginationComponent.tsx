import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { useProducts } from '@/context/ProductsContext';

export default function PaginationComponent() {
    const { currentPage, nextPage, prevPage, totalPages, setCurrentPage } = useProducts();

    return (
        <Pagination className="pt-5">
            <PaginationContent className="flex items-center justify-between w-full">
                <PaginationItem>
                    <PaginationPrevious href="#" onClick={prevPage} />
                </PaginationItem>
                <div className="flex items-center justify-center flex-grow space-x-2">
                    {/* Dynamically generate page numbers based on totalPages */}
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink
                                href="#"
                                className={index + 1 === currentPage ? "border-[#D9F99D] border-2" : ""}
                                isActive={index + 1 === currentPage}
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    {totalPages > 3 && <PaginationItem><PaginationEllipsis /></PaginationItem>}
                </div>
                <PaginationItem>
                    <PaginationNext href="#" onClick={nextPage} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
