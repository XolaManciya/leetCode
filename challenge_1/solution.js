/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (number) =>{
            if (number === val){
                return true
            }
            else{throw new Error("Not Equal")}
        },
        notToBe:(number)=>{
            if (number === val){
                throw new Error("Equal")
            }
            else{return true}
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */