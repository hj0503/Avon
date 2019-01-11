export function mapPersonnelData(data: any[]) {
  return data.map(item => {
    return {
      id: item.id,
      name: item.name,
      position: item.position,
      basicWage: item.basicWage,
      jobNumber: item.jobNumber
    }
  })
}