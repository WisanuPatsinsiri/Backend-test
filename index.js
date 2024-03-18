var express = require("express")
var Sequelize = require("sequelize")
var app = express()

app.use(express.json())

const sequelize_menu = new Sequelize("database","username","password",{
    host: "localhost",
    dialect: "sqlite",
    storage: "./Database/SQLMenu.sqlite",
})

const Menu = sequelize_menu.define("menu",{
    Menu_Id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    Name:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    Price:{
        type:Sequelize.INTEGER,
        allowNull: false,
    },
    Type:{
        type:Sequelize.STRING,
    },
})

sequelize_menu.sync()

//------------------------------------ Customer

const sequelize_Customer = new Sequelize("database","username","password",{
    host: "localhost",
    dialect: "sqlite",
    storage: "./Database/SQLCustomer.sqlite",
})
1
const Customer = sequelize_Customer.define("customer",{
    Customer_Id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    Name:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    Phone:{
        type:Sequelize.INTEGER,
        allowNull: false,
    },
    Email:{
        type:Sequelize.CHAR,
        allowNull:false,
    },
    Sex:{
        type:Sequelize.STRING,
        allowNull:false,
    },
})

sequelize_Customer.sync()


//------------------------------------ Employee

const sequelize_Employee = new Sequelize("database","username","password",{
    host: "localhost",
    dialect: "sqlite",
    storage: "./Database/SQLEmployee.sqlite",
})

const Employee = sequelize_Employee.define("employee",{
    Employee_Id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    Name:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    Phone:{
        type:Sequelize.INTEGER,
        allowNull: false,
    },
    Email:{
        type:Sequelize.CHAR,
        allowNull:false,
    },
    Sex:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    Position:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    
})

sequelize_Employee.sync()

//------------------------------------ Room

const sequelize_Room = new Sequelize("database","username","password",{
    host: "localhost",
    dialect: "sqlite",
    storage: "./Database/SQLRoom.sqlite",
})

const Room = sequelize_Room.define("room",{
    Room_Id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    Type:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    Number:{
        type:Sequelize.INTEGER,
        allowNull: false,
    },
})

sequelize_Room.sync()

//------------------------------------ Bakery

const sequelize_Bakery= new Sequelize("database","username","password",{
    host: "localhost",
    dialect: "sqlite",
    storage: "./Database/SQLBakery.sqlite",
})

const Bakery = sequelize_Bakery.define("bakery",{
    Bakery_Id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    Type:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    Pound:{
        type:Sequelize.INTEGER,
        allowNull: false,
    },
})

sequelize_Bakery.sync()




 //----------------------------------- app Menus

    app.get("/Menus",(req,res) =>{
        Menu.findAll().then((Menus) =>{
            res.json(Menus)
        }).catch((err) =>{
            res.status(500).send(err)
        })
    })

    app.get("/Menus/:Menu_Id",(req,res) =>{
        Menu.findByPk(req.params.Menu_Id).then((menu) =>{
            if (!menu){
                res.status(404).send("Menu not found")
            }else{
                res.json(menu)
            }
        }).catch((err) =>{
            res.status(500).send(err)
        })
    })

    app.post("/Menus", (req,res)=>{
        Menu.create(req.body).then((menu) =>{
            res.send(menu)
        }).catch((err) => {
            res.status(500).send(err)
        })
    })

    app.put("/Menus/:Menu_Id",(req,res) =>{
        Menu.findByPk(req.params.Menu_Id).then((menu) =>{
            if (!menu){
                res.status(404).send("Menu not found")
            }else{
                menu.update(req.body).then(() =>{
                    res.send(menu)
                }).catch((err) =>{
                    res.status(500).send(err)
                })
            }
        }).catch((err) =>{
            res.status(500).send(err)
        })
    })


    app.delete("/Menus/:Menu_Id", (req, res) => {
        Menu.findByPk(req.params.Menu_Id)
            .then((menu) => {
                if (!menu) {
                    res.status(404).send("Menu not found");
                } else {
                    menu.destroy().then(() => {
                        res.send(menu);
                    }).catch((err) => {
                        res.status(500).send(err);
                    });
                }
            }).catch((err) => {
                res.status(500).send(err);
            })
    })

//---------------------------------------------app Customers

    app.get("/Customers",(req,res) =>{
        Customer.findAll().then((Customers) =>{
            res.json(Customers)
        }).catch((err) =>{
            res.status(500).send(err)
        })
    })

    app.get("/Customers/:Customer_Id",(req,res) =>{
        Customer.findByPk(req.params.Customer_Id).then((customer) =>{
            if (!customer){
                res.status(404).send("Customer_ID not found")
            }else{
                res.json(customer)
            }
        }).catch((err) =>{
            res.status(500).send(err)
        })
    })
    app.post("/Customers", (req,res)=>{
        Customer.create(req.body).then((customer) =>{
            res.send(customer)
        }).catch((err) => {
            res.status(500).send(err)
        })
    })

    app.put("/Customers/:Customer_Id",(req,res) =>{
        Customer.findByPk(req.params.Customer_Id).then((customer) =>{
            if (!customer){
                res.status(404).send("Customer_ID not found")
            }else{
                customer.update(req.body).then(() =>{
                    res.send(customer)
                }).catch((err) =>{
                    res.status(500).send(err)
                })
            }
        }).catch((err) =>{
            res.status(500).send(err)
        })
    })
    app.delete("/Customers/:Customer_Id", (req, res) => {
        Customer.findByPk(req.params.Customer_Id)
            .then((customer) => {
                if (!customer) {
                    res.status(404).send("Customer_ID not found");
                } else {
                    customer.destroy().then(() => {
                        res.send(customer);
                    }).catch((err) => {
                        res.status(500).send(err);
                    });
                }
            }).catch((err) => {
                res.status(500).send(err);
            })
    })

//------------------------------------------app Employee
app.get("/Employees",(req,res) =>{
    Employee.findAll().then((Employee) =>{
        res.json(Employee)
    }).catch((err) =>{
        res.status(500).send(err)
    })
})

app.get("/Employees/:Employee_Id",(req,res) =>{
    Employee.findByPk(req.params.Employee_Id).then((employee) =>{
        if (!employee){
            res.status(404).send("Employee_ID not found")
        }else{
            res.json(employee)
        }
    }).catch((err) =>{
        res.status(500).send(err)
    })
})

app.post("/Employees", (req,res)=>{
    Employee.create(req.body).then((employee) =>{
        res.send(employee)
    }).catch((err) => {
        res.status(500).send(err)
    })
})

app.put("/Employees/:Employee_Id",(req,res) =>{
    Employee.findByPk(req.params.Employee_Id).then((employee) =>{
        if (!employee){
            res.status(404).send("Employee_ID not found")
        }else{
            employee.update(req.body).then(() =>{
                res.send(employee)
            }).catch((err) =>{
                res.status(500).send(err)
            })
        }
    }).catch((err) =>{
        res.status(500).send(err)
    })
})

app.delete("/Employees/:Employee_Id", (req, res) => {
    Employee.findByPk(req.params.Employee_Id)
        .then((employee) => {
            if (!employee) {
                res.status(404).send("Employee_ID not found");
            } else {
                employee.destroy().then(() => {
                    res.send(employee);
                }).catch((err) => {
                    res.status(500).send(err);
                });
            }
        }).catch((err) => {
            res.status(500).send(err);
        })
})

//------------------------------------------app Room
app.get("/Rooms",(req,res) =>{
    Room.findAll().then((Room) =>{
        res.json(Room)
    }).catch((err) =>{
        res.status(500).send(err)
    })
})

app.get("/Rooms/:Room_Id",(req,res) =>{
    Room.findByPk(req.params.Room_Id).then((room) =>{
        if (!room){
            res.status(404).send("Room_ID not found")
        }else{
            res.json(room)
        }
    }).catch((err) =>{
        res.status(500).send(err)
    })
})

app.post("/Rooms", (req,res)=>{
    Room.create(req.body).then((room) =>{
        res.send(room)
    }).catch((err) => {
        res.status(500).send(err)
    })
})

app.put("/Rooms/:Room_Id",(req,res) =>{
    Room.findByPk(req.params.Room_Id).then((room) =>{
        if (!room){
            res.status(404).send("Room_Update not found")
        }else{
            room.update(req.body).then(() =>{
                res.send(room)
            }).catch((err) =>{
                res.status(500).send(err)
            })
        }
    }).catch((err) =>{
        res.status(500).send(err)
    })
})
app.delete("/Rooms/:Room_Id", (req, res) => {
    Room.findByPk(req.params.Room_Id)
        .then((room) => {
            if (!room) {
                res.status(404).send("Room_Delete not found");
            } else {
                room.destroy().then(() => {
                    res.send(room);
                }).catch((err) => {
                    res.status(500).send(err);
                });
            }
        }).catch((err) => {
            res.status(500).send(err);
        })
})
//------------------------------------------app Bakery
app.get("/Bakerys",(req,res) =>{
    Bakery.findAll().then((Bakery) =>{
        res.json(Bakery)
    }).catch((err) =>{
        res.status(500).send(err)
    })
})

app.get("/Bakerys/:Bakery_Id",(req,res) =>{
    Bakery.findByPk(req.params.Bakery_Id).then((bakery) =>{
        if (!bakery){
            res.status(404).send("Bakery_ID not found")
        }else{
            res.json(bakery)
        }
    }).catch((err) =>{
        res.status(500).send(err)
    })
})

app.post("/Bakerys", (req,res)=>{
    Bakery.create(req.body).then((bakery) =>{
        res.send(bakery)
    }).catch((err) => {
        res.status(500).send(err)
    })
})

app.put("/Bakerys/:Bakery_Id",(req,res) =>{
    Bakery.findByPk(req.params.Bakery_Id).then((bakery) =>{
        if (!bakery){
            res.status(404).send("Bakery_Update not found")
        }else{
            bakery.update(req.body).then(() =>{
                res.send(bakery)
            }).catch((err) =>{
                res.status(500).send(err)
            })
        }
    }).catch((err) =>{
        res.status(500).send(err)
    })
})

app.delete("/Bakerys/:Bakery_Id", (req, res) => {
    Bakery.findByPk(req.params.Bakery_Id)
        .then((bakery) => {
            if (!bakery) {
                res.status(404).send("Bakery_Delete not found");
            } else {
                bakery.destroy().then(() => {
                    res.send(bakery);
                }).catch((err) => {
                    res.status(500).send(err);
                });
            }
        }).catch((err) => {
            res.status(500).send(err);
        })
})
//-------------------------------------

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening on port ${port}`));