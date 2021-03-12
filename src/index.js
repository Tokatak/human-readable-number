module.exports = function toReadable( number ) {
    let digits = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];
    let tenth = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ]
    let underHunded = [ '0', '1', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ]
    if ( number <= 9 )
        return digits[ number ];
    if ( number <= 19 )
        return tenth[ number % 10 ];
    if ( number < 100 ) {
        let tenCount = Math.floor( number / 10 );
        let otherNumber = number % 10;
        let result = underHunded[ tenCount ];
        if ( otherNumber != 0 ) {
            result += ' ' + toReadable( otherNumber );
        }
        return result;
    }
    if ( number <= 999 ) {
        let hunderds = Math.floor( number / 100 );
        let other = number % 100;
        let result = digits[ hunderds ] + ' hundred';
        if ( other != 0 )
            result += ' ' + toReadable( other );

        return result;
    }

    return 'cant parse';
}
