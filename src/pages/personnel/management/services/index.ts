export function mapPersonnelData(data: any[]) {
  return data.map(item => {
    return {
      id: item.id,
      name: item.name,
      position: item.position,
      phone: item.phone,
      basicWage: item.basicWage,
      status: item.status,
      entryTime: item.entryTime,
      jobNumber: item.jobNumber,
    }
  })
}