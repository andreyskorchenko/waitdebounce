# Waitdebounce
Debounce wrapper function.

## Install
```sh
npm install waitdebounce
```

## Usage
```js
import { debounce } from 'waitdebounce';

const wait = debounce(e => {
    console.log(e.target.value);
}, 250);

const input = document.querySelector('.input');
input.addEventListener('keyup', wait);