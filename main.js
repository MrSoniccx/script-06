class Main {

    factorial (n) {
        var total = 1; 
        for (let i=1; i<=n; i++) {
            total = total * i; 
        }
        return total; 
    }

    firstOne(e){
        let total = 1
        for (let i=1;i<=e;i++){
            total += (1/this.factorial(i))
        }
        return total

        }

    secondOne(e,x){
        let total = 1
        for (let i=1;i<=e;i++){
            total += (Math.pow(x,i)/this.factorial(i))
        }
        return total

        }
}


let start = new Main()

console.log(start.firstOne(5))
console.log(start.secondOne(5,1))