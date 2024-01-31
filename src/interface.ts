// Interface

interface Product {
  name: String;
  piece: Number;
}

const product: Product = {
  name: "Shoe",
  piece: 10,
};

interface allStudent {
  student_name: String;
  student_id: Number;
  age: Number;
}

class Student {
  student_name: String;
  student_id: Number;
  age: Number;

  constructor(student_name: String, student_id: Number, age: Number) {
    (this.student_id = student_id),
      (this.student_name = student_name),
      (this.age = age);
  }
}

const student: allStudent = new Student("Mesha", 2022, 20);

// Generics
type names = Array<String>;

const MyName: names = ["mesha", "kazimoto", "Daniel"];
