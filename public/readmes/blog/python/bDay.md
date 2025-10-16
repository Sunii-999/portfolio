# 📘 Day 2: 30 Days of Python Programming

## 🧩 Exercises: Level 1

### 🎯 Tasks

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

### ✅ Example Code

```python
# Day 2: 30 Days of Python programming

first_name = 'Sunii'
last_name = 'Apples'
full_name = first_name + last_name  # or first_name + " " + last_name
country = "Germany"
city = "Berlin"
age = 23
year = 2001
is_married = True
is_true = False
is_light_on = True

# Multiple variable declaration in one line
first_name2, last_name2, country2, city2 = "Sunii", "Nineninenine", "Germany", "Berlin"
```

---

## 🧩 Exercises: Level 2

### 🎯 Tasks

1. Check the **data type** of all your variables using the `type()` function.
2. Use the `len()` function to find the **length** of your first name.
3. Compare the length of your first and last names.
4. Perform arithmetic operations using `num_one = 5` and `num_two = 4`.
5. Calculate:

   * Addition, subtraction, multiplication, division
   * Modulus, exponent, and floor division
6. Calculate the **area** and **circumference** of a circle with a given radius.
7. Use `input()` to take values from the user and calculate accordingly.
8. Run `help('keywords')` in Python shell to see all reserved keywords.

### ✅ Example Code

```python
print('=====================================')
# Data type check
print(type(first_name))
print(type(last_name))
print(type(full_name))
print(type(country))
print(type(city))
print(type(age))
print(type(year))
print(type(is_married))
print(type(is_true))
print(type(is_light_on))

print('=====================================')
# Length and comparison
print(len(first_name))
print(len(first_name) == len(last_name))

# Arithmetic operations
num_one = 5
num_two = 4

total = num_one + num_two
diff = num_one - num_two
product = num_one * num_two
division = num_one / num_two
remainder = num_one % num_two
exp = num_one ** num_two
floor_division = num_one // num_two

print("Total:", total)
print("Difference:", diff)
print("Product:", product)
print("Division:", division)
print("Remainder:", remainder)
print("Exponent:", exp)
print("Floor Division:", floor_division)

print('=====================================')
# Circle calculations
radius = 30
pi = 3.14159

area_of_circle = pi * radius ** 2
circum_of_circle = 2 * pi * radius

print("Area of circle:", area_of_circle)
print("Circumference of circle:", circum_of_circle)

# User input for radius
radius = float(input('Enter radius: '))
area_of_circle = pi * radius ** 2
print("Area of circle with user input:", area_of_circle)

# User input for personal details
first_name = input("Enter first name: ")
last_name = input("Enter last name: ")
country = input("Enter country: ")
age = float(input("Enter age: "))

print(first_name, last_name, country, age)

# View Python reserved keywords
# help('keywords')
```

---

## 🧠 Key Concepts Learned

* **Variables and Data Types**

  * `str`, `int`, `bool`, `float`
* **Built-in Functions**

  * `print()`, `type()`, `len()`, `input()`
* **Arithmetic Operators**

  * `+`, `-`, `*`, `/`, `%`, `**`, `//`
* **Boolean Values**

  * `True`, `False`
* **String Concatenation**

  * `full_name = first_name + " " + last_name`
* **Circle Calculations**

  * Area = π × r²
  * Circumference = 2 × π × r

---

## 🧮 Example Output

```
=====================================
<class 'str'>
<class 'str'>
<class 'str'>
<class 'str'>
<class 'str'>
<class 'int'>
<class 'int'>
<class 'bool'>
<class 'bool'>
<class 'bool'>
=====================================
5
False
Total: 9
Difference: 1
Product: 20
Division: 1.25
Remainder: 1
Exponent: 625
Floor Division: 1
=====================================
Area of circle: 2827.431
Circumference of circle: 188.4954
Enter radius: 10
Area of circle with user input: 314.159
Enter first name: Sunii
Enter last name: Apples
Enter country: Germany
Enter age: 23
Sunii Apples Germany 23
```

[link](https://github.com/Asabeneh/30-Days-Of-Python/blob/master/02_Day_Variables_builtin_functions/02_variables_builtin_functions.md)