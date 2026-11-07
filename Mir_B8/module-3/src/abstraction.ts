abstract class Employee { 
    constructor(
        public name: string,
        protected _baseSalary: number
    ) { }

    get baseSalary(): number { 
        return this._baseSalary
    };

    set baseSalary(newSalary: number) { 
        if (newSalary < 0) { 
            throw new Error("Salary cannot be gegative value")
        };
        this._baseSalary = newSalary
    }

    abstract calculatePay(): number;
    abstract getResources(): string[];
    abstract registerEntryTime(): string;
}

class Manager extends Employee { 
    calculatePay() : number { 
        return this._baseSalary + 5000;
    }

    getResources(): string[] { 
        return [
            "Office Key",
            "Manager Laptop",
            "Parking Pass"
        ]
    }

    registerEntryTime(): string { 
        return "09:00 AM";
    }
};

class Developer extends Employee { 
    calculatePay(): number { 
        return this._baseSalary + 2000;
    }

    getResources(): string[] { 
        return ["Developer Laptop", "Dual Monitors", "IDE License"]
    }

    registerEntryTime(): string { 
        return "9:00 AM"
    }
}