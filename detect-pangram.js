/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */

function isPangram(string) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    string = string.toLowerCase().split('');
    let found;

    for (let i = 0; i < alphabet.length; i++) {
        found = false;
        for (let j = 0; j < string.length; j++) {
            if (alphabet[i] == string[j]) {
                found = true;
            }
        }
        if (found == false) return false;
    }
    return true;
}