// Check todolist
if (parsetoDoList.length == 0) {
    // Show nodata
    containerNoData.style.display = 'block';
    containerTodoList.style.display = 'none';

    containerNoData.Name = containerNoData.Name + ' hide';
    containerNoData.List.push('hide');
} else {
    // Hide nodata
    containerNoData.style.display = 'none';
    containerTodoList.style.display = 'block';
}

parsetoDoList = [];

if (parsetoDoList) {

} else {

}

if (parsetoDoList.length) {

} else {

}

if (parsetoDoList > 0) {

} else {

}


containerNoData.style.display = (parsetoDoList) ? 'none' : 'block';
containerTodoList.style.display = (parsetoDoList) ? 'block' : 'none';

