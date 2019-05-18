
function Worker(name, lastname, fathername, age, specialty, experience){
    this.name = name;
    this.lastname = lastname;
    this.fathername = fathername;
    this.age = age;
    this.specialty = specialty;
    this.experience = experience;


    this.getName = function(){
        return this.name;
    }	
    this.getLastname = function(){
        return this.lastname;
    }	
    this.getFathername = function(){
        return this.fathername;
    }	
    this.getAge = function(){
        return this.age;
    }
	this.getSpecialty = function(){
        return this.specialty;
    }
    this.getExperience = function(){
        return this.experience;
    }

    this.setName = function (parametr) {
        this.name = parametr;
    }
    this.setLastname = function (parametr) {
        this.lastname = parametr;
    }
     this.setFathername = function (parametr) {
        this.fathername = parametr;
    }
    this.setAge = function (parametr) {
        this.age = parametr;
    }
    this.setSpecialty = function (parametr) {
        this.specialty = parametr;
    }
     this.setExperience = function (parametr) {
        this.experience = parametr;
    }

}


function FactoryWorker() {
    this.category;
    this.machine;
    
    Worker.apply(this);

    this.setCategory = function (parametr) {
        this.category = parametr;
    }
    
    this.getCategory = function () {
        return this.category;
    }

    this.setMachine = function (parametr) {
        this.machine = parametr;
    }
    
    this.getMachine = function () {
        return this.machine;
    }

}

function TransportWorker() {
    this.driverLicense;
    this.transportModel;
    
    Worker.apply(this);

    this.setDriverLicense = function (parametr) {
        this.driverLicense = parametr;
    }
    
    this.getDriverLicense = function () {
        return this.driverLicense;
    }

    this.setTransportModel = function (parametr) {
        this.transportModel = parametr;
    }
    
    this.getTransportModel = function () {
        return this.transportModel;
    }
}


let divNotetype = document.querySelector('.divNotetype');
let newCollumn = document.querySelector('.newCollumn');
let notetype = document.querySelector('.notetype');
divNotetype.addEventListener('click', function (e) {
    let target = e.target;
    if (target.classList.contains('notetype')) {
        if (target.value == 'Рабочий') {
            newCollumn.innerHTML = '';
        } 
        else if (target.value == 'Рабочий транспортного предприятия') {
            newCollumn.innerHTML = '';
            newCollumn.innerHTML = transportWorkerInput(newCollumn).innerHTML;
        }
        else if (target.value == 'Рабочий индустриального предприятия') {
            newCollumn.innerHTML = '';
            newCollumn.innerHTML = factoryWorkerInput(newCollumn).innerHTML;
        }
    }
})
    


function transportWorkerInput(grid) {
       
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');

        let driverLicense = document.createElement('input');
        driverLicense.setAttribute('type', 'text');
        driverLicense.setAttribute('id', 'driverLicense');

        let driverLicenseLabel = document.createElement('label');
        driverLicenseLabel.setAttribute('for', 'driverLicense');
        driverLicenseLabel.innerText = 'Водительские права';

        let transportModel = document.createElement('input');
        transportModel.setAttribute('type', 'text');
        transportModel.setAttribute('id', 'transportModel');

        let transportModelLabel = document.createElement('label');
        transportModelLabel.setAttribute('for', 'transportModel');
        transportModelLabel.innerText = 'Модель транспорта';

        grid.appendChild(div1).appendChild(driverLicenseLabel);
        grid.appendChild(div2).appendChild(driverLicense);

        grid.appendChild(div3).appendChild(transportModelLabel);
        grid.appendChild(div4).appendChild(transportModel);

        return grid;
}

function factoryWorkerInput(grid) {

        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let div3 = document.createElement('div');
        let div4 = document.createElement('div');

        let category = document.createElement('input');
        category.setAttribute('type', 'text');
        category.setAttribute('id', 'category');
        let categoryLabel = document.createElement('label');
        categoryLabel.setAttribute('for', 'category');
        categoryLabel.innerText = 'Разряд';

        let machine = document.createElement('input');
        machine.setAttribute('type', 'text');
        machine.setAttribute('id', 'machine');
        let machineLabel = document.createElement('label');
        machineLabel.setAttribute('for', 'machine');
        machineLabel.innerText = 'Модель станка';

        grid.appendChild(div1).appendChild(categoryLabel);
        grid.appendChild(div2).appendChild(category);

        grid.appendChild(div3).appendChild(machineLabel);
        grid.appendChild(div4).appendChild(machine);

        return grid;
}

var i = 0;
function submitForm(){

    if (notetype.value == 'Рабочий') {

        var Worker1 = new Worker();
        Worker1.setName(document.getElementById("name").value);
        Worker1.setLastname(document.getElementById("lastname").value);
        Worker1.setFathername(document.getElementById("fathername").value);
        Worker1.setAge(document.getElementById("age").value);
        Worker1.setSpecialty(document.getElementById("specialty").value);
        Worker1.setExperience(document.getElementById("experience").value);

        i++;
        
        var gr2 = document.getElementById('gr2');

        var div = document.createElement('div');
        div.innerHTML = Worker1.getName();
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = Worker1.getLastname();
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = Worker1.getFathername();
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = Worker1.getAge();
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = Worker1.getSpecialty();
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = Worker1.getExperience();
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = 'рабочий';
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = '<button onclick="delRow(this)">Удалить</button>';
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);
        div.querySelector('button').setAttribute('id', 'row'+i);
        div.querySelector('button').setAttribute('class', 'greenbutton');
    }

    else if (notetype.value == 'Рабочий транспортного предприятия') {

        var Worker1 = new TransportWorker();
        Worker1.setName(document.getElementById("name").value);
        Worker1.setLastname(document.getElementById("lastname").value);
        Worker1.setFathername(document.getElementById("fathername").value);
        Worker1.setAge(document.getElementById("age").value);
        Worker1.setSpecialty(document.getElementById("specialty").value);
        Worker1.setExperience(document.getElementById("experience").value);

        Worker1.setDriverLicense(document.getElementById("driverLicense").value);
        Worker1.setTransportModel(document.getElementById("transportModel").value);

        i++;

        var gr2 = document.getElementById('gr2');

        var div = document.createElement('div');
        div.innerHTML = Worker1.getName();
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = Worker1.getLastname();
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = Worker1.getFathername();
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = Worker1.getAge();
        gr2.appendChild(div);
        div.setAttribute('class', 'rr rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = Worker1.getSpecialty();
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = Worker1.getExperience();
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = 'транспорт';   //Worker1.getDriverLirr rowcense();  
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = '<button onclick="delRow(this)">Удалить</button>';
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);
        div.querySelector('button').setAttribute('id', 'row'+i);
        div.querySelector('button').setAttribute('class', 'greenbutton');
    }

    else if (notetype.value == 'Рабочий индустриального предприятия') {
        var Worker1 = new FactoryWorker();
        Worker1.setName(document.getElementById("name").value);
        Worker1.setLastname(document.getElementById("lastname").value);
        Worker1.setFathername(document.getElementById("fathername").value);
        Worker1.setAge(document.getElementById("age").value);
        Worker1.setSpecialty(document.getElementById("specialty").value);
        Worker1.setExperience(document.getElementById("experience").value);

        Worker1.setCategory(document.getElementById("category").value);
        Worker1.setMachine(document.getElementById("machine").value);
     
        i++;

        var gr2 = document.getElementById('gr2');

        var div = document.createElement('div');
        div.innerHTML = Worker1.getName();
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = Worker1.getLastname();
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = Worker1.getFathername();
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = Worker1.getAge();
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = Worker1.getSpecialty();
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = Worker1.getExperience();
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = 'завод';  //Worker1.getCategory();
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);

        var div = document.createElement('div');
        div.innerHTML = '<button onclick="delRow(this)">Удалить</button>';
        gr2.appendChild(div);
        div.setAttribute('class', 'rr row'+i);
        div.querySelector('button').setAttribute('id', 'row'+i);
        div.querySelector('button').setAttribute('class', 'greenbutton');
    }
}




function delRow(el){
    let paras = document.getElementsByClassName(el.id);
    while (paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
        }
            //alert(el.id);
    }



function resetForm(){

    inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
     //       alert("vasia");
    }
}
