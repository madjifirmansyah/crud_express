// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Todo = db.define('todolist', {
    // Define attributes
    rencana_pekerjaan: {
        type: DataTypes.STRING
    },
    waktu_mulai: {
        type: DataTypes.DATE
    },
    waktu_berakhir: {
        type: DataTypes.DATE
    },
    tanda: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
}, {
    // Freeze Table Name
    freezeTableName: true
});

// Export model Product
export default Todo;