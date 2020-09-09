// import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {

    const [theme, setTheme] = useLocalStorage("darkMode", initialValue)

    // const handleChange = () => {
    //     if (theme === "dark-mode") {
    //         setTheme("dark-mode")
    //     } else {
    //         setTheme("App")
    //     }
    // }

    // useEffect(() => {
    //     theme ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
    // }, [theme])
 
    
    return [theme, setTheme];
}

export default useDarkMode;


// export const useDarkMode = () => {
//     const [theme, setTheme] = useState(()=>{
//       return window.localStorage.getItem("theme") || "light"
//     });
  
//     const toggleTheme = () => {
//       if (theme === "light") {
//         window.localStorage.setItem("theme", "dark");
//         setTheme("dark");
//       } else {
//         window.localStorage.setItem("theme", "light");
//         setTheme("light");
//       }
//     };
  
//     return [theme, toggleTheme];
//   };
  

// - Call `useLocalStorage` and pass in the key you want to use to store to indicate whether or not dark mode 
// is enabled. Remember, this hook returns an array with a value and a setter in an array, exactly like the 
// state hook, so make sure to capture those values in a `const` - `const [someValue, setSomeValue] = 
// useLocalStorage('your key here')`
// - Finally, we need to return something out of `useDarkMode`, so we can use this in our app. What do you 
// think we'll need? We'll need to know if dark mode is enabled, right? And we'll need a setter function to 
// toggle dark mode. Let's just forward the value and the setter that were returned out of the `useLocalStorage`
//  call. Return those two values in an array as well.

// _In this case `useDarkMode` isn't doing any of it's own logic, just simply composing `useLocalStorage` 
// inside it and passing those values back to the component. There are other things we **could** do here to 
// extend even more logic. If you want to try that after you're finished, check out the first stretch goal 👍_