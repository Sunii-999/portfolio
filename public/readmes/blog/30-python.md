# 🎯 30 Days of Python Challenge

![30 Days of Python Header](/img/blog/python/header.png)

I’m taking on the **30 Days of Python Challenge** to **expand my skill set** and strengthen my foundation in programming.
Python stood out as the perfect language to learn because it’s:

* 🧠 **Beginner-friendly** yet incredibly powerful.
* 💼 **Highly sought after** in the software engineering job market.
* 🌍 Widely used across different fields — from web development and automation to data science, AI, and backend systems.

By completing this challenge, I aim to build strong coding habits, improve problem-solving skills, and open up more career opportunities in the world of software engineering.

Following the infamous [30-days-of-python](https://github.com/Asabeneh/30-Days-Of-Python/tree/master) repository

---

## 🐍 Day 1 - Operations, Types
[Follow along](https://github.com/Asabeneh/30-Days-Of-Python/blob/master/readme.md)

### 🧩 Basic Arithmetic in Python

Python supports several arithmetic operations:

| Operator | Name           | Example   | Result     |
| -------- | -------------- | --------- | ---------- |
| `+`      | Addition       | `2 + 3`   | `5`        |
| `-`      | Subtraction    | `15 - 4`  | `11`       |
| `*`      | Multiplication | `6 * 7`   | `42`       |
| `/`      | Division       | `17 / 3`  | `5.666...` |
| `//`     | Floor Division | `17 // 3` | `5`        |
| `%`      | Modulus        | `17 % 3`  | `2`        |
| `**`     | Exponentiation | `3 ** 2`  | `9`        |

💡 **Note:**
* `/` gives a **float** (decimal value).
* `//` gives an **integer result** by removing the decimal part.

---

### 🧠 Data Types in Python

You can check the type of any value or variable using the `type()` function.

| Example             | Description           | Type      |
| ------------------- | --------------------- | --------- |
| `10`                | Integer               | `int`     |
| `3.14`              | Floating-point number | `float`   |
| `5 + 8j`            | Complex number        | `complex` |
| `"Sunii"`           | String                | `str`     |
| `[1, 2, 3]`         | List                  | `list`    |
| `(9.8, 3.14, 2.7)`  | Tuple                 | `tuple`   |
| `{9.8, 3.14, 2.7}`  | Set                   | `set`     |
| `{"name": "Sunii"}` | Dictionary            | `dict`    |

---

### 💡 Simple Expressions and Examples

#### 🟢 1. Area of a Circle

```python
area = 3.14 * radius ** 2
````

#### 🟢 2. Average of Numbers

```python
average = (a + b + c) / 3
```

#### 🟢 3. Combine Strings

```python
print("Sunii" + " " + "Developers")
# Output: Sunii Developers
```

---

### ✨ Key Takeaways

* The `print()` function displays information on the screen.
* Arithmetic operators let you perform basic math.
* `type()` helps identify what kind of data you’re working with.
* `/` is for normal division, `//` for floor division.
* Strings can be combined using `+`.
* Python supports multiple data types: numbers, strings, lists, tuples, sets, and dictionaries.

---

## 🐍 Day 2 - Variables

[link](https://github.com/Asabeneh/30-Days-Of-Python/blob/master/02_Day_Variables_builtin_functions/02_variables_builtin_functions.md)

### 🧩 Exercises: Level 1

#### 🎯 Tasks

1. Write a Python comment saying `'Day 2: 30 Days of Python programming'`.
2. Declare the following variables:

   * `first_name`
   * `last_name`
   * `full_name`
   * `country`
   * `city`
   * `age`
   * `year`
   * `is_married`
   * `is_true`
   * `is_light_on`
3. Declare multiple variables on one line.

#### ✅ Example Code

```python
# Day 2: 30 Days of Python programming

first_name = 'Sunii'
last_name = 'Apples'
full_name = first_name + " " + last_name
country = "Germany"
city = "Berlin"
age = 23
year = 2001
is_married = True
is_true = False
is_light_on = True
```

---

### 🧩 Exercises: Level 2

#### 🎯 Tasks

1. Check the **data type** of all your variables using the `type()` function.
2. Use the `len()` function to find the **length** of your first name.
3. Compare the length of your first and last names.
4. Perform arithmetic operations using `num_one = 5` and `num_two = 4`.
5. Calculate:

   * Addition, subtraction, multiplication, division
   * Modulus, exponent, and floor division

#### ✅ Example Code

```python
num_one = 5
num_two = 4
print(num_one + num_two)
```

---

### 🧠 Key Concepts Learned

* **Variables and Data Types** – `str`, `int`, `bool`, `float`
* **Built-in Functions** – `print()`, `type()`, `len()`, `input()`
* **Arithmetic Operators** – `+`, `-`, `*`, `/`, `%`, `**`, `//`
* **Boolean Values** – `True`, `False`

---

## 🐍 Day 3 - Operators

### 🧩 1. Assignment Operators

```python
x = 10
y = x
```

### ➕ 2. Arithmetic Operators

```python
a = 10
b = 3
print(a + b)
```

### ⚖️ 3. Comparison Operators

```python
a = 10
b = 5
print(a > b)
```

### 🧠 4. Logical Operators

```python
a = 10
b = 5
print(a > 5 and b < 10)
```

---

### 🧭 Summary

| Category   | Examples                            | Purpose                 |
| ---------- | ----------------------------------- | ----------------------- |
| Assignment | `=`, `+=`, `-=`, `*=`, `/=`         | Assign values           |
| Arithmetic | `+`, `-`, `*`, `/`, `%`, `//`, `**` | Mathematical operations |
| Comparison | `==`, `!=`, `>`, `<`, `>=`, `<=`    | Compare values          |
| Logical    | `and`, `or`, `not`                  | Combine conditions      |

---

### 🧩 Key Takeaways

✅ Operators perform computations and comparisons in Python.
✅ Assignment operators store values in variables.
✅ Arithmetic operators handle math operations.
✅ Comparison and logical operators evaluate conditions to `True` or `False`.

---