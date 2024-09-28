import Nav from "./components/Nav/Nav";
import PaginationComponent from "./components/Pagination/PaginationComponent";
import ProductView from "./components/ProductView";

function App() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 font-body">
            <div className="container px-4 py-8 mx-auto my-auto">
                <div className="overflow-hidden bg-white rounded-lg shadow-sm ">
                    <Nav />
                    <div className="flex items-center justify-center p-2 sm:p-2 md:p-3">
                        <ProductView />
                    </div>
                    <div className="p-4 sm:p-6 md:p-8">
                        <PaginationComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;