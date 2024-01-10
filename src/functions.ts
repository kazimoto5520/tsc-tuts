function getValue(num: number): number {
  return num;
}

let hello: String;

function voidFunct(hello: String): void {
  hello = "Hello world";
}

voidFunct((hello = "My name"));

getValue(5);

export {};
