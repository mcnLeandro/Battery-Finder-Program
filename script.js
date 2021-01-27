//battery = [{},{},{},{}];
//camera  = [{},{},{},{}];
//brand   = [{},{},{},{}];
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
        "brand_id": 1,
        "model": "ABC 3000M",
        "powerConsumptionWh": 35.5,
    },
    {
        "brand_id": 1,
        "model": "ABC 5000M",
        "powerConsumptionWh": 37.2,
    },
    {
        "brand_id": 1,
        "model": "ABC 7000M",
        "powerConsumptionWh": 39.7,
    },
    {
        "brand_id": 1,
        "model": "ABC 9000M",
        "powerConsumptionWh": 10.9,
    },
    {
        "brand_id": 1,
        "model": "ABC 9900M",
        "powerConsumptionWh": 15.7,
    },
    {
        "brand_id": 2,
        "model": "UIK 110C",
        "powerConsumptionWh": 62.3,
    },
    {
        "brand_id": 2,
        "model": "UIK 210C",
        "powerConsumptionWh": 64.3,
    },
    {
        "brand_id": 2,
        "model": "UIK 230C",
        "powerConsumptionWh": 26.3,
    },
    {
        "brand_id": 2,
        "model": "UIK 250C",
        "powerConsumptionWh": 15.3,
    },
    {
        "brand_id": 2,
        "model": "UIK 270C",
        "powerConsumptionWh": 20.3,
    },
    {
        "brand_id": 3,
        "model": "CEV 1100P",
        "powerConsumptionWh": 22,
    },
    {
        "brand_id": 3,
        "model": "CEV 1300P",
        "powerConsumptionWh": 23,
    },
    {
        "brand_id": 3,
        "model": "CEV 1500P",
        "powerConsumptionWh": 24,
    },
    {
        "brand_id": 3,
        "model": "CEV 1700P",
        "powerConsumptionWh": 25,
    },
    {
        "brand_id": 3,
        "model": "CEV 1900P",
        "powerConsumptionWh": 26,
    }]
;
const brand = [
    {
        "camera_ids":{ 1:1, 2:2, 3:3, 4:4, 5:5 },
        "name":"Cakon",
    },
    {
        "camera_ids":{ 6:6, 7:6, 8:6, 9:6, 10:10 },
        "name":"Go MN",
    },
    {
        "camera_ids":{ 11:11, 12:12, 13:13, 14:14, 15:15 },
        "name":"VANY",
    }]
;




class Model{
    static table = {};
    static idCounter = 1;
  
    constructor(id){
      this.id = id;
    }
  
    static getClassName(){
      return this.name;
    }
    static initializeTable(key){
      this.table[key] = {};
    }
    static add(obj){
  
      let i = this.idCounter++;
      let className = this.getClassName();
  
      if(!this.table[className])this.initializeTable(className);
  
      obj.id = i;
      this.table[className][i] = obj;
  
    }
    static find(id){
  
      let className = this.getClassName();
      return this.table[className][id] 
  
    }
    static all(){
        let className = this.getClassName();
        return this.table[className]
    }
}




class Battery extends Model{
    //          (名前,   容量,      電圧,    最大放電電流(A), 終始電圧)
    constructor(id, name, capacityAh, voltage, maxDraw, endVoltage ){
      super(id);
      this.name = name;
      this.capacityAh = capacityAh;
      this.voltage = voltage;
      this.maxDraw = maxDraw;
      this.endVoltage = endVoltage;
    }

    getW(v,a){
        return  v* a;
    }
    getContinuationPerHour(capacityW, powerConsumptionW){
        return Math.ceil(capacityW / powerConsumptionW);
    }
}
class Camera extends Model{
    //         ( ブランドid、モデル,消費電力(wh))
    constructor(id, brand_id, model, powerConsumptionWh){
      super(id);
      this.brand_id = brand_id;
      this.model = model;
      this.powerConsumptionWh = powerConsumptionWh;
    }
}
class Brand extends Model{
    constructor(id, camera_ids, name){
      super(id);
      this.camera_ids = camera_ids;
      this.name = name;
  
    }
}




//battery初期化
for (let i = 0; i < battery.length; i++) {
    let currObj = battery[i];
  
    let batteryName = currObj["batteryName"];
    let capacityAh = currObj["capacityAh"];
    let voltage = currObj["voltage"];
    let maxDraw = currObj["maxDraw"];
    let endVoltage = currObj["endVoltage"];
  
    let newBttery = new Battery(null, batteryName, capacityAh, voltage, maxDraw, endVoltage);
    
    Battery.add(newBttery);
  
}
//camera初期化
for (let i = 0; i < camera.length; i++) {
    let currObj = camera[i];

    let brand_id = currObj["brand_id"];
    let model = currObj["model"];
    let powerConsumptionWh = currObj["powerConsumptionWh"];

    let newCamera = new Camera(null, brand_id, model, powerConsumptionWh);

    Camera.add(newCamera);
  
}
//brand初期化
for (let i = 0; i < brand.length; i++) {
    let currObj = brand[i];

    let camera_ids = currObj["camera_ids"];
    let name = currObj["name"];

    let newBrand = new Brand(null, camera_ids, name);

    Brand.add(newBrand);
    
}

console.log(Model.table)







class View {
    static initializePageHtml(){

        let bodyHtml = 
        `   
            <header class="p-3 bg-dark">
                <h2 class="white" >Battery Finder Program</h2>
            </header>
            <main>
                <section id="main" class="container shadow my-5 py-3">
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
    static h2(title){

        let h2Html = 
        `
            <div class="col-12 mt-3">
                <h2>${title}</h2>
            </div>
        `
        return h2Html;

    }
    static selecter(id, models, column,value){

        let selecterHtml = 
        `
            <div class="col-12 mt-3">
                <select id="${id}" class="custom-select col-12 col-md-6 p-3 text-2vw" >
                    <option class="p-3 text-2vw" value="0">Choose...</option>
        `
        Object.keys(models).map(key => {
            let data = models[key][column];
            selecterHtml += 
            `
                <option class="p-3 text-2vw" value="${key}" ${key == value? "selected":""}>${data}</option>                
            `;
        });

        selecterHtml += 
        `
                </select>
            </div>
            
        `

        return selecterHtml;

    }
    static unitInput(id, unit,value){

        let parameterInputHtml = 
        `
            
            <div class="col-12 mt-3  input-group d-flex">
                <input id="${id}" value="${value}" type="number"  max="100" min="0" class="form-control col-3 col-md-2 text-2vw p-3" placeholder="0" >
                <span class="ml-2 text-2vw align-self-end">${unit}</span>
            </div>
        `;

        return parameterInputHtml;
        
    }
    //listHTMLは残念ながら使い回し不可の予感
    static table(model,f){

        let tableHtml = 
        `
            <div class="col-12 mt-3  d-flex text-2vw">
                <table class="table table-striped col-12">
                <thead>
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Lasting</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
        `;

        
        Object.keys(model).map(function(key){

            tableHtml += 
            
            `
                <tr>  
                    <th scope="row">${model[key]["id"]}</th>
                    <td>${model[key]["name"]}</td>
                    <td>${f(model[key])}</td>
                    <td><button type="button" class="btn btn-primary">Show</button></td>
                </tr>
            `
        })
        
        tableHtml+=
        `
                             
                    </tbody>
                    </table>
            </div>
        `

        return tableHtml;

    }
    static notFound404(){

        let page404Html = 
        `
            <div class="d-flex justify-content-center text-center">
                <div  class="col-6">
                    <h1 class="ultra-large ">404</h1>
                    <h2>NOT FOUND</h2>
                    <p>Soory.<br> This page doesn't exsit yet, so go back to top page, and enjoy the rest of application service :)</p>

                    <button type="button" class="col-12 col-md-6 btn btn-primary w-100 my-3">top page</button>
                </div>
            </div>
        `;

        return page404Html;

    }
}


class Ele{
    static target = {
        "body" : document.getElementById("body"),
        "main" : document.getElementById("main"), 
    }

    static refreshAll(){
        Object.keys(this.target).forEach(key => {
            this.target[key] = document.getElementById(key)
        })
    }
    static refresh(id){
        this.target[id] = document.getElementById(id)
    }
    static add(id){
        if(!this.target[id]){
          this.target[id] = document.getElementById(id);
        }
    }
    static get(id){
        return this.target[id]
    }
}

class Controller{

    
    static initializePage(){

        Ele.get("body").innerHTML = View.initializePageHtml();
        Ele.refreshAll()

    }
    static top(objs1, value1, objs2, value2 , objs3 ,value3){


        let id1 = "brandSelect"
        let id2 = "modelSelect"
        let id3 = "paramaterInput"
        let id4 = "show"

        this.initializePage()

        Ele.get("main").innerHTML += View.h2("step1 : Select Your Brand")
        Ele.get("main").innerHTML += View.selecter(id1, objs1, "name", value1)

        Ele.get("main").innerHTML += View.h2("step2 : Select Your Model")
        Ele.get("main").innerHTML += View.selecter(id2, objs2, "model", value2)

        Ele.get("main").innerHTML += View.h2("step3 : Input Accessory Power Comsumption")
        Ele.get("main").innerHTML += View.unitInput(id3,"w",value3)

        // Ele.get("main").innerHTML += View.h2("step4: Choose Your Battery")

        
        Ele.add(id1);
        Ele.add(id2);
        Ele.add(id3);
            
        //総消費電力
        // let d = Ele.get(id2).value;
        // let a = Camera.find(d) != null? Camera.find(d).powerConsumptionWh : 0 ;
        // let b = parseInt(value3)
        // let c = a + b;
        // console.log(d)
        // console.log(a)
        // console.log(b)
        // console.log(c)


        Ele.get(id1).addEventListener("mouseleave", function(){
            
            Ele.refresh(id1);
            if(Ele.get(id1).value != value1){

                //データ型をそろえるためにhtmlの"Choose..."の部分のvalue属性に0を設定しています。
                if(Ele.get(id1).value == 0){

                    Controller.top(
                        Brand.all() , 0,
                        Camera.all(), Ele.get(id2).value,
                        objs3, value3
                    )

                }
                else{

                    let id = Ele.get(id1).value
                    let newObjs = {};

                    Object.keys(Brand.find(id).camera_ids).forEach(key => {
                        newObjs[key] = Camera.find(key)
                    });
                    
                    Controller.top(
                        objs1  , Ele.get(id1).value,
                        newObjs, value2,
                        objs3  , value3
                    );

                }

            }

        });

        Ele.get(id2).addEventListener("mouseleave",function(){

            Ele.refresh(id2);
            
            Controller.top(
                objs1, value1,
                objs2, Ele.get(id2).value,
                objs3, value2
            );

        })
        Ele.get(id3).addEventListener("mouseleave",function(){

            Ele.refresh(id3);

            let Inputvalue = (Ele.get(id3).value < 100)?(Ele.get(id3).value > 0)? Ele.get(id3).value: 0 : 100 ;
            
            Controller.top(
                objs1, value1,
                objs2, value2,
                objs3, Inputvalue
            );

        })        
        // this.target["main"].innerHTML += View.listHtml(step4,step4Title, Battery.all())
        
        
        // let a = Camera.find(Ele.get(id1).value).powerConsumptionWh + Ele.get(id3).value
        // console.log(a)
        
        

    }
    static notFound404(){
        this.target["main"].innerHTML = View.notFound404()
    }
}

let objs1 = Brand.all()
let objs2 = Camera.all()
let objs3 = null;


Controller.top(
    objs1, null,
    objs2, null,
    objs3, null,
)
