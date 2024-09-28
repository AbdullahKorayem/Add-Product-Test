export const currencyMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value

    value = value.replace(/\D/g, '')

    value = value.replace(/(\d)(\d{2})$/, '$1.$2')

    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    e.target.value = value

    return e
}

export const formatCurrencyString = (value: string): string => {
    let numericValue = value.replace(/\D/g, '')

    if (numericValue === '') {
        return ''
    }

    const amount = parseInt(numericValue, 10)

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
        .format(amount)
        .slice(1) // Remove the currency symbol
}
