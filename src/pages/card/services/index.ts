export function mapCardData(data) {
  return data.map(item => {
    return {
      id: item.id,
      cardNumber: item.cardNumber,
      cardName: item.cardName,
      amt: item.amt,
      total: item.total,
      effectiveDate: item.effectiveDate
    }
  })
}

export function mapTrandsHoldData(data) {
  return data.map(item => {
    return {
      id: item.custId,
      cardNumber: item.cardNumber,
      cardName: item.cardName,
      personnelName: item.personnelName,
      custName: item.custName,
      phone: item.phone,
      total: item.total,
      createDate: item.createDate,
      expiryDate: item.expiryDate,
      amt: item.amt
    }
  })
}