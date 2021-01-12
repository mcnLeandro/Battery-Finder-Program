//battery = [{},{},{},{}];
//camera  = [{},{},{},{}];
const battery =
    [{
        "batteryName": "WKL-78",
        "capacityAh": 2.3,
        "voltage": 14.4,
        "maxDraw": 3.2,
        "endVoltage": 10,
    },
    {
        "batteryName": "WKL-140",
        "capacityAh": 4.5,
        "voltage": 14.4,
        "maxDraw": 9.2,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-78",
        "capacityAh": 2.5,
        "voltage": 14.5,
        "maxDraw": 10,
        "endVoltage": 5,
    },
    {
        "batteryName": "Wmacro-140",
        "capacityAh": 3.6,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 5,
    },
    {
        "batteryName": "IOP-E78",
        "capacityAh": 6.6,
        "voltage": 14.4,
        "maxDraw": 10.5,
        "endVoltage": 8,
    },
    {
        "batteryName": "IOP-E140",
        "capacityAh": 9.9,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 10,
    },
    {
        "batteryName": "IOP-E188",
        "capacityAh": 13.2,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C65",
        "capacityAh": 4.9,
        "voltage": 14.8,
        "maxDraw": 4.9,
        "endVoltage": 11,
    },
    {
        "batteryName": "RYN-C85",
        "capacityAh": 6.3,
        "voltage": 14.4,
        "maxDraw": 6.3,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C140",
        "capacityAh": 9.8,
        "voltage": 14.8,
        "maxDraw": 10,
        "endVoltage": 12,
    },
    {
        "batteryName": "RYN-C290",
        "capacityAh": 19.8,
        "voltage": 14.4,
        "maxDraw": 14,
        "endVoltage": 12,
    }]
;

const camera =
    [{
        "brand": "Cakon",
        "model": "ABC 3000M",
        "powerConsumptionWh": 35.5,
    },
    {
        "brand": "Cakon",
        "model": "ABC 5000M",
        "powerConsumptionWh": 37.2,
    },
    {
        "brand": "Cakon",
        "model": "ABC 7000M",
        "powerConsumptionWh": 39.7,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9000M",
        "powerConsumptionWh": 10.9,
    },
    {
        "brand": "Cakon",
        "model": "ABC 9900M",
        "powerConsumptionWh": 15.7,
    },
    {
        "brand": "Go MN",
        "model": "UIK 110C",
        "powerConsumptionWh": 62.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 210C",
        "powerConsumptionWh": 64.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 230C",
        "powerConsumptionWh": 26.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 250C",
        "powerConsumptionWh": 15.3,
    },
    {
        "brand": "Go MN",
        "model": "UIK 270C",
        "powerConsumptionWh": 20.3,
    },
    {
        "brand": "VANY",
        "model": "CEV 1100P",
        "powerConsumptionWh": 22,
    },
    {
        "brand": "VANY",
        "model": "CEV 1300P",
        "powerConsumptionWh": 23,
    },
    {
        "brand": "VANY",
        "model": "CEV 1500P",
        "powerConsumptionWh": 24,
    },
    {
        "brand": "VANY",
        "model": "CEV 1700P",
        "powerConsumptionWh": 25,
    },
    {
        "brand": "VANY",
        "model": "CEV 1900P",
        "powerConsumptionWh": 26,
    }]
;

class Battery{
    //         (id , 名前, 容量,      電圧,     最大放電電流(A), 終始電圧)
    constructor(id, name, capacityAh, voltage, maxDraw, endVoltage ){
        this.id = id;
        this.name = name;
        this.capacityA = capacityAh * 3600;
        this.voltage = voltage;
        this.maxDraw = maxDraw;
        this.endVoltage = endVoltage;
    }
}

class Camera{
    //         (id, ブランド、モデル,消費電力(wh))
    constructor(id, brand, model, powerConsumptionWh){
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.powerConsumptionW = powerConsumptionWh * 3600;
    }
}
class Model{
    table = {};
    idCounter = 0;
    
    addAll(arr){

    }
    add(obj){
        
    }
    get(id){

    }
}

class View {
    bodyHtml(){
        let bodyHtml = 
        `   
            <header class="p-2 bg-dark">
                <h2 class="white" >Battery Finder Program</h2>
            </header>
            <main>
                <section id="mainPage" class="container shadow my-5 py-3">
                </section>
                <section id="extraPage" class="container shadow my-5 py-3 d-none">
                </section>
            </main>
            <footer class="mt-auto mb-5 p-3">
                <div class="d-flex justify-content-center">
                    <small>Copyright ©️ <a href="https://twitter.com/leandro83g" target="_blank">Leandro,inc</a>　All <a href="https://twitter.com/leandro83g" target="_blank">Rights</a> Unreserved</small>
                </div>
            </footer>
        `;

        return bodyHtml;
    }

    selecterHtml(labelTitle,models){
        let selecerHtml = 
        `
            <div class="row mt-5">
                <div class=" col-12">
                    <div class="col-12">
                        <h2>${labelTitle}</h2>
                    </div>
                    <div class="col-12 mt-3">
                        <button type="button" class="col-12 col-md-6 p-3 item-left btn btn-lg btn-light dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="text-2vw ">Model</span>
                        </button>
                        <div id="${models}Selecter" class="dropdown-menu col-11" aria-labelledby="dropdownMenuButton">
                            <div class="dropdown-item text-2vw">Model</div>
                            <div class="dropdown-item text-2vw">Another action</div>
                            <div class="dropdown-item text-2vw">Something else here</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        return selecerHtml;
    }
    parameterInputHtml(labelTitle,unit){
        let parameterInputHtml = 
        `
            <div class="row mt-5">
                <div class=" col-12">
                    <div class="col-12">
                        <h2 class="">${labelTitle}</h2>
                    </div>
                    <div class="col-12 mt-3  d-flex">
                        <input id="${unit}Input" type="text" class="col-3 col-md-1 bg-gray text-2vw p-1" value="0">
                        <span class="ml-2 text-2vw">${unit}</span>
                    </div>
                </div>
            </div>
        `;

        return parameterInputHtml;
    }

    listHtml(labelTitle,theadList,modelList,f){
        // let listHtml = 
        // `
        //     <div class="row mt-5">
        //         <div class=" col-12">
        //             <div class="col-12">
        //                 <h2 class="">${labelTitle}</h2>
        //             </div>
        //             <div class="col-12 mt-3  d-flex text-2vw">
        //                 <table class="table table-striped col-12">
        //                     <thead>
        //                       <tr>
        // `;
        // for(let i = 0 ; i < theadList.length ; i++){

        //     listHtml +=
        //     `
        //         <th scope="col">${theadList[i]}</th>
        //     `;

        // }

        // listHtml += 
        // `
        //     </tr>
        // </thead>
        // <tbody>
        //     <tr>
        // `;

        // for(let i = 0 ; i < modelList ; i++){
        //     let currObj = modelList()
        //     if(!f)continue;
        //     listHtml += 
            
        //     `              
        //         <th scope="row">1</th>
        //         <td>Mark</td>
        //         <td>Otto</td>
        //         <td><button type="button" class="btn btn-primary">Show</button></td>
            
        //     `
        // }
        
        // listHtml+=
        // `
        //                       </tr>
        //                     </tbody>
        //                   </table>
        //             </div>
        //         </div>
        //     </div>
        // `

        // return listHtml;
    }

    page404Html(){
        let page404Html = 
        `
            <div class="d-flex justify-content-center text-center">
                <div  class="col-6">
                    <h1 class="ultra-large ">404</h1>
                    <h2>NOT FOUND</h2>
                    <p>Soory.<br> This page doesn't exsit yet, so go back to top page, and enjoy the rest of application service :)</p>

                    <button type="button" class="btn btn-primary w-100 my-3">top page</button>
                </div>
            </div>
        `;

        return page404Html;
    }
}

class Controller{
    target = document.querySelector("body");
    // <header class="p-2 bg-dark">
    //     <h2 class="white" >Battery Finder Program</h2>
    // </header>
    // <main>
    //     <section id="mainPage" class="container shadow my-5 py-3">
    //     </section>
    //     <section id="extraPage" class="container shadow my-5 py-3">
    //     </section>
    // </main>
    // <footer class="mt-auto mb-5 p-3">
    // </footer>
    
    //main   = document.querySelector("main");//???

    displayNone(ele){
        ele.classList.remove("d-block");
        ele.classList.add("d-none");
    }
    displayBlock(ele){
        ele.classList.remove("d-none");
        ele.classList.add("d-block");
    }
    toggleDisplay(ele1, ele2){
        if(ele1.classList.contains("d-block")){
            displayNone(ele1);
            displayBlock(ele2);
        }
        else{
            displayNone(ele2);
            displayBlock(ele1);
        }
    }
    
    getW(v,a){
        return v * a;
    }
    getContinuationPerHour(capacityW, powerConsumptionW){
        return Math.ceil(capacityW / powerConsumptionW);
    }
    top(){
        //View.main()
        //contentEle取得
        //brandSelect設置
        //modelSelect設置
        //paramaterInput設置
        //table設置

        //ここまででviewは完成するけどEventの設定がまだ。
    }

}

