import Nav from "./components/Nav/Nav";
import PaginationComponent from "./components/Pagination/PaginationComponent";
import ProductView from "./components/ProductView";

function App() {
    return (
        <div className="flex items-center justify-center w-screen overflow-x-hidden bg-gray-100 h-dvh font-body ">
            <div className="flex flex-wrap items-center justify-center h-auto p-8 bg-white rounded md:flex-col">
                <Nav />
                <ProductView />
                <PaginationComponent />
            </div>
        </div>
    );
}

export default App;
