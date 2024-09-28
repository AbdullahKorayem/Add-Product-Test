import { categoryOptions, filterOptions } from '@/utils/utils';
import AddProductModal from '../AddProductModal';
import SearchComponent from './SearchComponent';
import SwitchFilter from './SwitchFilter';
import { useProducts } from '@/context/ProductsContext';

function Nav() {
    const { setSwitchValue, setSwitchCategory } = useProducts();
    return (
        <nav className="w-full p-4 bg-white ">
            <div className="flex flex-col md:flex-row items-center justify-around gap-4 mx-auto max-w-[1700px] ">
                <SearchComponent />
                <div className="flex flex-row items-center justify-around w-full gap-4 md:justify-end ">
                    <SwitchFilter title='filter' name='filterBySorting' options={filterOptions} onChange={setSwitchValue} />
                    <SwitchFilter title='Category' name='filterByCategory' options={categoryOptions} onChange={setSwitchCategory} />
                    <AddProductModal />
                </div>
            </div>
        </nav>
    );
}

export default Nav;