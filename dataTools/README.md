# Match Converter

This is a tool that help you to convert matches data into the format that OverObserver can handle.

## Start using the tool

### Requirements

* Python

### Run the tool

#### Simple converter

```
$ python matchConverter.py
```

#### Read matches from txt file

You have to prepare a file with the matches in it.

##### Format

One row is a single match. Each role has 7 numbers.

Numbers in a row follow this rules:

* First one is the match number
* 2~4 is team 1~3 for **red** alliance
* 5~7 is team 1~3 for **blue** alliance

##### Example txt file

```
1 6083 6084 6085 6086 6087 6088
2 154 2558 6955 5181 9591 555
3 6494 1881 5518 5581 5588 1115 666
```

```
$ python matchConverter_readFromFile.py
```