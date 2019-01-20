export function mapPerformanceData(data: any[]) {
  return data.map(item => {
    return {
      personnelName: item.personnelName,
      position: item.position,
      transType: item.transType,
      name: item.name,
      transSerno: item.transSerno,
      createDate: item.createDate,
      cnAmt: item.cnAmt
    }
  })
}