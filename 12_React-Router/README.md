# React Router DOM

## Install & Setup
```sh
npm install react-router-dom
```

```sh
Import the module to use it
```


## Link & NavLink Tags (Routing)
```2. <Link>```
- Link is a component provided by React Router to create navigation links that change the URL and navigate to different routes without reloading the page.

Features:
- Prevents full page reloads, offering a smoother navigation experience.
- Works seamlessly with React Router to handle client-side routing.
- Does not have the active styling feature of NavLink.

```2. <NavLink>```
- NavLink is a special type of Link provided by React Router. It is used to create navigation links that can apply an active class/style when the link's target route matches the current URL.

Features:
- Adds an active class or style to the link when its route is active.
- Allows for customization of the active class or style using the activeClassName or activeStyle props.
- Useful for creating navigation menus where you need to highlight the active route.

## React Layout using { Outlet } hook

## Active Links

## Params using { useParams } hook

## Fetching Github Profile Using Github-API
    - fetch Github API
    - Loader() (Pre fetch the API data when hovering), (Reduces Loading Time)