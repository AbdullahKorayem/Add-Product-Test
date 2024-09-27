import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComponent() {
    return (
        <Pagination className="pt-5">
            <PaginationContent className="flex items-center justify-between w-full">
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <div className="flex items-center justify-center flex-grow space-x-2">
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            href="#"
                            className="border-[#D9F99D] border-2"
                            isActive
                        >
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                </div>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}