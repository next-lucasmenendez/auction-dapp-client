export default class uint8arrays {
    static uint8ArrayToAsciiString(array) {
        let string = '';
        for (let i = 0; i < array.length; i++) string += String.fromCharCode(array[i]);
        
        return string;
    }

    static concat(arrays) {
        const length = arrays.reduce((acc, curr) => acc + curr.length, 0);
        const output = new Uint8Array(length);
        let offset = 0;
    
        for (const arr of arrays) {
            output.set(arr, offset);
            offset += arr.length;
        }
    
        return output;
    }

    static toString (array, encoding = 'utf8') {
        if (encoding === 'utf8' || encoding === 'utf-8') {
            return new TextDecoder('utf8').decode(array);
        } else if (encoding === 'ascii') {
            return this.uint8ArrayToAsciiString(array);
        }
    
        throw new Error('utf8 or ascii');
    }
}