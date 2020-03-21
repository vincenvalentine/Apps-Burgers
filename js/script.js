let popUp = document.getElementById('popUp');
let popUpClose = document.getElementById('popUp-close');
let btn = document.getElementById('btn');
let content = document.getElementById('content');
let overlay = document.getElementById('overlay');


function menuList() {
    let menuList = [{
        'CatId': '1',
        'icon': 'image/burger/png/cheese-burger.png',
        'description': 'Cheese Burger',
    }, {
        'CatId': '2',
        'icon': 'image/burger/png/burger-egg.png',
        'description': 'Burger Salted Egg',
    }, {
        'CatId': '3',
        'icon': 'image/burger/png/burger1.png',
        'description': 'Bacon Burger with sauce cheese',
    }]

    window.localStorage.setItem('menuList', JSON.stringify(menuList))
}


function showPopUp() {
    popUp.style.display = 'block';
    btn.style.display = 'none';
    content.style.display = 'none';
    overlay.classList.add('active');
}


function closebtn() {
    console.log('here');
    popUpClose.addEventListener('click', function() {   
        console.log('here'); 
        popUp.style.display = 'none';
        btn.style.display = 'block';
        content.style.display = 'block';
        overlay.classList.remove('active');
    })
    // displayZeroContent();
}

function btnOrder() {
    let PopUpOrder = document.getElementById('PopUp-Order-list');
    let ArrayOrderList = window.localStorage.getItem('OrderList');

    if (ArrayOrderList == null || ArrayOrderList == '') {

        let newOrderList = [];

        let orderValue = PopUpOrder.options[PopUpOrder.selectedIndex].value;
        let IdOrder = 0;

        OrderListObj = {
            'description': orderValue,
            'id': IdOrder,
        }

        newOrderList.push(OrderListObj);

        window.localStorage.setItem('OrderList', JSON.stringify(newOrderList))
    } else {

        let CurrentArrayOrderList = JSON.parse(ArrayOrderList);
  
        let orderValue = PopUpOrder.options[PopUpOrder.selectedIndex].value;
        let length = CurrentArrayOrderList.length - 1;
        let IdOrder = CurrentArrayOrderList[length].id + 1;
     
        OrderListObj = {
            'description': orderValue,
            'id': IdOrder,
        }

        CurrentArrayOrderList.push(OrderListObj);

        window.localStorage.setItem('OrderList', JSON.stringify(CurrentArrayOrderList));
    }

    displayOrderList();
    popUp.style.display = 'none';
    btn.style.display = 'block';
    content.style.display = 'block';
    overlay.classList.remove('active');

}

function displayOrderList() {
    let ArrayOrderList = window.localStorage.getItem('OrderList');
    let content = document.getElementById('content-wrap');
    ArrayOrderList = JSON.parse(ArrayOrderList);
    let ArraymenuList = window.localStorage.getItem('menuList');
    ArraymenuList = JSON.parse(ArraymenuList);

    
    let boxOrder = [];

    for (let i = 0; i < ArrayOrderList.length; i++) {
        for(let j=0; j < ArraymenuList.length; j++){
            // let icon = ArraymenuList[j].icon;
            // let test = (ArrayOrderList[i].description == ArraymenuList[j].description)? icon : '';
            if(ArrayOrderList[i].description == ArraymenuList[j].description){
                boxOrder.push(`
                    <div class="content-box">
                        <p>${ArrayOrderList[i].description}</p>
                        <img src="${ArraymenuList[j].icon}" alt="" srcset="">
                    </div>
                    `)
            } else{
                // console.log('yes');
                
            }
        }
        

    }
    join = boxOrder.join('');
    content.innerHTML = join;

}

function displayZeroContent(){
    let ArrayOrderList = window.localStorage.getItem('OrderList');
    ArrayOrderList = JSON.parse(ArrayOrderList);

    let content = document.getElementById('content-wrap');

    let zero = ((ArrayOrderList == null) || (ArrayOrderList == undefined))? 'none' : '';

    content.style.display = zero;

}

function clearStorage() {
    localStorage.removeItem("OrderList");
    location.reload();
    // displayZeroContent();
}

menuList();
closebtn();
displayOrderList();

