class HashTable {
    
    private hashTable = {};

    private createHash = (value: any) => value[0] + String(value).length;

    insert = (values: any[] | any) => {

        if (!Array.isArray(values)) values = [values];

        for (const value of values) {
            const hashValue = String(this.createHash(value));

            if (this.hashTable[hashValue]) { this.hashTable[hashValue].push(value); }
            else { this.hashTable[hashValue] = [value]; }
        }
    }

    // O(1) in real life.
    includes = (value: any) => {
        const hashValue = String(this.createHash(value));

        if (!this.hashTable[hashValue]) return false;

        return this.hashTable[hashValue].includes(value);
    }

    logHashTable = () => console.log(this.hashTable);
}


const hashTable = new HashTable();
const names = [ 'Dr4kk0nnys', 'Bob', 'Alex', 'Creed', 'Anna', 'Joan', 'Timmy' ];

hashTable.insert(names);
hashTable.insert('Dr4kk');
hashTable.logHashTable();

console.log(hashTable.includes('Bob')); // true
console.log(hashTable.includes('Alex')); // true
console.log(hashTable.includes('Bobs')); // false
