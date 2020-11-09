# react-native-bubble-input
![npm](https://img.shields.io/npm/v/react-native-bubble-input)

# Installation

`npm install react-native-bubble-input`

# Usage

```jsx
<BubbleInput data = [] />
```

```
<BubbleInput data = [{ name: "John", age:35 }, { name: "Betty", age:32 }]
             renderItem = (item) => {
               return <View style={{flexDirection: 'row'}}>
                  <Text>{item.name}</Text>
                  <Text style={{fontSize: 6}}>{item.age}</Text>
                  </View>
               }
             placeholder = "Add next..."
             addData = (textInput) => {
                const [name, age] = textInput.split(':');
               return {name: name, age: age}
             }
             />
```
## Props

- **`renderItem`** _(Object)_ - Messages to display
- **`placeholder`** _(String)_ - Typing Indicator state; default `false`. If you use`renderFooter` it will override this.
- **`addData`** _(Object)_ - Add object of any structure to render in renderItem
- **`data`** _(Array)_ - bubble texts to display
