export function mapCommissionData(data: any[]) {
  return data.map(item => {
    return {
      personnelName: item.personnelName,
      position: item.position,
      commissionType: item.commissionType,
      name: item.name,
      transSerno: item.transSerno,
      createDate: item.createDate,
      cnAmt: item.cnAmt
    }
  })
}