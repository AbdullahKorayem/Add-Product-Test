import Nav from "./components/Nav/Nav";
import PaginationComponent from "./components/Pagination/PaginationComponent";
import ProductCard from "./components/ProductItems/ProductCard";

function App() {
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gray-100 font-body">
            <div className="flex flex-col items-center justify-center w-full h-auto p-8 bg-white rounded max-w-screen-2xl">
                <Nav />
                <div className="flex gap-6">
                    
                <ProductCard />
                <ProductCard />
                <ProductCard />
                </div>
                <PaginationComponent />
            </div>
        </div>
    );
}

export default App;
