const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}
const getStoredInWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedList = getStoredInWishList();
    if(storedList.includes(id))
    {
        alert(id, ' already exist');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
    }
}
const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if(storedList.includes(id))
    {
        alert(id, ' already exist');
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
}

export {addToStoredReadList}
export {addToStoredWishList}
export {getStoredReadList}
export {getStoredInWishList}