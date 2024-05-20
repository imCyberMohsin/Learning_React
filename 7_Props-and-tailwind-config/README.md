# Tailwind & Props:

## Configure Tailwind with React(vite)
Follow Docs: [https://tailwindcss.com/docs/guides/vite](Open)

## Components:
Distribute each section of the page into multiple components to reuse them.

But when reusing the components the data will be different, so thats where 'props' are used.

## Props (Properties):
props are just properties passed in a function/component.

### Passing Props
props are passed when using the component. <Card name="Mohsin" />


### Access the passed props
In the component, use {props.username} to access the name property.

Also you can destructure the props ({username}) when passing to the function so you can directly use the props {username}. 
