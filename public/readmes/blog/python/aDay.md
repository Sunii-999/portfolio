# 🐍 Day 1 – 30DaysOfPython Challenge: Notes
[link](https://github.com/Asabeneh/30-Days-Of-Python/blob/master/readme.md)

## 🧩 Basic Arithmetic in Python

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

## 🧠 Data Types in Python

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

## 💡 Simple Expressions and Examples

### 🟢 1. Area of a Circle

Formula:

```python
area = 3.14 * radius ** 2
```

Example:

```python
radius = 5
area = 3.14 * radius ** 2
print(area)  # Output: 78.5
```

---

### 🟢 2. Average of Numbers

Formula:

```python
average = (a + b + c) / 3
```

Example:

```python
print((10 + 20 + 30) / 3)  # Output: 20.0
```

---

### 🟢 3. Combine Strings

```python
print("Sunii" + " " + "Developers")
# Output: Sunii Developers
```

---

## ✨ Key Takeaways

* The `print()` function displays information on the screen.
* Arithmetic operators let you perform basic math.
* `type()` helps identify what kind of data you’re working with.
* `/` is for normal division, `//` for floor division.
* Strings can be combined using `+`.
* Python supports multiple data types: numbers, strings, lists, tuples, sets, and dictionaries.

---

📘 **End of Day 1 Notes**

> Practiced arithmetic operations, data types, and simple expressions in Python.
