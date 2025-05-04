export const filterList = (list, searchParam) => {
    return(
        list.filter((x) => x.name.toLowerCase().includes(searchParam.toLowerCase()) || x.description.toLowerCase().includes(searchParam.toLowerCase()) || x.nickname?.toLowerCase().includes(searchParam.toLowerCase()) )
    )
}