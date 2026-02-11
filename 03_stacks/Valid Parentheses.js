function isValid(s) {
    const stack = [];
    const mapping = { ")": "(", "]": "[", "}": "{" };

    for (const char of s) {
        if (mapping[char]) {
            const topElement = stack.pop();
            if (mapping[char] !== topElement) return false;
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}
