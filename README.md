# KEY POINTS
1. Destructuring is the process of taking out properties and values from array or objects

## APPLICATION
1. In react any props passed to a component can be destructured

## CODE EXAMPLE
1. The below code props is from a parent component passing these props to it child
```javascript
<Contacts
        name ='Prince'
        email='prince@gmail.com'
        phone ='02434348343'
        />
```
## Consuming these props

## When is a functional componets

```javascript
 const {name, phone, email} = props
```

## When is a Class componets

```javascript
 const {name, phone, email} = this.props
```