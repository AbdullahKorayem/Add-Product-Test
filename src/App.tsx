import Nav from "./components/Nav/Nav";
import PaginationComponent from "./components/Pagination/PaginationComponent";
import ProductCard from "./components/ProductItems/ProductCard";
import ProductView from "./components/ProductView";

function App() {
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gray-100 font-body">
            <div className="flex flex-col items-center justify-center h-auto p-8 bg-white rounded w-fit">
                <Nav />
                <ProductView />
                <PaginationComponent />
            </div>
        </div>
    );
}

export default App;
