import AddProductModal from "./components/AddProductModal";

function App() {
    return (
        <body className="font-body">
            <div className="flex justify-center items-center h-screen ">
                <h1 className='bg-gray-100 text-4xl p-20 rounded-md shadow-sm'>Setting up everything new Product</h1>
                <AddProductModal />
            </div>
        </body>
    )
}

export default App;
