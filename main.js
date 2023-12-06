//write your code here to make the tests pass

class Document{
    constructor(EmployeeName){
        this.EmployeeName = EmployeeName
    }
}

class Employee{
    constructor(name){
       this.name = name 
    }
    work(office){
        for (let i = 0; i < 10; i++){
            let newDocument = new Document(this.name)
            office.documents.push(newDocument)
        }
    }
}

class Manager {

    constructor( name ){
        this.employees = []
        this.name = name
    }
    hireEmployee(name){
        let newEmployee = new Employee (name)
        this.employees.push(newEmployee)
    }
    askEmployeesToWork(office){
        for (let i in this.employees){
            this.employees[i].work(office)
        }
       
        
    }
    
}

class Cleaner{
    constructor(name){
        this.name = name
    }
    clean(){
        console.log("Clean")
    }
}

class Office{
    constructor(documents,managers,cleaners){
        this.documents = []
        this.managers = []
        this.cleaners = []
    }
    hireCleaner(name){
        let newCleaner = new Cleaner (name)
        this.cleaners.push(newCleaner)
    }
    hireManager(name){
        let newManager = new Manager (name)
        this.managers.push(newManager)
    }
    startWorkDay(){
        for(let i in this.managers){
            this.managers[i].askEmployeesToWork(this)
            
        }
        for(let i in this.cleaners){
            this.cleaners[i].clean()
        }
        


    }
}