import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Plus, X } from 'lucide-react'
import { useState } from 'react'
import ProductForm from './Form/ProductForm'

export default function AddProductModal() {

    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    return (
        <section className='pb-1'>

            <Button
                onClick={open}
                className="md:px-5 md:py-3 px-3 py-2 flex  text-black bg-[#D9F99D] rounded items-center gap-2"
            >
                <Plus />
                <span className='text-clamp-xs font-base'>
                Sell an item
                </span>
            </Button>

            <Dialog
                open={isOpen}
                as="div"
                className="relative z-10 focus:outline-none"
                onClose={close}
            >
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-full p-4">
                        <DialogPanel
                            transition
                            className="md:w-3/4 w-full rounded bg-[#FFFFFF] p-10 shadow-lg transition-all duration-300 ease-in-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <div className="flex items-center justify-between mb-5">
                                <DialogTitle  className="font-medium text-black text-clamp-sm ">
                                    Sell an item
                                </DialogTitle>
                                <Button
                                    className="inline-flex items-center p-1 font-semibold text-gray-600 duration-300 rounded-full hover:bg-gray-100 text-sm/6"
                                    onClick={close}
                                >
                                    <X />
                                </Button>
                            </div>
                            <ProductForm setOpen={setIsOpen} />

                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </section>
    )
}