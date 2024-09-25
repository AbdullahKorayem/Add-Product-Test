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
        <>
            <Button
                onClick={open}
                className="px-5 py-3 flex text-sm font-base text-black bg-[#D9F99D] rounded items-center gap-2"
            >
                <Plus />
                Sell an item
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
                            className="w-full max-w-[1500px] rounded-xl bg-[#FFFFFF] p-10 shadow-lg transition-all duration-300 ease-in-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <div className="flex items-center justify-between mb-5">
                                <DialogTitle as="h2" className="text-2xl font-medium text-black">
                                    Sell an item
                                </DialogTitle>
                                <Button
                                    className="inline-flex items-center p-1 font-semibold text-gray-600 duration-300 rounded-full hover:bg-gray-100 text-sm/6"
                                    onClick={close}
                                >
                                    <X />
                                </Button>
                            </div>
                            <ProductForm />

                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}