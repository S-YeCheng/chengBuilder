const getComById = (comId:string,comList:any[])=>{
    let treeList = [...comList]
    for(let i = 0;i<treeList.length;i++){
        if(treeList[i].comId === comId){
            return treeList[i]
        }
        if(treeList[i]?.childList?.length > 0){
            treeList.push(...treeList[i].childList)
        }
    }
}

export {getComById}
