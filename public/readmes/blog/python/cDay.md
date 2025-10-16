# 🐍 Day 3: Python Operators

Operators are special symbols or keywords used to perform operations on variables and values.
Python supports a wide range of operators for assignment, arithmetic, comparison, and logical operations.

---

## 🧩 1. Assignment Operators

Assignment operators are used to assign values to variables.

➡️ In **mathematics**, `=` means equality.
➡️ In **Python**, `=` means **assignment** — it stores a value in a variable.

Example:

```python
x = 10   # assigns 10 to variable x
y = x    # assigns the value of x to y
```

<p align="center">
  <img src="https://raw.githubusercontent.com/Asabeneh/30-Days-Of-Python/master/images/assignment_operators.png" alt="Assignment Operators in Python" width="500"/>
</p>

---

## ➕ 2. Arithmetic Operators

Arithmetic operators are used to perform basic mathematical operations.

| Operator | Description    | Example  | Result                     |
| :------: | :------------- | :------- | :------------------------- |
|    `+`   | Addition       | `a + b`  | Sum of a and b             |
|    `-`   | Subtraction    | `a - b`  | Difference of a and b      |
|    `*`   | Multiplication | `a * b`  | Product of a and b         |
|    `/`   | Division       | `a / b`  | Quotient (float)           |
|    `%`   | Modulus        | `a % b`  | Remainder                  |
|   `//`   | Floor Division | `a // b` | Quotient (integer)         |
|   `**`   | Exponentiation | `a ** b` | a raised to the power of b |

Example:

```python
a = 10
b = 3

print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
print(a / b)  # 3.333...
print(a % b)  # 1
print(a // b) # 3
print(a ** b) # 1000
```

<p align="center">
  <img src="https://raw.githubusercontent.com/Asabeneh/30-Days-Of-Python/master/images/arithmetic_operators.png" alt="Arithmetic Operators in Python" width="500"/>
</p>

---

## ⚖️ 3. Comparison Operators

Comparison operators are used to compare two values.
They return either `True` or `False`.

| Operator | Description      | Example  | Result                        |
| :------: | :--------------- | :------- | :---------------------------- |
|   `==`   | Equal            | `a == b` | True if a equals b            |
|   `!=`   | Not equal        | `a != b` | True if a does not equal b    |
|    `>`   | Greater than     | `a > b`  | True if a is greater than b   |
|    `<`   | Less than        | `a < b`  | True if a is less than b      |
|   `>=`   | Greater or equal | `a >= b` | True if a is greater or equal |
|   `<=`   | Less or equal    | `a <= b` | True if a is less or equal    |

Example:

```python
a = 10
b = 5

print(a > b)   # True
print(a == b)  # False
print(a != b)  # True
print(a <= b)  # False
```

<p align="center">
  <img src="https://raw.githubusercontent.com/Asabeneh/30-Days-Of-Python/master/images/comparison_operators.png" alt="Comparison Operators in Python" width="500"/>
</p>

---

## 🧠 4. Logical Operators

Logical operators are used to combine multiple conditions.
Unlike other languages, Python uses the keywords `and`, `or`, and `not`.

| Operator | Description                                    | Example            | Result |
| :------: | :--------------------------------------------- | :----------------- | :----- |
|   `and`  | Returns True if both conditions are True       | `a > 5 and b < 10` | True   |
|   `or`   | Returns True if at least one condition is True | `a > 5 or b > 10`  | True   |
|   `not`  | Reverses the result                            | `not(a > 5)`       | False  |

Example:

```python
a = 10
b = 5

print(a > 5 and b < 10)  # True
print(a > 5 or b > 10)   # True
print(not(a > 5))        # False
```

<p align="center">
  <img src="https://github.com/Asabeneh/30-Days-Of-Python/raw/master/images/logical_operators.png" alt="Logical Operators in Python" width="500"/>
</p>

---

## 🧭 Summary

| Category   | Examples                            | Purpose                 |
| :--------- | :---------------------------------- | :---------------------- |
| Assignment | `=`, `+=`, `-=`, `*=`, `/=`         | Assign values           |
| Arithmetic | `+`, `-`, `*`, `/`, `%`, `//`, `**` | Mathematical operations |
| Comparison | `==`, `!=`, `>`, `<`, `>=`, `<=`    | Compare values          |
| Logical    | `and`, `or`, `not`                  | Combine conditions      |

---

## 🧩 Key Takeaways

✅ Operators perform computations and comparisons in Python.
✅ Assignment operators store values in variables.
✅ Arithmetic operators handle math operations.
✅ Comparison and logical operators evaluate conditions to `True` or `False`.
