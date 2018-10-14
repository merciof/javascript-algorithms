function Stack() {

    let items = [];

    this.push = function push(element) {
        items.push(element);
    }

    this.pop = function pop() {
        return items.pop();
    }

    this.peek = function peek() {
        return items[items.length - 1];
    }

    this.isEmpty = function isEmpty() {
        return items.length == 0;
    }

    this.size = function size() {
        return items.length;
    }

    this.clear = function clear() {
        items = [];
    }

    this.print = function print() {
        console.log(items.toString());
    }

}