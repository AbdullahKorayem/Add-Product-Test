import AddProductModal from '../AddProductModal';
import SearchComponent from './SearchComponent';
import SwitchFilter from './SwitchFilter';

function Nav() {
    return (
        <nav className="w-full p-4 bg-white ">
            <div className="flex flex-col md:flex-row items-center justify-around gap-4 mx-auto max-w-[1700px] ">
                <SearchComponent />
                <div className="flex flex-row items-center justify-around w-full gap-4 md:justify-end ">
                    <SwitchFilter />
                    <AddProductModal />
                </div>
            </div>
        </nav>
    );
}

export default Nav;